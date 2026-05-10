<?php
declare(strict_types=1);

$pdo = db();
$parts = route_parts();
$identifier = $parts[1] ?? null;

if (method() === 'GET') {
    if ($identifier) {
        $stmt = $pdo->prepare(machine_select_sql() . ' WHERE m.slug = ? OR m.id = ? LIMIT 1');
        $stmt->execute([$identifier, (int)$identifier]);
        $row = $stmt->fetch();
        if (!$row) json_response(['error' => 'Machine not found'], 404);
        json_response(normalize_machine($row));
    }
    $rows = $pdo->query(machine_select_sql() . ' ORDER BY m.created_at DESC')->fetchAll();
    json_response(array_map('normalize_machine', $rows));
}

require_auth();

function machine_payload(?array $current = null): array {
    $machineName = trim((string)($_POST['machine_name'] ?? ''));
    $description = trim((string)($_POST['description'] ?? ''));
    $categoryId = (int)($_POST['category_id'] ?? 0);
    $subcategoryId = isset($_POST['subcategory_id']) && $_POST['subcategory_id'] !== '' ? (int)$_POST['subcategory_id'] : null;
    if (!$machineName) json_response(['error' => 'Machine name is required'], 400);
    if (!$description) json_response(['error' => 'Description is required'], 400);
    if (!$categoryId) json_response(['error' => 'Valid category is required'], 400);

    $imageUrl = trim((string)($_POST['image_url'] ?? ($current['image_url'] ?? '')));
    if (!empty($_FILES['image']['tmp_name'])) {
        $allowed = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp'];
        $mime = mime_content_type($_FILES['image']['tmp_name']);
        if (!isset($allowed[$mime])) json_response(['error' => 'Only JPG, PNG, and WEBP images are allowed'], 400);
        $uploadDir = dirname(__DIR__) . '/uploads/machines';
        if (!is_dir($uploadDir)) mkdir($uploadDir, 0775, true);
        $filename = (slugify($machineName) ?: 'machine') . '-' . time() . '.' . $allowed[$mime];
        if (!move_uploaded_file($_FILES['image']['tmp_name'], $uploadDir . '/' . $filename)) {
            json_response(['error' => 'Image upload failed'], 500);
        }
        $imageUrl = '/uploads/machines/' . $filename;
    }

    $specifications = json_encode(parse_specs($_POST['specifications'] ?? '[]'));
    return [
        'machine_name' => $machineName,
        'slug_base' => $_POST['slug'] ?? $machineName,
        'description' => $description,
        'image_url' => $imageUrl,
        'meta_title' => trim((string)($_POST['meta_title'] ?? $machineName)),
        'meta_description' => trim((string)($_POST['meta_description'] ?? $description)),
        'category_id' => $categoryId,
        'subcategory_id' => $subcategoryId,
        'specifications' => $specifications,
    ];
}

if (method() === 'POST') {
    $payload = machine_payload();
    $slug = unique_slug('machines', $payload['slug_base']);
    $stmt = $pdo->prepare('
        INSERT INTO machines
            (machine_name, slug, description, image_url, meta_title, meta_description, category_id, subcategory_id, specifications)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ');
    $stmt->execute([
        $payload['machine_name'], $slug, $payload['description'], $payload['image_url'],
        $payload['meta_title'], $payload['meta_description'], $payload['category_id'],
        $payload['subcategory_id'], $payload['specifications']
    ]);
    $stmt = $pdo->prepare(machine_select_sql() . ' WHERE m.id = ? LIMIT 1');
    $stmt->execute([(int)$pdo->lastInsertId()]);
    json_response(normalize_machine($stmt->fetch()), 201);
}

if (!$identifier) json_response(['error' => 'Machine id is required'], 400);
$id = (int)$identifier;

if (method() === 'PUT') {
    $stmt = $pdo->prepare('SELECT * FROM machines WHERE id = ? LIMIT 1');
    $stmt->execute([$id]);
    $current = $stmt->fetch();
    if (!$current) json_response(['error' => 'Machine not found'], 404);
    $payload = machine_payload($current);
    $slug = unique_slug('machines', $payload['slug_base'], $id);
    $stmt = $pdo->prepare('
        UPDATE machines SET
            machine_name = ?, slug = ?, description = ?, image_url = ?, meta_title = ?,
            meta_description = ?, category_id = ?, subcategory_id = ?, specifications = ?
        WHERE id = ?
    ');
    $stmt->execute([
        $payload['machine_name'], $slug, $payload['description'], $payload['image_url'],
        $payload['meta_title'], $payload['meta_description'], $payload['category_id'],
        $payload['subcategory_id'], $payload['specifications'], $id
    ]);
    $stmt = $pdo->prepare(machine_select_sql() . ' WHERE m.id = ? LIMIT 1');
    $stmt->execute([$id]);
    json_response(normalize_machine($stmt->fetch()));
}

if (method() === 'DELETE') {
    $stmt = $pdo->prepare('DELETE FROM machines WHERE id = ?');
    $stmt->execute([$id]);
    json_response(['success' => true]);
}

json_response(['error' => 'Method not allowed'], 405);
