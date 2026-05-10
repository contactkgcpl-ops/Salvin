<?php
declare(strict_types=1);

$pdo = db();
$id = isset(route_parts()[1]) ? (int)route_parts()[1] : null;

function get_subcategory(PDO $pdo, int $id): array|false {
    $stmt = $pdo->prepare('
        SELECT s.id, s.category_id, s.name, s.slug, s.created_at, c.name AS category_name
        FROM subcategories s
        JOIN categories c ON c.id = s.category_id
        WHERE s.id = ?
        LIMIT 1
    ');
    $stmt->execute([$id]);
    return $stmt->fetch();
}

if (method() === 'GET') {
    $categoryId = isset($_GET['category_id']) ? (int)$_GET['category_id'] : null;
    $sql = '
        SELECT s.id, s.category_id, s.name, s.slug, s.created_at, c.name AS category_name
        FROM subcategories s
        JOIN categories c ON c.id = s.category_id
        WHERE (? IS NULL OR s.category_id = ?)
        ORDER BY c.name ASC, s.name ASC
    ';
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$categoryId, $categoryId]);
    json_response($stmt->fetchAll());
}

require_auth();
$data = input_json();

if (method() === 'POST') {
    $categoryId = (int)($data['category_id'] ?? 0);
    $name = trim((string)($data['name'] ?? $data['subcategory_name'] ?? ''));
    if (!$categoryId || !$name) json_response(['error' => 'Valid category and subcategory are required'], 400);

    $stmt = $pdo->prepare('SELECT id FROM categories WHERE id = ? LIMIT 1');
    $stmt->execute([$categoryId]);
    if (!$stmt->fetch()) {
        json_response(['error' => 'Selected category does not exist. Refresh admin page and select a valid category.'], 400);
    }

    $slug = unique_slug('subcategories', $data['slug'] ?? $name, null, $categoryId);
    $stmt = $pdo->prepare('INSERT INTO subcategories (category_id, name, slug) VALUES (?, ?, ?)');
    $stmt->execute([$categoryId, $name, $slug]);
    json_response(get_subcategory($pdo, (int)$pdo->lastInsertId()), 201);
}

if (!$id) json_response(['error' => 'Subcategory id is required'], 400);

if (method() === 'PUT') {
    $categoryId = (int)($data['category_id'] ?? 0);
    $name = trim((string)($data['name'] ?? $data['subcategory_name'] ?? ''));
    if (!$categoryId || !$name) json_response(['error' => 'Valid category and subcategory are required'], 400);

    $stmt = $pdo->prepare('SELECT id FROM categories WHERE id = ? LIMIT 1');
    $stmt->execute([$categoryId]);
    if (!$stmt->fetch()) {
        json_response(['error' => 'Selected category does not exist. Refresh admin page and select a valid category.'], 400);
    }

    $slug = unique_slug('subcategories', $data['slug'] ?? $name, $id, $categoryId);
    $stmt = $pdo->prepare('UPDATE subcategories SET category_id = ?, name = ?, slug = ? WHERE id = ?');
    $stmt->execute([$categoryId, $name, $slug, $id]);
    json_response(get_subcategory($pdo, $id));
}

if (method() === 'DELETE') {
    $stmt = $pdo->prepare('UPDATE machines SET subcategory_id = NULL WHERE subcategory_id = ?');
    $stmt->execute([$id]);
    $stmt = $pdo->prepare('DELETE FROM subcategories WHERE id = ?');
    $stmt->execute([$id]);
    json_response(['success' => true]);
}

json_response(['error' => 'Method not allowed'], 405);
