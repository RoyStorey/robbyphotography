<?php


function initializeDB($servername,$username,$password,$schema) {
  // Create connection
  $conn = new mysqli($servername, $username, $password, $schema);
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully";
  return $conn;
}



function insert($conn){
  $temp1 = $_POST['fullname'];
  $temp2 = $_POST['email'];
  $temp3 = $_POST['message'];
  $stmt = $conn->prepare("INSERT INTO inquire (fullname, email, message) VALUES (?, ?, ?)");
  $stmt->bind_param("sss", $temp1, $temp2, $temp3);
  $stmt->execute();
  $stmt->close();
  $conn->close();
}

// echo json_encode myarrayofeventism


?> 