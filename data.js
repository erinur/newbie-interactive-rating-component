let a;

function rate(valor) {
  a = valor;
}

function send() {
  document.getElementById('container').innerHTML = '<div id="response-up-part"><img id="response-img" src="./images/illustration-thank-you.svg" alt="parece un dispositivo similar a un datofono, o terminal móvil, de color grisaceo. A la izquierda del mismo algo que parece una tarjeta naranja, y a la derecha un punto naranja"><div id="response">You selected ' + a + ' out of 5</div></div><div id="response-down-part"><h1>Thank you!</h1><p> We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p></div>'
}