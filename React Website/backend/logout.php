<?php
session_start();

// Clear the session data
session_unset();

// Destroy the session
session_destroy();

// Return a response indicating the logout was successful
$response = array(
    "status" => "success",
    "message" => "You have been logged out."
);

echo json_encode($response);
?>
