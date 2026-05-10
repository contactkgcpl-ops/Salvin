<?php
declare(strict_types=1);

require __DIR__ . '/config.php';

try {
    $parts = route_parts();
    $resource = $parts[0] ?? '';

    if ($resource === 'health') {
        json_response(['ok' => true, 'service' => 'Salvin PHP API']);
    }

    if ($resource === 'auth' && ($parts[1] ?? '') === 'login') {
        $data = input_json();
        $username = trim((string)($data['admin_id'] ?? $data['username'] ?? ''));
        $password = (string)($data['password'] ?? '');
        $adminUser = getenv('ADMIN_USERNAME') ?: 'admin';
        $adminPass = getenv('ADMIN_PASSWORD') ?: 'admin@123';
        $token = getenv('ADMIN_TOKEN') ?: ADMIN_TOKEN;
        if ($username !== $adminUser || $password !== $adminPass) {
            json_response(['error' => 'Invalid admin ID or password'], 401);
        }
        json_response(['token' => $token, 'admin_id' => $adminUser]);
    }

    if ($resource === 'categories') {
        require __DIR__ . '/categories.php';
        exit;
    }

    if ($resource === 'subcategories') {
        require __DIR__ . '/subcategories.php';
        exit;
    }

    if ($resource === 'machines') {
        require __DIR__ . '/machines.php';
        exit;
    }

    if ($resource === 'dashboard') {
        require_auth();
        $pdo = db();
        $counts = $pdo->query('
            SELECT
                (SELECT COUNT(*) FROM machines) AS total_machines,
                (SELECT COUNT(*) FROM categories) AS total_categories,
                (SELECT COUNT(*) FROM subcategories) AS total_subcategories
        ')->fetch();
        $recent = $pdo->query(machine_select_sql() . ' ORDER BY m.created_at DESC LIMIT 5')->fetchAll();
        json_response([...$counts, 'recent_machines' => array_map('normalize_machine', $recent)]);
    }

    json_response(['error' => 'API route not found'], 404);
} catch (Throwable $error) {
    json_response(['error' => $error->getMessage()], 500);
}
