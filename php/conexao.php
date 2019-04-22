<?php
function abreconexao(){
  $conn = mysqli_connect("localhost","root","root","loja");
  return $conn;
}
function fechaconexao($conn){
  mysqli_close($conn);
}
?>