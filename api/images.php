<?php
require "../php/credentials.php";
require "../php/functions.php";

$conn = initializeDB($servername,$username,$password,$schema);
$result = $conn->query(<<<SQL
      SELECT 
        events.*, 
        images.*
      FROM events
      INNER JOIN images ON images.eventId = events.id AND images.thumbnailFlag
SQL);

// echo json_encode($result);
echo "balls";















// $temp1 = $_POST['fullname'];
// $temp2 = $_POST['email'];
// $temp3 = $_POST['message'];
// $stmt = $conn->prepare("INSERT INTO inquire (fullname, email, message) VALUES (?, ?, ?)");
// $stmt->bind_param("sss", $temp1, $temp2, $temp3);
// $stmt->execute();
// $stmt->close();
// $conn->close();
