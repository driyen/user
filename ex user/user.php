<?php
// création fonction
function CreateUser() {
    
    //connection base de données
	$connect = new PDO("mysql:dbname=Blog_DB", 'root', '0000');
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //Selection d'une/des table(s) et de ce que l'on veut récupérer dans la/les table(s)
	$request = $connect->prepare("SELECT * FROM user ;");
    //execution de la requete
	$request->execute();

	return $request->fetchAll(PDO::FETCH_ASSOC);

}
    // création d'une variable qui appelle la fonction
    $coms = CreateUser();

?>


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>User</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="user_ajax.js"></script>
    <script src="update_ajax.js"></script>
</head>
<body>
   <p>nom</p> <input type="text" id="name" > <br>
   <p>prenom</p> <input type="text" id="name2" > <br>
   <p>mail</p>   <input type="text" name="mail" id="mail">
        <input onclick="CallAjax()" type="submit" value="Ajouter"> <br>
        <br>
        
        

<table id="insert">
<tbody id="remove">
<?php foreach ($coms as $key => $com): ?>
<tr id="<?php echo $com ['id'] ?>">
    <!-- récupération des différentes données de la base de données -->
   

    <td><?php echo $com ['nom'] ?></td> 

    <td><?php echo $com ['prenom'] ?></td> 

    <!-- <td>?php echo $com ['mail'] ?></td> -->
    
                    <td>
                    <input type="hidden" id="user_idz_<?php echo $com['id']?>" name="id" value="<?php echo $com['id']?>">    
                    <input onclick="ViewAjax(<?php echo $com['id']?>)" type="submit" value="View">
                    </td>
                    <td>
                    <input type="hidden" id="user_id_<?php echo $com['id']?>" name="id" value="<?php echo $com['id']?>">    
                    <input onclick="UpdateAjax(<?php echo $com['id']?>)" type="submit" value="Update">
                    </td>
                    <td>
                    <input type="hidden" id="users_id_<?php echo $com['id']?>" name="id" value="<?php echo $com['id']?>">    
                    <input onclick ="DeleteAjax(<?php echo $com['id']?>)" type="submit" value="Delete">
                    </td>
</tr>
<?php endforeach; ?>
</tbody>
</table>

</body>
</html>