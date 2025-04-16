document.getElementById("language-select").addEventListener("change", function() {
    if (this.value === "pt"){
     window.location.href = "index.html";
    } 
 });

 document.querySelector(".submit-btn").addEventListener("click", function(){
     let emailInput = document.querySelector(".email-input");
     let errorMessage = document.querySelector(".error-message");
     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if(!emailPattern.test(emailInput.value)){
         emailInput.classList.add("error");
         errorMessage.style.display = "block";
     } else{
         emailInput.classList.remove("error");
         errorMessage.style.display = "none";
         window.location.href = "https://www.netflix.com/signup?locale=en";
     }
 });   
