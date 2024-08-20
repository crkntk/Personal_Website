$("#name-title").on("mouseover", function() {
$("#name-title").animate({rotate: "20deg"}).animate({rotate: "0deg"});
});
$(".btn-port").on("mouseenter", function(){
    $(".btn-port").css("background-color", "white");
});
$(".btn-port").on("mouseleave", function(){
    $(".btn-port").css("background-color", "#9400FF");
});
$("#name-title").css("text-shadow", "3px 3px #9400FF");
$("img").css("border-color","#9400FF");
$("img").css("border-style","inset");
$("img").on("mouseenter", function(){
$("img").css("border-style","outset");
});
 $("img").on("mouseleave", function(){
$("img").css("border-style","inset");
});

$(".skills-container").on("mouseenter", function() {
    $(".skills-gem").animate({rotate: "360deg"},1000);
    });
    $(".skills-gem").on("mouseleave", function() {
    $(".skills-gem").css("rotate", "0deg");
    });
$(".skills-container").on("mouseleave", function() {
    $(".skills-gem").animate({rotate: "-360deg"},1000);
});
$(".button").on("click", function(){
    $(".main").fadeToggle("slow","linear");
    $(".main").css("display","flex");
});
$(".btn-show-more").on("click",function(e){
    var currId = e.currentTarget.id.slice(4);
   console.log(currId);
    $("."+currId +" > li").toggle("slow");
   

});

$("#btn-linkedin").on("click",function(e){
    
   window.location.href = "https://www.linkedin.com/in/carlos-reyes-165a9521a/";

});
$("#btn-git").on("click",function(e){
    
    window.location.href = "https://github.com/crkntk";
 
 });

 $("#btn-gmail").on("click",function(e){
    
    window.location.href = "mailto:astrophim@gmail.com";
 
 });
 $("#btn-discord").on("click",function(e){
    
    window.location.href = "http://discord.gg/carlos_18747";
 
 });
 $(".btn-port").on("click",function(e){
    
    window.location.href = "./portfolio/index.html";
 
 });

 