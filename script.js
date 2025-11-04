// 1.
// untuk form contact
const scriptURL = "https://script.google.com/macros/s/AKfycbz0vqgrlvG_K3QN9bLSP3xujAAlsJ1zrbxoFo3C2ePo6ORg0LI7Xoa_0eADfb7lxZDb/exec"; //const untuk variabel js
const form = document.forms["portfolio-contact-form"]; //menangkap "form"
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

// 2.
form.addEventListener("submit", (e) => {
  // 3.
  e.preventDefault();
  // 4.
  // ketika tombol submit diklik
  // tampilkan tombol "Loading" hilangkan tombil "Kirim"
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  // 5.
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // 6.
      // tampilkan tombol "kirim" hilangkan tombil "Loading"
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      //tampilkan Alert
      myAlert.classList.toggle("d-none");
      //reset Formnya
      form.reset();

      console.log("Success!", response);
    })
    // 7.
    .catch((error) => console.error("Error!", error.message));
});
