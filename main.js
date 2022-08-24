var script=document.createElement("script");
const s = document.createElement("script"); 
s.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"; 
s.onload = function(e){console.log("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js was loaded......");document.head.appendChild(s);};  
console.log("Jquery loaded")
script.setAttribute("type", "text/javascript");
script.setAttribute("src", "https://6100m-thinks-foxes-are-cool.filepu.sh/docready.js");
document.body.appendChild(script);
document.writeln("<script type='text/javascript' src='https://6100m-thinks-foxes-are-cool.filepu.sh/multiplexer.js'></script>");
console.log("Scripts have now been pulled from \"fox\" server")
