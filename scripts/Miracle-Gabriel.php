<?php

class sayOut {
    public $myEmail = "sixpathdev@gmail.com";
public $myName = "Miracle Gabriel";
public $hngboard_id = "HNG-00840";
public $language_used = "PHP";

    public function sayIt()
    {
        echo "Hello World, this is $this->myName with HNGi7 ID $this->hngboard_id and email $this->myEmail using $this->language_used for stage 2 task";
    }
}
return (new sayOut())->sayIt();

?>
