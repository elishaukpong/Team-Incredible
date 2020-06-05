<?php
  class StephenIloriHngTask2 {
    public $firstName = 'Stephen';
    public $lastName = 'Ilori';
    public $HngID = 'HNG-01776';
    public $email = 'stephenilori458@gmail.com';

    public function makeMePassTask2()
    {

      $statement = "Hello World, this is " . $this->firstName . ' ' . $this->lastName . " with HNGi7 ID " . $this->HngID .  " and email " . $this->email . " using PHP for stage 2 task.";
      return $statement;
    }
  }
?>

<?php
  $stephenIlori = new StephenIloriHngTask2();
  $Statement =  $stephenIlori->makeMePassTask2();
  print $Statement;
?>
