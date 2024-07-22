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

   $("#changeBg").mouseenter(function () { 
   $(".body").css("background-color","yellow");
    });

    $("#changeBg").mouseleave(function () { 
        $(".body").css("background-color","white");
         });

});