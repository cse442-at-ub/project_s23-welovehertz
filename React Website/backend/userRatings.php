<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'config.php';
$db = new DbConn;
$conn = $db->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $data = json_decode(file_get_contents('php://input'));
        $residenceComplexID = $data->id;
        $sql = "SELECT * FROM `User Ratings` WHERE `Residence Rated` = $residenceComplexID";
        $param = $conn->prepare($sql);
        $param->execute();
        $resi = $param->fetchAll(PDO:: FETCH_ASSOC);
        // echo json_encode($resi);
}



?>;