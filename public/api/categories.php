<?php
declare(strict_types=1);

$pdo = db();
$id = isset(route_parts()[1]) ? (int)route_parts()[1] : null;

if (method() === 'GET') {
    $rows = $pdo->query('SELECT id, name, slug, created_at FROM categories ORDER BY name ASC')->fetchAll();
    json_response($rows);
}

require_auth();
$data = input_json();

if (method() === 'POST') {
    $name = trim((string)($data['name'] ?? $data['category_name'] ?? ''));
    if (!$name) json_response(['error' => 'Category name is required'], 400);
    $slug = unique_slug('categories', $data['slug'] ?? $name);
    $stmt = $pdo->prepare('INSERT INTO categories (name, slug) VALUES (?, ?)');
    $stmt->execute([$name, $slug]);
    $stmt = $pdo->prepare('SELECT id, name, slug, created_at FROM categories WHERE id = ?');
    $stmt->execute([(int)$pdo->lastInsertId()]);
    json_response($stmt->fetch(), 201);
}

if (!$id) json_response(['error' => 'Category id is required'], 400);

if (method() === 'PUT') {
    $name = trim((string)($data['name'] ?? $data['category_name'] ?? ''));
    if (!$name) json_response(['error' => 'Category name is required'], 400);
    $slug = unique_slug('categories', $data['slug'] ?? $name, $id);
    $stmt = $pdo->prepare('UPDATE categories SET name = ?, slug = ? WHERE id = ?');
    $stmt->execute([$name, $slug, $id]);
    $stmt = $pdo->prepare('SELECT id, name, slug, created_at FROM categories WHERE id = ?');
    $stmt->execute([$id]);
    json_response($stmt->fetch());
}

if (method() === 'DELETE') {
    $stmt = $pdo->prepare('DELETE FROM categories WHERE id = ?');
    $stmt->execute([$id]);
    json_response(['success' => true]);
}

json_response(['error' => 'Method not allowed'], 405);
