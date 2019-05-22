$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });  

/******************* */
    var linkChoise = [];
    var link ;
    $("button.suiteButton").click(function(){
        linkChoise['stage'] = 1;
        console.log(linkChoise['stage']); 
    });
    $("button.graphButton").click(function(){
        linkChoise['stage'] = 2;
        console.log(linkChoise['stage']); 
    });
    $(".mainChoice button").click(function() {
        link = $(this).attr("data-link");
        console.log(link);
    });
    $(".mainChoice").siblings('.send_me').click(function() {
        window.location.replace(link);
    });

    /*******************/


    
$(".slideBlock .column img").click(function() {
    $(".slide_modal .body img").attr('src', $(this).attr("src"));
})


$(".blockNomination .show-btn").click(function () {
    $(this).css('display', "none");
});
$(".closeCollapse").click(function(){
    $(".blockNomination .show-btn").css('display','inherit');
});

$(".mainChoice .class1").click(function(e){
    
    e.preventDefault();
    $(this).css("background","#87833C");
    $(".mainChoice .class2").css("background","#F38240");
    $(".mainChoice .class3").css("background","#E98E79");
    $(".mainChoice .send_me a").attr("href","/sevenG.html");
});

$(".mainChoice .class2").click(function(e){
    e.preventDefault();
    $(this).css("background","#D85922");
    $(".mainChoice .class1").css("background","#B9C072");
    $(".mainChoice .class3").css("background","#E98E79");
    $(".mainChoice .send_me a").attr("href","/nineG.html");

});

$(".mainChoice .class3").click(function(e){
    e.preventDefault();
    $(this).css("background","#E46F5C");
    $(".mainChoice .class1").css("background","#B9C072");
    $(".mainChoice .class2").css("background","#F38240");
    $(".mainChoice .send_me a").attr("href","/elevenG.html");
});




$(".fix-modal, .fix-modal img").hover(function() {
    $(this).find("img").attr("src", "img/objects/buttonBClose.png");
});

$(".fix-modal").mouseout(function() {
    $(this).find("img").attr("src", "img/objects/buttonBOpen.png");

});

  


    

  }); 