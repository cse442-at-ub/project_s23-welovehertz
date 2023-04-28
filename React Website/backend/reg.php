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
    $sql = "SELECT COUNT(*) FROM users WHERE email = :email";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $user->email);
    $stmt->execute();
    $count = $stmt->fetchColumn();
    // Validate input fields
    $errors = [];

    if ($count > 0) {
      $errors['email'] = 'Email address already exists';
    }
    if (!preg_match('/^[a-zA-Z ]+$/', $user->first_name)) {
      $errors['first_name'] = 'First name should only contain letters and spaces';
    }
    if (!preg_match('/^[a-zA-Z ]+$/', $user->last_name)) {
      $errors['last_name'] = 'Last name should only contain letters and spaces';
    }
    if (!filter_var($user->email, FILTER_VALIDATE_EMAIL)) {
      $errors['email'] = 'Invalid email address';
    }
    if ($user->password !== $user->confirm_password) {
      $errors['confirm_password'][] = 'Passwords do not match';
    }
    if (strlen($user->password) < 8) {
      $errors['password'][] = 'Password should be at least 8 characters long';
    }
    if (count($errors) > 0) {
      $response = ['status' => 0, 'message' => 'Input validation failed', 'errors' => $errors];
      echo json_encode($response);
      exit();
    } else {
      $sql = "INSERT INTO users (first_name, last_name, email, password, favorite_list, pfp) VALUES (:first, :last, :email, :password, 1, :pfp)";
      $param = $conn->prepare($sql);
      $param->bindParam(':first', $user->first_name);
      $param->bindParam(':last', $user->last_name);
      $param->bindParam(':email', $user->email);
      $hashed_password = password_hash($user->password, PASSWORD_DEFAULT);
      $param->bindParam(':password', $hashed_password);
      $param->bindParam(':pfp', $user->pfp);
      if ($param->execute()) {
        $response = ['status' => 1, 'message' => 'Record Created'];
      } else {
        $response = ['status' => 0, 'message' => 'Record Failed to Create'];
      }
      echo json_encode($response);
      break;
    }
}