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
        $pfp = $user->pfp;
        echo $pfp;
        $sql = "UPDATE users SET pfp='$pfp' WHERE id=$user_id";
        $param = $conn->prepare($sql);
        $param->execute();
}
?>;