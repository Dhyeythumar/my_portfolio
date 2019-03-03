$(document).ready(function(){
  $("#anima").click(function(){
    $("#anima").addClass('animate');
      setTimeout(function(){$("#anima").removeClass('animate');},600);
  });
});
function sende(){
  var email,topic,name,c;
  name = document.getElementById("form-text-name").value;
  email = document.getElementById("form-text-email").value;
  topic = document.getElementById("form-text-topic").value;
  if ( name !="" && topic !="" && email !="" )
  {
    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
      const encodedData1 = 'dG9rZW4=';
      const decodedData1 = window.atob(details[window.atob(encodedData1)]);
      const encodedData2 = 'dG8=';
      const decodedData2 = window.atob(details[window.atob(encodedData2)]);
      const encodedData3 = 'ZnJvbQ==';
      const decodedData3 = window.atob(details[window.atob(encodedData3)]);
      const dict = {
        SecureToken:  decodedData1,
        To: decodedData2,
        From: email,
        Subject: name,
        Body: topic
      }
      Email.send(dict).then( message => alert(message) );
      var ele = document.getElementById("contact-form");
      ele.style.fontSize = '2.9vmin';
      ele.innerHTML = "Thank You!!";
    }
    else
    {
      alert("You have entered an invalid email address!!");
      const dict = {
        SecureToken: decodedData1,
        To: decodedData2,
        From: decodedData3,
        Subject: name,
        Body: topic + '<br><br> ' + "{!! Some one is trying to spam your email. -(from portfolio) !!}"
      }
      Email.send(dict);
      document.getElementById("form-text-email").value = "";
    }
  }
}