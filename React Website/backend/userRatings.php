<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'config.php';
$db = new DbConn;
$conn = $db->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        $data = json_decode(file_get_contents('php://input'));
        $residenceComplexID = $data->id;
        $user = $data->user;
        $sql = "SELECT * FROM `User Ratings` WHERE id=$id";
        $param = $conn->prepare($sql);
        $param->execute();
        $resi = $param->fetchAll(PDO:: FETCH_ASSOC);

}
?>;