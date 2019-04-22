<?php
	function abreconexao(){
	  $conn = mysqli_connect("localhost","root","root","loja");
	  return $conn;
	}
	function fechaconexao($conn){
	  mysqli_close($conn);
	}
  $tipoItem = $_GET['tipoItem'];
  $conn = abreconexao();
  $sql = "SELECT * FROM `produto` WHERE `tipoItem` = ?";
  $stmt = $conn ->prepare($sql);
  $stmt->bind_param("s",$tipoItem);
  $stmt->execute();
  $result = $stmt->get_result();
  while ($linha = mysqli_fetch_assoc($result)) {
    $item[] = $linha;
  }
  echo json_encode($item); 
  $stmt->close();
  fechaconexao($conn);
?>