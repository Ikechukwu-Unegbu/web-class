<?php

$assocArrayOfCars = [
  "2008"=>"Toyota Camry",
  "2009"=>"Hummer Three", 
  "2015"=>"Golf 4"
];
foreach($assocArrayOfCars as $year=>$car){
  echo $car." was made in ".$year;
  echo "<br>";
}

$normalArray = [
  "2008",
  "2009",
  "2015"
];

echo "<br>";
echo "<br>";
foreach($normalArray as $normal){
  echo "The year is ".$normal;
  echo '<br>';
}

echo "<br>";
echo "<br>";
$x = 75;
$y = 25;

function addition(){
  echo $GLOBALS['x'] + $GLOBALS['y'];
}
addition();

echo "<br>";
echo "<br>";

var_dump($_REQUEST);










?>