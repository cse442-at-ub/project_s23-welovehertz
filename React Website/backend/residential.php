<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'config.php';
$db = new DbConn;
$conn = $db->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM Residences";
        $param = $conn->prepare($sql);
        $param->execute();
        $resi = $param->fetchAll(PDO:: FETCH_ASSOC);
        echo json_encode($resi);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $id = $user->id;
        $sql = "SELECT * FROM Residences WHERE id=$id";
        $param = $conn->prepare($sql);
        $param->execute();
        $resi = $param->fetchAll(PDO:: FETCH_ASSOC);
        echo json_encode($resi);
        break;
}
?>;