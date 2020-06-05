<?php
$fullname = "Callistus Enekhaze";
$ID = "HNG-00511";
$email = "osiking07@gmail.com";
$language = "PHP";

function task($fullname, $email, $ID, $language){

    $msg =  "Hello World, this is $fullname with HNGi7 ID $ID and email $email using $language for stage 2 task.";
    return $msg;
}
echo task($fullname, $email, $ID, $language);
?> 
