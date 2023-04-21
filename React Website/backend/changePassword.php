<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'config.php';
$db = new DbConn;
$conn = $db->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $user_id = $user->id;
        $new_password = $user->newPassword;
        if (strlen($new_password) < 8) {
            echo "Password should be at least 8 characters long";
        } else {
            echo $new_password;
            $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);
            echo $hashed_password;
            $sql = "UPDATE users SET password='$hashed_password' WHERE id=$user_id";
            $param = $conn->prepare($sql);
            $param->execute();
        }
        break;
}
?>;