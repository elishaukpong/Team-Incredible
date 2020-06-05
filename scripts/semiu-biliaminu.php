<?php 


    
    function getDetail($hngid, $name, $email, $language){
        if($hngid != "" || $name != "" || $email != "" || $language != ""){
            $detail = "Hello World, this is ". $name ." with HNGi7 ID " . $hngid 
            . " and email ". $email ." using ". $language. " for stage 2 task.";
            return $detail;
        }
        return false; 
    }

  
    //call the function
    $ID = "HNG-04209";
    $fullname = "semiu biliaminu";
    $email = "codedash07@gmail.com";
    $language = "PHP";

   /* $jsonObject = [
        'file' => "semiu-biliaminu.php",
        'output' => "Hello World, this is semiu biliaminu with HNGi7 ID HNG-04209 and email codedash07@gmail.com using PHP for stage 2 task.",
        'name' => $fullname,
        'id' => $ID,
        'email' => $email,
        'language' => $language,
        'status' => "Pass"
    ];
*/
    $result = getDetail($ID, $fullname, $email, $language);

    echo $result; //$jsonObject['output'];

?>
