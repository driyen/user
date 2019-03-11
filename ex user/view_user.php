<?php 

include_once('post.php');

function AddContent() {

    $id=$_POST['id'];
	

	$connect = new PDO("mysql:dbname=Blog_DB", 'root', '0000');

	$connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
	$request = $connect->prepare("SELECT * FROM user WHERE id='$id';");

	$request->execute();

    $cible = $request->fetch();

    echo json_encode($cible);

}
	
    
	$content = AddContent();



?>