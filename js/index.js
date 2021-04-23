// لتغير خصائص القائمة عند النزول إلى الأسفل noTransparrent إضافة الخاصية 
$(window).scroll(function(){
    if($(this).scrollTop()>=500){
       $("#navBar").addClass("noTransparrent");
     }else{
       $("#navBar").removeClass("noTransparrent");
     }
 });

 $(document).ready(function () {
   $("a.scroll").on('click', function(){
     
    var hash= this.hash;
    $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){})
   });

   $('.timer').countTo();

   $(function(){
     $("#commentForm").validate();
   });
 });