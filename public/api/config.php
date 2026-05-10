<?php
declare(strict_types=1);

const DB_HOST = 'localhost';
const DB_PORT = '3306';
const DB_NAME = 'salvin_db';
const DB_USER = 'root';
const DB_PASSWORD = '';
const ADMIN_TOKEN = 'salvin-admin-token';

function db(): PDO
{
    static $pdo = null;
    if ($pdo instanceof PDO)
        return $pdo;

    $host = getenv('DB_HOST') ?: DB_HOST;
    $port = getenv('DB_PORT') ?: DB_PORT;
    $name = getenv('DB_NAME') ?: DB_NAME;
    $user = getenv('DB_USER') ?: DB_USER;
    $password = getenv('DB_PASSWORD') ?: DB_PASSWORD;
    $dsn = "mysql:host={$host};port={$port};dbname={$name};charset=utf8mb4";

    $pdo = new PDO($dsn, $user, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
    return $pdo;
}

function json_response($data, int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit;
}

function input_json(): array
{
    $raw = file_get_contents('php://input');
    if (!$raw)
        return [];
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

function require_auth(): void
{
    $header = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    $token = str_starts_with($header, 'Bearer ') ? substr($header, 7) : '';
    $expected = getenv('ADMIN_TOKEN') ?: ADMIN_TOKEN;
    if (!$token || !hash_equals($expected, $token)) {
        json_response(['error' => 'Authentication required'], 401);
    }
}

function slugify(string $value): string
{
    $slug = strtolower(trim($value));
    $slug = preg_replace('/[^a-z0-9]+/', '-', $slug);
    return trim($slug ?? '', '-');
}

function unique_slug(string $table, string $base, ?int $excludeId = null, ?int $categoryId = null): string
{
    $pdo = db();
    $base = slugify($base) ?: 'item-' . time();
    $slug = $base;
    $counter = 2;

    while (true) {
        if ($table === 'subcategories') {
            $stmt = $pdo->prepare('SELECT id FROM subcategories WHERE slug = ? AND category_id = ? AND (? IS NULL OR id <> ?) LIMIT 1');
            $stmt->execute([$slug, $categoryId, $excludeId, $excludeId]);
        } else {
            $stmt = $pdo->prepare("SELECT id FROM {$table} WHERE slug = ? AND (? IS NULL OR id <> ?) LIMIT 1");
            $stmt->execute([$slug, $excludeId, $excludeId]);
        }
        if (!$stmt->fetch())
            return $slug;
        $slug = $base . '-' . $counter++;
    }
}

function method(): string
{
    $override = $_POST['_method'] ?? $_SERVER['HTTP_X_HTTP_METHOD_OVERRIDE'] ?? '';
    return strtoupper($override ?: $_SERVER['REQUEST_METHOD']);
}

function route_parts(): array
{
    $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?: '';
    $path = preg_replace('#^/api/?#', '', $path);
    return array_values(array_filter(explode('/', trim($path, '/'))));
}

function parse_specs($value): array
{
    if (!$value)
        return [];
    if (is_array($value))
        return $value;
    $data = json_decode((string) $value, true);
    if (is_array($data))
        return $data;
    return [];
}

function normalize_machine(array $row): array
{
    $specs = parse_specs($row['specifications'] ?? '');
    return [
        ...$row,
        'machine_id' => (int) $row['id'],
        'category_id' => $row['category_name'] ?? '',
        'category_name' => $row['category_name'] ?? '',
        'category_db_id' => (int) $row['category_db_id'],
        'subcategory' => $row['subcategory_name'] ?? '',
        'subcategory_name' => $row['subcategory_name'] ?? '',
        'subcategory_db_id' => $row['subcategory_db_id'] ? (int) $row['subcategory_db_id'] : null,
        'specifications' => $specs,
        'tags' => array_values(array_filter([$row['category_name'] ?? '', $row['subcategory_name'] ?? ''])),
        'status' => 'active',
    ];
}

function machine_select_sql(): string
{
    return '
        SELECT
            m.id,
            m.machine_name,
            m.slug,
            m.description,
            m.image_url,
            m.meta_title,
            m.meta_description,
            m.specifications,
            m.created_at,
            m.updated_at,
            c.id AS category_db_id,
            c.name AS category_name,
            s.id AS subcategory_db_id,
            s.name AS subcategory_name
        FROM machines m
        JOIN categories c ON c.id = m.category_id
        LEFT JOIN subcategories s ON s.id = m.subcategory_id
    ';
}
