<?php
$pin = $_GET['pin'];

system("gpio -g mode $pin out");
system("gpio -g write $pin 1");
system("gpio -g write $pin 0");
