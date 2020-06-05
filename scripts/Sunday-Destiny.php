<?php 

        class MyDetails {
            private function getName(){
                return "Sunday Destiny";
            }

            private function getHNGID(){
                return "HNG-01091";
            }

            private function getEmail(){
                return "destinyjuniorsdj@gmail.com";
            }

            private function getLanguage(){
                return "PHP";
            }

          public function getDetails(){
                echo "Hello World, this is ". $this->getName() ." with HNGi7 ID ".$this->getHNGID()." and email ".$this->getEmail()." using ".$this->getLanguage()." for stage 2 task.";
            }

            

        }

$details = new MyDetails();
return $details->getDetails();




?>