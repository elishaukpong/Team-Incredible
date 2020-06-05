<?php
class DeveloperIdentint{
	private $name;
	private $hng_id;
	private $language;
	private $email;

	public function __construct($name, $hng_id, $language, $email){
		$this->name 	= $name;
		$this->hng_id 	= $hng_id;
		$this->language = $language;
		$this->email 	= $email;
	}

	public function getAttibuteBuyName($attribute){
		return $this->$attribute;
	}

	public function sayHi(){
		$attr = ["name", "hng_id", "language", "email"];
		$messages = "Hello World, this is ";
		$messages .= $this->getAttibuteBuyName($attr[0]);
		$messages .= " with HNGi7 ID ";
		$messages .= $this->getAttibuteBuyName($attr[1]);
		$messages .= " and email ";
		$messages .= $this->getAttibuteBuyName($attr[3]);
		$messages .= " using ";
		$messages .= $this->getAttibuteBuyName($attr[2]);
		$messages .= " for stage 2 task. ";

		return $messages;
	}
}

$obj = new DeveloperIdentint("Ruberandinda Patience", "HNG-05969", "php", "ruberandindap@gmail.com");
echo $obj->sayHi();
?>