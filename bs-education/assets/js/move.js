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
		
/********************************SUBMIT ATTENDRE L'AUTRE SUBMIT*********************************************/

      var submitActor = null;
      var $form = $('#test');
      var $submitActors = $form.find('button[type=submit]');

      $form.submit(function(event) {
          if (null === submitActor) {
              // If no actor is explicitly clicked, the browser will
              // automatically choose the first in source-order
              // so we do the same here
              submitActor = $submitActors[0];
          }

          console.log(submitActor.name);
          // alert(submitActor.name);

          return false;
      });

      $submitActors.click(function(event) {
          submitActor = this;
      });				
				
/*****************************************************NEXT ET PRECEDENT DU FORMULAIRE***********************************************/

//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($(".displaydiv").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'relative'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($(".displaydiv").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})

				
}); 



/****************************************if select options shoW another options of form*****************************************/


    $(".group_tag_dynamic").hide(); //default
    $("select[name=action_top]").change(function() 
	{
        var selectedOption = $(this).find('option:selected');
        if(selectedOption.hasClass('bulk_action_target'))
            $(".group_tag_dynamic").show('fast');
        else if(selectedOption.hasClass('bulk_action_delete'))
            $(".group_tag_dynamic").hide('fast');
    });

/***************************************FONCTION AFFICHE STRONG PASSWORD******************************************/

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



