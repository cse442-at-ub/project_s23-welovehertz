<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'config.php';
$db = new DbConn;
$conn = $db->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $select_user = "SELECT * FROM users";
        $data = array();
        while($row = mysqli_fetch_array($result)) {
            array_push($data,$row['name']."".$row['email']); 
        }

        if($param->execute()) {
            $response = ['status' => 1, 'message' => 'Record Created'];
        }else {
            $response = ['status' => 0, 'message' => 'Record Failed to Create'];
        }
        echo json_encode($response);
        break;
}
?>