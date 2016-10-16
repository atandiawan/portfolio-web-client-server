$(document).ready(function(){
  $("#change-title").click(function(){
    $("h1").html("Title Berubah")
  })

  $("#get-data").click(function(){
    $.ajax({
      url:'http://localhost:3000/data',
      type: 'GET',
      success: function(result){
        $("#data").html(result.title)
      }
    })
  })
})
