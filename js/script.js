const btn = document.getElementById('button');
const form = document.getElementById('form')

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const userName = document.getElementById("from_name")
  const userEmail = document.getElementById("email_id")
  console.log(userName.value);
  console.log(userEmail.value);

  btn.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_3jk1gtn';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      formApproved()
    }, (err) => {
      btn.value = 'Error';
      alert(JSON.stringify(err));
    });
});


function formApproved() {
  document.getElementById("approved").style.display = "block"
  document.getElementById("button").style.display = "none"

}