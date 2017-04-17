$(document).ready(function(){     	
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
 /*   $("#deja").click(function(){
	   $('html, body').animate({scrollTop: $('#deja').offset().top}, 3000);
    });
    
    $("#visite").click(function(){
        $('html, body').animate({scrollTop: $('#visite').offset().top}, 3000);
	});*/
});

function passwordStrength(password){ 
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