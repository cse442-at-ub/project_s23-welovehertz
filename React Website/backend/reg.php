<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'config.php';
$db = new DbConn;
$conn = $db->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
      $user = json_decode(file_get_contents('php://input'));
      $hashed_pass = password_hash($user->password,PASSWORD_DEFAULT);
      $sql = "INSERT INTO users (first_name, last_name, email, password) VALUES (:first, :last, :email, :password)";
      $param = $conn->prepare($sql);
      $param->bindParam(':first', $user->first_name);
      $param->bindParam(':last', $user->last_name);
      $param->bindParam(':email', $user->email);
      $param->bindParam(':password', $hashed_pass);
      if($param->execute()) {
        $response = ['status' => 1, 'message' => 'Record Created'];
      }else {
        $response = ['status' => 0, 'message' => 'Record Failed to Create'];
      }
      break;
      echo json_encode($response);

}


?>