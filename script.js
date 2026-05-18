// Fungsi Menyeleksi Angka
function number() {
    let data = document.getElementById("input-container");
    let angka = Number(data.value);
    let output = document.getElementById("output-container");
    let i = 2;
    let status;

// Memeriksa Isi Input
    if (angka == "") {
     data.classList.remove("input-return");
     data.placeholder = "Belum diisi!"
      return data.classList.add("input-error");
    }

// Menyeleksi Data
    if (isNaN(angka)) {
      data.value = "";
      return output.innerHTML = "Bukan Angka";
    }

// Loop Untuk Menyeleksi
   if (angka < i) {
      data.value = "";
      return output.innerHTML = "Bukan Bilangan Prima";
   } else {
    for (i;i <= angka;i++) {
        if (angka % i === 0 ) {
             status = false;
              break;
        } else {
             status = true;
             break;
        }
     }
}
// Menentukan Status
    if (!status) {
     output.innerHTML = "Bukan Bilangan Prima";
     data.value = "";
    } else {
     output.innerHTML = "Bilangan Prima";
     data.value = "";
    }

    // Mengosongkan Input
    
}

function retur() {
     let data = document.getElementById("input-container");
     data.classList.remove("input-error");
     return data.classList.add("input-return");
 
}