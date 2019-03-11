function CallAjax() {
    
    var xhr = new XMLHttpRequest;
        
    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4 && xhr.status == 200) { 
         //Insérer la réponse du serveur dans un tr avec les valeurs que l'on a entré de mes inputs
          
          var enfant = document.createElement("tr");
          id = xhr.responseText ;
          var parent = document.getElementById("insert");
          enfant.innerHTML = "<td>"+document.getElementById('name').value+"</td>";
          enfant.innerHTML = enfant.innerHTML +document.getElementById('name2').value;
          enfant.innerHTML = enfant.innerHTML +document.getElementById('mail').value;
          enfant.innerHTML = enfant.innerHTML +'<td><input type="hidden" id="user_idz_("+id+")" name="id" value="view">' ;    
          enfant.innerHTML = enfant.innerHTML +'<input onclick="ViewAjax("+id+")" type="submit" value="View"></td>';
          enfant.innerHTML = enfant.innerHTML +'<td><input type="hidden" id="user_id_("+id+")" name="id" value="update">' ;    
          enfant.innerHTML = enfant.innerHTML +'<input onclick="UpdateAjax("+id+")" type="submit" value="Update"></td>' ;
          enfant.innerHTML = enfant.innerHTML +'<td><input type="hidden" id="users_id_("+id+") name="id" value="delete">' ;
          enfant.innerHTML = enfant.innerHTML +'<input onclick ="DeleteAjax("+id+")" type="submit" value="Delete"></td>' ;
          parent.appendChild(enfant);

        }
    } ;
    
    // Requète AJAX       
    xhr.open('POST', 'user.add.php') ;
    
    
    var data = new FormData() ;
    // Récupération des zones de mon html dans article.php
    data.append('mail', document.getElementById('mail').value);
    data.append('name', document.getElementById('name').value);
    data.append('name2', document.getElementById('name2').value);
    xhr.send(data);
    
}

function ViewAjax(id) {
    
     var xhr = new XMLHttpRequest;
        
     xhr.onreadystatechange = function () { 
         if (xhr.readyState == 4 && xhr.status == 200) {
            //récupération reponse du serveur
            var reponse = xhr.responseText ;
            
            //recuperation des colonnes bdd en JSON
            var id = JSON.parse(reponse).id;
            var nom = JSON.parse(reponse).nom;
            var prenom = JSON.parse(reponse).prenom;
            var mail = JSON.parse(reponse).mail;
            
            //afficher mes données dans mes inputs
            var parent = document.getElementById("name");
            var parent1 = document.getElementById("name2");
            var parent2 = document.getElementById("mail");
            //utilisation des variables
            parent.value= nom ;
            parent1.value= prenom ;
            parent2.value= mail ;
      
       }
    }
    
    //Requète AJAX       
    xhr.open('POST', 'view_user.php') ;
    
    
    var data = new FormData() ;
    //Récupération des zones de mon html dans article.php
    data.append('mail', document.getElementById('mail').value);
    data.append('id',id);
    xhr.send(data);
    
}



//Prendre l'id en paramètre pour le récupérer
function UpdateAjax(id) {
    
    var xhr = new XMLHttpRequest;
        
    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4 && xhr.status == 200) {
          var enfant = document.createElement("tr");
          var parent = document.getElementById("remove");

          enfant.innerHTML = document.getElementById('name').value;
          enfant.innerHTML = document.getElementById('name2').value;
          enfant.innerHTML = enfant.innerHTML +'<td><input type="hidden" id="user_idz_("+id+")" name="id" value="view">' ;    
          enfant.innerHTML = enfant.innerHTML +'<input onclick="ViewAjax("+id+")" type="submit" value="View"></td>';
          enfant.innerHTML = enfant.innerHTML +'<td><input type="hidden" id="user_id_("+id+")" name="id" value="("+id+")">' ;    
          enfant.innerHTML = enfant.innerHTML +'<input onclick="UpdateAjax("+id+")" type="submit" value="Update"></td>' ;
          enfant.innerHTML = enfant.innerHTML +'<td><input type="hidden" id="users_id_("+id+") name="id" value="("+id+")>' ;
          enfant.innerHTML = enfant.innerHTML +'<input onclick ="DeleteAjax("+id+")" type="submit" value="Delete"></td>' ;
          
          //Suppression d'un enfant identifié par son id
          parent.removeChild(document.getElementById(id));
          //Insertion avant le premier enfant
          parent.insertBefore(enfant, parent.firstChild);

        }
    }
    
    // Requète AJAX       
    xhr.open('POST', 'update_user.php') ;
    
    
    var data = new FormData() ;
    // Récupération des zones de mon html dans article.php
    data.append('mail', document.getElementById('mail').value);
    data.append('name', document.getElementById('name').value);
    data.append('name2', document.getElementById('name2').value);
    data.append('id',id);
    xhr.send(data);
    
}

function DeleteAjax(id) {
    
    var xhr = new XMLHttpRequest;
        
    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4 && xhr.status == 200) {
            var parent = document.getElementById("remove");
            var enfant = document.getElementById(id);
            parent.removeChild(enfant);

        }
    }
    
    // Requète AJAX       
    xhr.open('POST', 'delete_user.php') ;
    
    
    var data = new FormData() ;
    // Récupération des zones de mon html dans article.php
   
    data.append('id',id);
    xhr.send(data);
    
}