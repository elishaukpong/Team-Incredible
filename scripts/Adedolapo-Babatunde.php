<?php


function displayMessage($fullname, $email, $ID, $language){

    $msg =  "Hello World, this is $fullname with HNGi7 ID $ID and email $email using $language for stage 2 task.";
    return $msg;
}

$fullname = "Babatunde Adedolapo";
$ID = "HNG-02680";
$email = "dolapob@gmail.com";
$language = "PHP";
echo displayMessage($fullname, $email, $ID, $language);
?> 
