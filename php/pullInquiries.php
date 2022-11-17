<?php
require "../php/credentials.php";
require "../php/functions.php";

$conn = initializeDB($servername,$username,$password,$schema);
$result = $conn->query(<<<SQL
      SELECT * FROM events
SQL);
