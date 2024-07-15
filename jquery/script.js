$(document).ready(function(){
    $("#submit-form").validate({
    rules:{
        fname:{
            required:true,
            minlength:2,
            email:true,
        }
    },
    messages:{
        fname:{
            required:"Please Enter Email"
        }
    }
    });

   $("#changeBg").click(function () { 
   $(".body").css("background-color","yellow");
    });

});