<?php

// get data from form


$name = $_POST['name'];
$number = $_POST['number'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];


$to = "ahammedsinan856@gmail.com";
$subject = "Mail from ahammed";
$txt ="Name =" . $name . "\r\n Number = " . $number . "\r\n Email =" . $email . "\r\n Subject =" . $subject . "\r\n message =" . $message;


$headers = "From: ahammedsinan856@gmail.com" . "r\n" . 
"cc: ahammedsinan856@gmail.com";
if($email !=NULL){
    mail($to,$subject,$txt,$headers);
}
// redirect
header("Location:index.html");
?>
