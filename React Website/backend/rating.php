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
            $cleanlinessRating = $data->data->cleanlinessRating;
            $priceRating = $data->data->priceRating;
            $communicationRating = $data->data->communicationRating;
            $locationRating = $data->data->locationRating;
            $interiorRating = $data->data->interiorRating;
            $safetyRating = $data->data->safetyRating;
            $comment = $data->data->comment;
            $id = $data->userid;
            $pageid = $data->pageid;
            $sql = "SELECT * FROM `User Ratings` WHERE id = $id AND `Residence Rated` = $pageid";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $count = intval($stmt->fetchColumn());
            echo $count;
            if ($count > 0) {
                echo "inside";
                $x = "UPDATE `User Ratings` SET Cleanliness = ?, Price = ?, Communication = ?, Location = ?, Interior = ?, Safety = ? WHERE id = ? AND `Residence Rated` = ?";
                $row = $result->fetch_assoc();
                $stmt_update = $conn->prepare($x);
                $stmt_update->bindParam("iiiiiii", $cleanlinessRating, $priceRating, $communicationRating, $locationRating, $interiorRating, $safetyRating, $id, $pageid);
                $stmt_update->execute();
                $response = array(
                    'status' => 'success',
                    'message' => 'Rating and comment updated successfully'
                );
            } else {
                // Insert rating into database
                $sql_rating = "INSERT INTO `User Ratings` (User, `Residence Rated`, Cleanliness, Price, Communication, Location, Interior, Safety) VALUES ('$id', '$pageid', '$cleanlinessRating', '$priceRating', '$communicationRating', '$locationRating', '$interiorRating', '$safetyRating')";
                $stmt_rating = $conn->query($sql_rating);

                // Insert comment into database
                $sql_comment = "INSERT INTO `User Comments` (User, `Residence Rated`, comment) VALUES ('$id', '$pageid', '$comment')";
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
            }
    }