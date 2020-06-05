
<?php

class SpitMyName
{
    public function say() :void
    {
        $name = "Ekpono Ambrose";
        $hngid = "HNG-01502";
        $email = "ekponoambrose@gmail.com";
        $language = "PHP";
        echo "Hello World, this is {$name} with HNGi7 ID {$hngid} and email {$email} using {$language} for stage 2 task.";
    }
}

return (new SpitMyName())->say();
