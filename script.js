  function () {
      alert("Message failed to send. Please try again.");
    }
  );
});
window.onload = function () {

  emailjs.init("dsIA42WgdSNrTDCaz");

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
const form = document.getElementById("contact-form");
  const successBox = document.getElementById("success");
  
    emailjs.sendForm(
      "service_pxi40vk",
      "template_sbd4zkp",
      this
      ).then(
        
      function () {
        successBox.style.display = "block";
        successBox.textContent = "✔ Message sent successfully";
        form.reset();
      },
      function (error) {
        successBox.style.display = "block";
        successBox.textContent = "❌ Message failed. Try again.";
        successBox.style.color = "red";
        console.error(error);
      
    
      function () {
        document.getElementById("success").style.display = "block";
        document.getElementById("contact-form").reset();
      },
      function (error) {
        alert("Failed to send message");
        console.log(error);
      }
    );
  });

};