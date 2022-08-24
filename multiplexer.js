function initalizemii(){
  const s = document.createElement("script"); 
  s.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"; 
  s.onload = function(e){console.log("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js was loaded......");document.head.appendChild(s);initalizeotherscripts("test")};  
  return console.log("initalizemii() finished")
};
function initalizeotherscripts(seed){
  $.getScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js', function() {
    console.log("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js was loaded......")
  });
  $.getScript('https://6100m-thinks-foxes-are-cool.filepu.sh/redirect.js', function() {
    console.log("https://6100m-thinks-foxes-are-cool.filepu.sh/redirect.js was loaded......")
  });
  return initalizeprimarydata(seed); 
};
function initalizeprimarydata(seed){
  const data = "<link rel=\"stylesheet\" href=\"https://6100m-thinks-owo-should-be-legal.filepu.sh/multiplex.css\" type=\"text/css\""
  initalizesecondarydata(data, seed)
  return console.log("https://6100m-thinks-owo-should-be-legal.filepu.sh/multiplex.css was loaded");
}
function initalizesecondarydata(data, seed){
  return $('body').append(data+'</div></body><div class="d" id="sessionseed" hidden>'+seed+'</div></html>');
}
r(function() {
  docReady(function() {
    return initalizemii()
  });
return document.title = "6100m\'s Homepage"
});
function r(f) {
        /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f()
}
