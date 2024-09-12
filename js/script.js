
// for(i = 1; i <= 20; i++) {
//     if(i % 5 == 0 || i % 2 == 0) {
//         console.log('Arul');
//         console.log('Bilangan Genap')
//     } else {
//         console.log('Bilangan Ganjil');
//     }
        
// }

// for(i = 1; i <= 20; i++) {
//     if (i % 5 == 0) {
//         console.log('Nama Saya Arul')
//     } else if( i % 2 == 0) {
//         console.log('Bilangan Genap')
//     } else {
//         console.log('Bilangan Ganjil')
//     }

// }
  

const button = document.querySelector('.tampil-hasil');

button.addEventListener('click', function() {
    const showOutput = document.querySelector('.show-list');
    const inputNama = document.querySelector('#nama').value;

    if(inputNama == '') {
        alert('input tidak valid')
    } else {
        for(angka = 1; angka <= 20; angka++) {
            if(angka % 5 == 0) {
                 showOutput.innerHTML += `<li>Saya ${inputNama}</li>`
             } else if (angka % 2 == 0) {
                showOutput.innerHTML += '<li>Bilangan genap</li>';
             } else {
                showOutput.innerHTML += `<li>Bilangan ganjil</li>`;
             }
     
         }
    }

    // for(angka = 1; angka <= 20; angka++) {
    //     if(angka % 5 == 0) {
    //         showOutput.innerHTML += `<li>Saya ${inputNama}</li>`
    //     } else {
    //         showOutput.innerHTML += `<li>${angka}</li>`;
    //     }
    // } 

})