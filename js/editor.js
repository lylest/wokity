
//Change font family using js
	$(document).ready( function(){

    $("#close").click((e)=>{
      
      $("#login").hide(200);

    });

  $("#select-font").change(function(){
   var item =	$(this).children("option:selected").val();
 
    if (item == "charm") {
      
      	document.getElementsByTagName('textarea')[0].style.fontFamily = "arial";
    }
    else{
    	if (item == "hello") {
 document.getElementsByTagName('textarea')[0].style.fontFamily = "font-family: 'Quicksand', sans-serif";
    	}
    	 	
    }
  



  });




 });
 

