<?php
  class MobFire0 {
    private static $instance;
    private $firstName = 'Abdullah';
    private $lastName = 'Momoh';
    private $hngId = 'HNG-0030';
    private $email = 'momohabdullah20@gmail.com';
    private $language = 'PHP';

    private function __constructor(){}

    public static function get(){
      if(self::$instance == NULL){
        self::$instance = new MobFire0();
      }
      return self::$instance;
    }

    public function __toString(){
      return "Hello World, this is {$this->firstName} {$this->lastName} with HNGi7 ID {$this->hngId} and email {$this->email} using PHP for stage 2 task.";
    }
  }

  print MobFire0::get();

