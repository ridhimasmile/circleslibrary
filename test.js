$(document).ready(function(){
    // Show text content of plain paragraph
    $(".show-plain-text").click(function(){
        $("#mytext").append($(".plain").html());
    });
    
    // Show text content of formatted paragraph
    $(".show-formatted-text").click(function(){
        alert($(".formatted").text());
    });
});