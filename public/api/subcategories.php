<?php
declare(strict_types=1);

$pdo = db();
$id = isset(route_parts()[1]) ? (int)route_parts()[1] : null;

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
    $slug = unique_slug('subcategories', $data['slug'] ?? $name, null, $categoryId);
    $stmt = $pdo->prepare('INSERT INTO subcategories (category_id, name, slug) VALUES (?, ?, ?)');
    $stmt->execute([$categoryId, $name, $slug]);
    $stmt = $pdo->prepare('SELECT * FROM subcategories WHERE id = ?');
    $stmt->execute([(int)$pdo->lastInsertId()]);
    json_response($stmt->fetch(), 201);
}

if (!$id) json_response(['error' => 'Subcategory id is required'], 400);

if (method() === 'PUT') {
    $categoryId = (int)($data['category_id'] ?? 0);
    $name = trim((string)($data['name'] ?? $data['subcategory_name'] ?? ''));
    if (!$categoryId || !$name) json_response(['error' => 'Valid category and subcategory are required'], 400);
    $slug = unique_slug('subcategories', $data['slug'] ?? $name, $id, $categoryId);
    $stmt = $pdo->prepare('UPDATE subcategories SET category_id = ?, name = ?, slug = ? WHERE id = ?');
    $stmt->execute([$categoryId, $name, $slug, $id]);
    $stmt = $pdo->prepare('SELECT * FROM subcategories WHERE id = ?');
    $stmt->execute([$id]);
    json_response($stmt->fetch());
}

if (method() === 'DELETE') {
    $stmt = $pdo->prepare('DELETE FROM subcategories WHERE id = ?');
    $stmt->execute([$id]);
    json_response(['success' => true]);
}

json_response(['error' => 'Method not allowed'], 405);
