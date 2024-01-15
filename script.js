let angka = undefined;
let angkaDump = undefined;
let actBtn = false;

const mainAngka = document.getElementById('main-angka');
const btns = document.querySelectorAll('button[data-btn]');
const hitungan = document.getElementById('hitungan');
const operatorTxt = document.getElementById('operator-text');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        setHasil();
        actBtn = btn.dataset.btn;
        operatorTxt.innerText = actBtn;
        // console.log(btn.dataset.btn);
    });
});

function setHasil() {

    // Cek hasil jika ada angka ke 2
    if (angkaDump != undefined) {
        switch (actBtn) {
            case '-':
                angka = (angka - angkaDump);
                break;
            case '+':
                angka = (angka + angkaDump);
                break;
        }
        // Reset
        actBtn = false;
        angkaDump = undefined;
    }

    mainAngka.innerText = angka;
    // console.log(angka);

}

// Paste (CTRL + V) Listener
document.addEventListener('paste', evt => {

    // Ambil nilai dari clipboard
    let txt = evt.clipboardData.getData('text/plain');
    // console.log(txt);

    txt = txt.replace(/^\D+/g, '');
    console.log(txt);

    txt = parseInt(txt);


    mainAngka.innerText = txt;

    if (actBtn != false) {
        hitungan.appendChild(showHitungan(actBtn));
    }

    //   console.log(noSpan);
    hitungan.appendChild(showHitungan(txt));
    
    if (angka === undefined) {
        angka = parseInt(txt);
        console.log("angka: " + angka);
        return txt;
    }

    angkaDump = parseInt(txt);
    console.log("angkaDump: " + angka);

    return txt;

});

function showHitungan(t) {
    const noSpan = document.createElement('span');
    const noTxt = document.createTextNode(t);
    noSpan.append(noTxt);
    return noSpan;
}