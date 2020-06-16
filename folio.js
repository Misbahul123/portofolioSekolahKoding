//smothscrooll

let posY = 0;
let jarak = 5;
function smoothScroll(id){
    let target = document.getElementById(id).offsetTop;//jarak antara atas dan div

    let scroolAnimate= setTimeout(function () {
        smoothScroll(id);        
    },5)//fungsi dan waktunya
    posY += jarak;
    //berhenti pada bagian tertentu 
    if(posY >= target){
        clearTimeout(scroolAnimate);
        posY = 0;
    }else{
        window.scroll(0, posY)//x dan y
    }

    return false;
}


// fungsi untuk falidasi formular 
function validasi(form) {
    let lolos = true;

    for (let i = 0; i < 3; i++) {
        if (form[i].value.trim().length <= 0){

            switch (i) {
                case 0: erorText = 'Nama'; break;
                case 1: erorText = 'Email'; break;
                case 2: erorText = 'Pesan'; break;
            
                default:
            }


            //belum ada eror
            if(form[i].nextElementSibling.className != 'error'){
                form[i].style.borderColor = 'red';
                form[i].insertAdjacentHTML('afterend',"<div class='error'>"+ erorText +" tidak boleh kosong</div>");
            }

            lolos = false;

        }else{
            if(form[i].nextElementSibling.className == 'error'){
                form[i].style.borderColor = '#0074b9';
                form[i].nextElementSibling.remove();
            }
        }
    }//end for

    return lolos;
}





// fungsi untuk galeri gambar

let target_gambar = document.getElementById('target_gambar');
let gambar_array = document.getElementById('karya_lain').children;
let no_sekarang = 0;


function ganti_gambar(gambar) {
    target_gambar.src = gambar.getAttribute('src');
    no_sekarang = gambar.className;
}


function ganti_sebelum() {
    no_sekarang -= 1;
    if(no_sekarang < 0) no_sekarang = 2;
    target_gambar.src = gambar_array[no_sekarang].getAttribute('src');
}

function ganti_berikut() {
    no_sekarang += 1;
    if(no_sekarang > 2) no_sekarang = 0;
    target_gambar.src = gambar_array[no_sekarang].getAttribute('src');
}


//end