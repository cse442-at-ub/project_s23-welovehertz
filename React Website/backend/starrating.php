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
        $userID = $data->userid;
        $rating = $data->rating;
        $sql = "UPDATE `User Ratings` SET `OverallRating` = $rating WHERE `Residence Rated` = $residenceComplexID AND `User` = $userID";
        $param = $conn->prepare($sql);
        $param->execute();
}



?>;