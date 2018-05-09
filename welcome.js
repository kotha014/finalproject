// $('#menu').on('click', function(){
//   if($('#bar').hasClass('hamburger')) {
//     $('#bar').removeClass('hidden');
//   } else {
//     $('#bar').addClass('hidden');
//   }
// });

var sidebar = document.getElementById('sidebar');
var hamburger = document.getElementById('menu');
var cross =document.getElementById('close')

hamburger.addEventListener("click", function(){
	sidebar.classList.remove('hidden')
	
  
});

cross.addEventListener("click", function() {
sidebar.classList.add('hidden')
});