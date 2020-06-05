<?php
$output = "Hello World, this is Joseph Bassey with HNGi7 ID HNG-02360 and email Joemires20@yahoo.com using PHP for stage 2 task.";

if(defined('STDIN') || PHP_SAPI === 'cli')
    fwrite(STDOUT, $output);
else
    echo $output;
?>