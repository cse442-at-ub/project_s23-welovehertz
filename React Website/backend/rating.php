<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'config.php';
$db = new DbConn;
$conn = $db->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        // Retrieve data from the request body
        $data = json_decode(file_get_contents("php://input"));

        // Extract the necessary fields from the data
        $cleanlinessRating = $data->cleanlinessRating;
        $priceRating = $data->priceRating;
        $communicationRating = $data->communicationRating;
        $locationRating = $data->locationRating;
        $interiorRating = $data->interiorRating;
        $safetyRating = $data->safetyRating;
        $comment = $data->comment;
        $id = $data->id;
        $pageid = $data->pageid;

        // Insert rating into database
        $sql_rating = "INSERT INTO `User Rating` (User, `Residence Rated`, Cleanliness, Price, Communication, Location, Interior, Safety) VALUES ('$id', '$pageid', '$cleanlinessRating', '$priceRating', '$communicationRating', '$locationRating', '$interiorRating', '$safetyRating')";
        $stmt_rating = $conn->query($sql_rating);

        // Insert comment into database
        $sql_comment = "INSERT INTO `User Comment` (User, `Residence Rated`, comment) VALUES ('$id', '$pageid', '$comment')";
        $stmt_comment = $conn->query($sql_comment);

        // Check if both statements were successful
        if ($stmt_rating && $stmt_comment) {
            // Return a success response
            $response = array(
                'status' => 'success',
                'message' => 'Rating and comment added successfully'
            );
        } else {
            // Return an error response
            $response = array(
                'status' => 'error',
                'message' => 'Failed to add rating and comment'
            );
        }

        // Encode the response as a JSON string
        $json_response = json_encode($response);

        // Set the content-type header to JSON
        header('Content-Type: application/json');

        // Return the JSON-encoded response
        echo $json_response;
        break;
    default:
        // Return an error response for unsupported methods
        $response = array(
            'status' => 'error',
            'message' => 'Unsupported method'
        );

        // Encode the response as a JSON string
        $json_response = json_encode($response);

        // Set the content-type header to JSON
        header('Content-Type: application/json');

        // Return the JSON-encoded response
        echo $json_response;
        break;
}
