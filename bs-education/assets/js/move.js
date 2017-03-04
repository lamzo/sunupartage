/**************CHANGEMENT DES FORMULAIRE PAR CLICK SUR LES BUTTONS DEJA MEMBRE/ NOUVEAU MEMBRE*********/
$(document).ready(function()
{     	
	// on click signup It Hide Login Form and Display Registration Form
	$("#deja").click(function(){
    $("#second").slideUp("fast", function(){
	$("#first").slideDown("fast");
	   });	
	 }); 
	 // on click signin It Hide Registration Form and Display Login Form
     $("#visite").click(function(){
       $("#first").slideUp("slow",function(){
	      $("#second").slideDown("fast");
	   });
	 });
	 
/******************************************SCROLL DOWN TO THE FORMS *******************************************/
	 $("#deja").click(function(){
		 $('html, body').animate({ 
		  scrollTop: $('#deja').offset().top 
		}, 2500);
	});
		 $("#visite").click(function(){
		 $('html, body').animate({ 
		  scrollTop: $('#visite').offset().top 
		}, 2500);
	});
	
/************************************************REMEMBER ME****************************************************/

                if (localStorage.chkbx && localStorage.chkbx != '') 
				{
                    $('#checkbox1').attr('checked', 'checked');
                    $('#email1').val(localStorage.usrname);
                    $('#pass').val(localStorage.pass);
                } 
				else 
				{
                    $('#checkbox1').removeAttr('checked');
                    $('#email1').val('');
                    $('#pass').val('');
                }

                $('#checkbox1').click(function() 
				{

                    if ($('#checkbox1').is(':checked')) 
					{
                        // save username and password
                        localStorage.usrname = $('#email1').val();
                        localStorage.pass = $('#pass').val();
                        localStorage.chkbx = $('#checkbox1').val();
                    } 
					else 
					{
                        localStorage.usrname = '';
                        localStorage.pass = '';
                        localStorage.chkbx = '';
                    }
                });
}); 
/*********************************** NIVEAU DU MOT DE PASSE****************************************/

function passwordStrength(password)
{
	
	var desc = new Array();
	desc[0] = "Trés faible";
	desc[1] = "Faible";
	desc[2] = "Assez Bien";
	desc[3] = "Bien";
	desc[4] = "Fort";
	desc[5] = "Tres Fort";
	
	var score   = 0;
	
	//if password bigger than 6 give 1 point
	if (password.length > 6) score++;

	//if password has both lower and uppercase characters give 1 point	
	if ( ( password.match(/[a-z]/) ) && ( password.match(/[A-Z]/) ) ) score++;

	//if password has at least one number give 1 point
	if (password.match(/\d+/)) score++;

	//if password has at least one special caracther give 1 point
	if ( password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) )	score++;

	//if password bigger than 12 give another 1 point
	if (password.length > 12) score++;

	 document.getElementById("passwordDescription").innerHTML = desc[score];
	 document.getElementById("passwordStrength").className = "strength" + score;	 
}				 
	 
/***************************** CONFIMATION MOT DE PASSE*************************************/
var password = document.getElementById("password")
, confirm_password = document.getElementById("password2");

function validatePassword(){
  if(password.value != confirm_password.value) 
  {
    confirm_password.setCustomValidity("Les Mot de passes ne sont pas égaux.");
  } 
  else 
  {
    confirm_password.setCustomValidity('');
  }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

/*****************************************************HOME PAGE***********************************************/
function GoToHomePage()
{
    /*window.location = '/';   
	window.location = '/';*/

}


