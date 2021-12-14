<?php
$_POST;

function checkEmpty($InputsFromPostGlobal){
  foreach($InputsFromPostGlobal as $key=>$val){
    if(strlen($val) <1){
      echo "There is an empty field.";
      die();
    }
  }
}

checkEmpty($_POST);

function purifyInputs($userInputsFromPostGlobal){
  foreach($userInputsFromPostGlobal as $nameAttribute=>$nameValue){
    //remove space
    trim($nameValue);
    //remove codes if any
    stripslashes($nameValue);
     htmlspecialchars($nameValue);
     $userInputsFromPostGlobal[$nameAttribute] = $nameValue;
  }
   return $userInputsFromPostGlobal;
}

$purifiedUserInputs =  purifyInputs($_POST);
// var_dump($purifiedUserInputs['password']);


if(strlen($purifiedUserInputs['password']) < 6){
  echo 'Password must be more than six characters';

}elseif(!preg_match('/[A-Z]/', $purifiedUserInputs['password'])){
  echo "The password must contain at least one uppercase.";

}elseif(!preg_match('~[0-9]+~', $purifiedUserInputs['password'])) {
  echo 'Password must contain a number.';
}else{
  echo "Thanks for creating account with us.";
}


