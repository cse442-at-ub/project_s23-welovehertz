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
        $pageid = $data->$pageid;

        // retrieve data from database
        $sql = "SELECT Cleanliness, Price, Communication, Locationrating, Interior, Safety, NumOfRates FROM Residences WHERE id = $pageid";
        $stmt = $conn->query($sql);

        // store data in separate variables
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $cleanliness = $row['Cleanliness'];
        $price = $row['Price'];
        $communication = $row['Communication'];
        $location = $row['Locationrating'];
        $interior = $row['Interior'];
        $safety = $row['Safety'];
        $numofrates = $row['NumOfRates'];

        // cal each total ratings
        $cleanliness += $cleanlinessRating;
        $price += $priceRating;
        $communication += $communicationRating;
        $location += $locationRating;
        $interior += $interiorRating;
        $safety += $safetyRating;
        // cal total user rates
        $numofrates += 1;

        // Create SQL query to update the ratings data in the database
        $sql = "UPDATE Residences SET Cleanliness=$cleanliness, Price=$price, Communication=$communication, Locationrating=$location, Interior=$interior, Safety=$safety, NumOfRates=$numofrates WHERE id=$pageid";
        $conn->prepare($sql);
        $output = [];
        $output['cleanliness'] = $cleanliness / $numofrates;
        $output['price'] = $price / $numofrates;
        $output['communication'] = $communication / $numofrates;
        $output['location'] = $location / $numofrates;
        $output['interior'] = $interior / $numofrates;
        $output['safety'] = $safety / $numofrates;

        // Execute the query
        if ($conn->query($sql) === TRUE) {
            echo "Ratings data updated successfully!";
        } else {
            echo "Error updating ratings data: " . $conn->errorInfo();
        }
        
        echo json_encode($output);
}
