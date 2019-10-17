$( "document" ).ready(function() {
 $("#button").click(function() {
    var answer = $(".translate").val()
    $(".output").text(answer);
 });
});