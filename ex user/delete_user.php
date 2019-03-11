<?php 

include_once('post.php');

function DeleteU() {
    //Récupération de l'id
    $id=$_POST['id'];
    
    // envoie vers la base de donnée
 
    
	

	$connect = new PDO("mysql:dbname=Blog_DB", 'root', '0000');

	$connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Degager des données dans la base de données avec update
	$request = $connect->prepare("DELETE FROM user WHERE id='$id';");

	$request->execute();


}
	
    
	$content = DeleteU();