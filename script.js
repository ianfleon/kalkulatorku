let angka = undefined;
let angkaDump = undefined;
let actBtn = false;
let angkaCurrent = undefined;

const mainAngka = document.getElementById('main-angka');
const btns = document.querySelectorAll('button[data-btn]');
const hasilEl = document.getElementById('hasil');
const currentResult = document.getElementById('current-result');
const operatorTxt = document.getElementById('operator-text');
const btnsNomor = document.querySelectorAll('button[data-nomor]');

/* Event: Clear Button */
document.getElementById('btn-clear').addEventListener('click', function () {

    // console.log('Btn Clear clicked!');

    angka = undefined;
    angkaDump = undefined;
    angkaCurrent = undefined;
    actBtn = false;

    mainAngka.innerText = '0';
    operatorTxt.innerText = '?';
    hasilEl.innerText = '';
    currentResult.innerText = '';

});

/* Event: Delete Button */
document.getElementById('btn-delete').addEventListener('click', function () {

    // console.log('Btn Delete clicked!');

    if (angkaCurrent != undefined) {
        angkaCurrent = angkaCurrent.slice(0, (angkaCurrent.length - 1));
        if (angkaCurrent.length < 1) {
            mainAngka.innerText = 0;
        } else {
            mainAngka.innerText = angkaCurrent;
        }
    }

    console.log(angkaCurrent);

});

// console.log(btnsNomor);

/* Event: Number Buttons clicked */
btnsNomor.forEach(function (btn) {
    btn.addEventListener('click', function () {
        // console.log(btn)
        showAngka(btn.dataset.nomor);
    });
});

/* Event: Operational Buttons Clicked */
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        setHasil();
        actBtn = btn.dataset.btn;
        operatorTxt.innerText = actBtn;
        // console.log(btn.dataset.btn);
    });
});

/* Set Result and Show to Kalkulator */
function setHasil() {

    if (angka != undefined) {
        if (!isNaN(angkaCurrent)) {
            angkaDump = parseInt(angkaCurrent);
        }
    } else {
        if (!isNaN(angkaCurrent)) {
            angka = parseInt(angkaCurrent);
        }
    }

    // console.log("angka: " + angka);
    // console.log("angkaDump: " + angkaDump);
    // console.log("angkaCurrent: " + angkaCurrent);

    if (angkaCurrent != undefined) {
        currentResult.innerHTML = angkaCurrent;
    }


    angkaCurrent = undefined;


    // Cek hasil jika ada angka ke 2
    if (angkaDump != undefined) {

        switch (actBtn) {
            case '-':
                angka = (parseInt(angka) - parseInt(angkaDump));
                break;
            case '+':
                angka = (parseInt(angka) + parseInt(angkaDump));
                break;
            case ':':
                angka = (parseInt(angka) / parseInt(angkaDump));
                break;
            case '*':
                angka = (parseInt(angka) * parseInt(angkaDump));
                break;
            default:
                console.log("PAKYU");
                break;
        }

        // Reset Dummy
        actBtn = false;
        angkaDump = undefined;

        mainAngka.innerText = angka;

        hasilEl.innerText = angka;

        // console.log('hasil: ' + angka);
    }

    // console.log(angka);

}

// Paste (CTRL + V) Listener
document.addEventListener('paste', evt => {

    // Ambil nilai dari clipboard
    let txt = evt.clipboardData.getData('text/plain');
    // console.log(txt);

    txt = txt.replace(/(,)/g, '');
    console.log(txt);

    angkaCurrent = txt;
    mainAngka.innerText = txt;

    txt = parseInt(txt);



    if (angka === undefined) {
        angka = parseInt(txt);
        console.log("angka: " + angka);
        return txt;
    }

    angkaDump = parseInt(txt);
    // console.log("angkaDump: " + angka);

    return txt;

});

/* Show Result to Header */
function showHitungan(t) {
    const noSpan = document.createElement('p');
    const noTxt = document.createTextNode(t);
    noSpan.append(noTxt);
    return noSpan;
}

/* Show Current Numbers clicked to Kalkulatorku */
function showAngka(a) {

    if (angkaCurrent != undefined) {
        if (angkaCurrent.length < 12) {
            angkaCurrent += a;
        }
    } else {
        angkaCurrent = a;
    }

    // console.log(angkaCurrent);

    mainAngka.innerText = angkaCurrent;
}