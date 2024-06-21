function echovals(vals){
    document.getElementById('message').value += '\n'+document.getElementById('email').value + '\n'+document.getElementById('name').value
    alert(vals)
}

(function(){
    emailjs.init("dpANtNHrBuo88D2ob"); 
  })();
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    // Send the email
    emailjs.send("service_o4v27fa", "template_xv3ah7i", formData)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent!');
      }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send your message. Please try again.');
      });
  });