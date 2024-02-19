<?php
// sql connection
$conn = mysqli_connect("localhost", "root", "", "fetchapi");

// get data from form 
$username = $_POST['username'];
$email = $_POST['email'];
$phoneNumber = $_POST['phoneNumber'];
$password = $_POST['password'];

// insert into database

$sql = mysqli_query($conn, "INSERT INTO `data`(`username`, `email`, `mobNumber`, `password`) VALUES ('$username','$email','$phoneNumber','$password')");

//send response to the browser

if($sql){
    echo "<div class='alert alert-success'>Successfully uploaded.</div>";
}

