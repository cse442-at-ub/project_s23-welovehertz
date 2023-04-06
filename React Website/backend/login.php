<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'config.php';
$db = new DbConn;
$conn = $db->connect();

session_start();

function getUser($con, $email, $password) {
    $sql = "SELECT * FROM users WHERE email='$email'";
    $stmt = $con->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if ($result) {
        $hashedPW = $result[0]['password'];
        // echo $hashedPW . "\n";
        if (password_verify($password, $hashedPW)) {
            echo "Account Verified" . "\n";
            return 1;
        } else {
            echo "Wrong Password" . "\n";
            return 0;
        }
    } else {
        echo "No Account With That Email" . "\n";
        return 0;
    }
}

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $email = $user->email;
        $password = $user->password;
        $user = getUser($conn, $email, $password);
        if ($user == 0) {
            $_SESSION['error'] = "Username and password did not match";
            echo '<script>alert("', $_SESSION['error'], '"); window.location.href ="reg.php"; </script>';
            exit();
        }
        $_SESSION['email'] = $email;
        exit();
}

?>;