<?php
session_start();

$password = 'admin123@';
$html_file = 'index.html';

// Handle login
if (isset($_POST['login'])) {
    if ($_POST['password'] === $password) {
        $_SESSION['logged_in'] = true;
    } else {
        $error = "Sai mật khẩu!";
    }
}

// Handle logout
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: admin.php");
    exit;
}

// Check if logged in
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    ?>
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <title>Đăng nhập Admin</title>
        <style>
            body { font-family: sans-serif; background: #f3ede8; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
            .login-box { background: #fff; padding: 40px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); text-align: center; }
            input[type="password"] { padding: 10px; width: 200px; border: 1px solid #ccc; border-radius: 4px; margin-bottom: 15px; }
            button { padding: 10px 20px; background: #c8a24a; color: #fff; border: none; border-radius: 4px; cursor: pointer; }
            .error { color: red; margin-bottom: 15px; }
        </style>
    </head>
    <body>
        <div class="login-box">
            <h2>Quản trị Website</h2>
            <?php if(isset($error)) echo "<div class='error'>$error</div>"; ?>
            <form method="POST">
                <input type="password" name="password" placeholder="Nhập mật khẩu..." required><br>
                <button type="submit" name="login">Đăng nhập</button>
            </form>
        </div>
    </body>
    </html>
    <?php
    exit;
}

// --- ADMIN DASHBOARD ---

// Read HTML
$html = file_get_contents($html_file);

// Handle save
if (isset($_POST['save'])) {
    $new_html = $html;
    foreach ($_POST['edit'] as $key => $value) {
        // Sanitize slightly, but keep HTML allowed if they want
        $value = stripslashes($value);
        // Replace in HTML using regex
        $pattern = '/(<!-- \[EDIT:' . preg_quote($key, '/') . '\] -->)(.*?)(<!-- \[\/EDIT:' . preg_quote($key, '/') . '\] -->)/s';
        $new_html = preg_replace($pattern, '$1' . $value . '$3', $new_html);
    }
    file_put_contents($html_file, $new_html);
    $html = $new_html; // Update for current view
    $success = "Đã lưu thay đổi thành công!";
}

// Extract all editable fields
$pattern = '/<!-- \[EDIT:(.*?)\] -->(.*?)<!-- \[\/EDIT:\1\] -->/s';
preg_match_all($pattern, $html, $matches);

$editable_fields = [];
if (!empty($matches[1])) {
    for ($i = 0; $i < count($matches[1]); $i++) {
        $editable_fields[$matches[1][$i]] = $matches[2][$i];
    }
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Chỉnh sửa Nội dung</title>
    <style>
        body { font-family: sans-serif; background: #f9f9f9; padding: 40px; color: #333; }
        .container { max-width: 800px; margin: 0 auto; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #f3ede8; padding-bottom: 20px; margin-bottom: 20px; }
        .header h1 { margin: 0; color: #25221d; }
        .logout { color: #c8a24a; text-decoration: none; }
        .field { margin-bottom: 20px; }
        .field label { display: block; font-weight: bold; margin-bottom: 8px; color: #666; }
        .field textarea { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; min-height: 80px; font-family: inherit; font-size: 15px; box-sizing: border-box; }
        button.save { padding: 12px 24px; background: #25221d; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; font-weight: bold; width: 100%; }
        button.save:hover { background: #c8a24a; }
        .success { background: #d4edda; color: #155724; padding: 15px; border-radius: 4px; margin-bottom: 20px; text-align: center; font-weight: bold; }
        .no-fields { text-align: center; padding: 40px; color: #999; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Chỉnh sửa Nội dung</h1>
            <a href="?logout=1" class="logout">Đăng xuất</a>
        </div>
        
        <?php if(isset($success)) echo "<div class='success'>$success</div>"; ?>

        <?php if(empty($editable_fields)): ?>
            <div class="no-fields">Chưa có thẻ [EDIT:...] nào được đánh dấu trong file index.html.</div>
        <?php else: ?>
            <form method="POST">
                <?php foreach ($editable_fields as $key => $value): ?>
                    <div class="field">
                        <label><?= htmlspecialchars(ucfirst(str_replace('_', ' ', $key))) ?></label>
                        <textarea name="edit[<?= htmlspecialchars($key) ?>]"><?= htmlspecialchars(trim($value)) ?></textarea>
                    </div>
                <?php endforeach; ?>
                <button type="submit" name="save" class="save">Lưu tất cả thay đổi</button>
            </form>
        <?php endif; ?>
    </div>
</body>
</html>
