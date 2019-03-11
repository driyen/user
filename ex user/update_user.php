<?php 

include_once('post.php');

function Update() {
    //Récupération de l'id
    $id=$_POST['id'];
    
    // envoie vers la base de données
    $mailrequest = $_POST['mail'] ;
    $Nom = $_POST['name'];
    $Prenom = $_POST['name2'];
    
	

	$connect = new PDO("mysql:dbname=Blog_DB", 'root', '0000');

	$connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Modifier des données dans la base de données avec update
	$request = $connect->prepare("UPDATE user SET nom='$Nom', prenom='$Prenom', mail='$mailrequest' WHERE id='$id';");

	$request->execute();


}
	
    
	$content = Update();




?>