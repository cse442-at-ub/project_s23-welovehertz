<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'config.php';
$db = new DbConn;
$conn = $db->connect();

session_start();

function getUser($con, $email, $password)
{
    $sql = "SELECT * FROM users WHERE email='$email'";
    $stmt = $con->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if ($result) {
        $hashedPW = $result[0]['password'];
        if (password_verify($password, $hashedPW)) {
            //Cookie is for user and the value is the email. Cookie expires in one day (86400 == 1 day) 
            //and is accessable across the whole website
            $cookie_name = 'currentUserCookie';
            //3600 is one hour
            setcookie($cookie_name, $result[0]['id'], time() + 3600, "/");
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

<!-- IGNORE THIS BELOW -->
<!-- if(!isset($_COOKIE[$cookie_name])) {
                echo "Cookie named '" . $cookie_name . "' is not set!";
            } else {
                echo "Cookie '" . $cookie_name . "' is set!<br>";
                echo "Value is: " . $_COOKIE[$cookie_name];
            } -->