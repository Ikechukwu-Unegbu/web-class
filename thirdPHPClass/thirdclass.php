<?php 

define('ERORR_MESSAGE','Our database doesnt recognize the submitted 
credentials. Send mail to vincent@digitmoni.com');

echo ERORR_MESSAGE;

// array('')
// ['']
define('CARS', ['Innoson Ikenga', 'Tesla Roadster', 'Lucid Motors', 'Faraday Motors']);

var_dump(CARS);

$y = "9";
$x = 9;
echo '<br/>';
echo '<br>';
if($y ===$x){
  echo "true";
}else{
  echo 'false';
}

echo '<br/>';
echo '<br>';

$a = 9;
$b = 7;
if($a <= $b){
  echo "It is equal or less than.";
}else{
  echo "It is not so.";
}

$accountBalance = 82000;

$transferAmount = 20000;
// echo '<br/>';
// echo '<br>';

// if($accountBalance - $transferAmount >= 20){
//   //
//   //
//   //
//   echo "Transaction successful";
// }

echo '<br/>';
echo '<br>';

// if($accountBalance - $transferAmount <= 20){
//   //
//   //
//   //
//   echo "Transaction successful";
// }else{
//   echo "Transaction failed.";
// }

echo '<br/>';
echo '<br>';
// $gayRoom = "Gay";
// $christian = 'Christian';
// $men = 'men';
// $Nonbinary = 'nonbinary';

// $identifier = "nonbinary";


// if($identifier == $gayRoom){
//  echo "You are welcome gay chat room";
// }elseif($identifier == $christian ){
//   echo "You are welcome Christian.";
// }elseif($identifier == $men){
//   echo "You are welcome to men chat room";
// }else{

//   echo "you are welcome to non binary peoples chat room";
// }

// for ($x = 0; $x >= 10; $x++) {
//   echo "The number is: $x <br>";
// }

// echo '<br>';

// for ($x = 0; $x <= 100; $x+=10) {
//   echo "The number is: $x <br>";
// }

// $numbersArrays = array(1, 2, 3, 4,5 ,6);
// foreach($numbersArrays as $number){
//   $result = $number *3;
//   echo $result." is the result of multiplying ".$number." with 3.";
//   echo '<br>';
// }


function digitMoniMessage(){
  echo "<b style='color:red;'>We train world class developers at DigitMoni.</b>";
}
digitMoniMessage();

function digitMoniBirthday($year, $founder){
  echo "DigitMoni was founded in ".$year." by ".$founder;
}

$year = 2017;
$founder = "Mr. Dominion Ndubuisi";

digitMoniBirthday($year,$founder);