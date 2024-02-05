const navButton = document.getElementById('navbar-button');
const navList = document.getElementById('navbar-list');

navButton.addEventListener('click', ()=>{
  navButton.classList.toggle('navButton-active');
  navList.classList.toggle('hidden');
});

const myForm = document.getElementById('form');

myForm.addEventListener('submit', function(e){
    e.preventDefault();

    const url = e.target.action;

    const formData = new FormData(myForm);

    fetch(url,{
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    }).then((response) => {
      Swal.fire({
          title: 'Success!',
          text: 'Email balasan yang berisi kode QR akan dikirim 1x24 jam pada email yang bersangkutan.',
          timer: 2000,
          timerProgressBar: true,
          icon: 'success',
          iconColor: '#FFBF00',
          showConfirmButton: false,
      }).then(() => {
          myForm.reset()
          window.location.reload()
      });
  }).catch((error) => {
    console.error('Error occurred:', error);
    alert('Error occurred. Check the console for details.');
  });
});