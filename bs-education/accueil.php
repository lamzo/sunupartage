<?php
//connection au serveur
$cnx = mysql_connect( "localhost", "root", "" ) ;
//sélection de la base de données:
$db = mysql_select_db( "sunupartage" ) ;
if(isset ($_POST["nouveau"]))
{
	//récupération des valeurs des champs:
	$nom = $_POST["nom"] ;
	$prenom = $_POST["prenom"] ; 
	$pseudo = $_POST["pseudo"] ;
	$email = $_POST["email"] ;
	$password = $_POST["password"] ;
	$password2 = $_POST["password2"] ;
	//teste de la conformité du password
	if(strcmp($password, $password2)!==0)
		echo("Mots de passe non conformes") ;
	else{
		//création de la requête SQL:
		$sql = "INSERT INTO eleve (login, nomEleve, prenom, password, email)
		VALUES ('$pseudo', '$nom', '$prenom', '$password', '$email') " ;
		//exécution de la requête SQL:
		$requete = mysql_query($sql, $cnx) or die( mysql_error() ) ;
		//affichage des résultats, pour savoir si l'insertion a marchée:
		if($requete)
		  	echo("Insertion réussie") ;
		else
			echo("L'insertion à échouée") ;
	}	
}
else if(isset ($_POST["ancien"]))
{
	//récupération des valeurs des champs:
	$email = $_POST["email"] ;
	$password = $_POST["password"] ; 
	//création de la requête SQL:
	$sql = "SELECT * FROM eleve WHERE email = '$email' AND password = '$password'" ; 
	//exécution de la requête: 
	$requete = mysql_query( $sql, $cnx ) ; 
	//affichage des résultats, pour savoir si l'insertion a marchée:
	if($requete)
		echo("Authentification réussie") ;
	else
		echo("Echec de l'authentification") ;
}
?> 