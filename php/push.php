<?php
require "credentials.php";
require "functions.php";

if (isset($_POST["fullname"])) {
   echo "ye";
   $conn = initializeDB($servername,$username,$password,$schema);
   insert($conn);
}
else{
  echo "nah";
}
?> 