<?php
class Info {
    protected $compilled;

    public function __construct()
    {
        $name = "Douglas Okolaa";
        $id = "HNG-81727";
        $language = "PHP";
        $email = "okolaadouglas@gmail.com";
        $this->compilled = "Hello World, this is $name with HNGi7 ID $id and email $email using $language for stage 2 task.";
    }

    public function message()
    {
        return $this->compilled;
    }
}

$doug = new Info();

echo $doug->message();
