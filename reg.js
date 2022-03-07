
$("button").click(function(){
  const user={email:document.getElementById("email").value,password:document.getElementById("psw").value};
  window.alert("User with email= "+user.email+" and password= "+user.password);
});
$(document).ready(function(){
  $("button").mouseover(function(){
    $("button").css("background-color", "lightblue");
  });
  $("button").mouseout(function(){
    $("button").css("background-color", "#04AA6D");
  });
});
