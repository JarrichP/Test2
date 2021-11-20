$(document).ready(function(){

$('body').click(function(event){
event.preventDefault();
});



$( "#gordijn" ).click(function(event) {
    if ($(this).hasClass( 'open' )) {
        $(this).removeClass('open');
      
    } else {
        $(this).addClass('open');
     
    }});

    $( "#lights" ).click(function(event) {
        if ($("#blackbox").hasClass( 'on' )) {
            $("#blackbox").removeClass('on');

          
        } else {
            $("#blackbox").addClass('on');
            
        }});


    //check dit in de ochten of gordijnen open zijn buiten deze tijde. 20/12/2020
    if (tijden<8 || tijden>17){
            $("#gordijn").addClass('open');
        };
console.log(tijden);





    //klok
    $(function() {
 
        setInterval( function() {
        var seconds = new Date().getSeconds();
        var sdegree = seconds * 6;
        var srotate = "rotate(" + sdegree + "deg)";
        
        $("#sec").css({ "transform": srotate });
            
        }, 1000 );
        
        setInterval( function() {
        var hours = new Date().getHours();
        var mins = new Date().getMinutes();
        var hdegree = hours * 30 + (mins / 2);
        var hrotate = "rotate(" + hdegree + "deg)";
        
        $("#hour").css({ "transform": hrotate});
            
        }, 1000 );
  
        setInterval( function() {
        var mins = new Date().getMinutes();
        var mdegree = mins * 6;
        var mrotate = "rotate(" + mdegree + "deg)";
        
        $("#min").css({ "transform" : mrotate });
            
        }, 1000 );
   
  });

});//einde jquery
    