function hitung(operator) {
    var inputBil1 = document.getElementById('bil1').value.trim();
    var inputBil2 = document.getElementById('bil2').value.trim();
    if (inputBil1 === "" || inputBil2 === "") {
        alert("Harap masukkan bilangan !");
        return;
    }
    var bil1 = parseFloat(inputBil1);
    var bil2 = parseFloat(inputBil2);
    var hasil;
    var operasiNama;
    switch (operator) {
        case '+':
            hasil = bil1 + bil2;
            operasiNama = "Penjumlahan";
            break;
        case '-':
            hasil = bil1 - bil2;
            operasiNama = "Pengurangan";
            break;
        case '*':
            hasil = bil1 * bil2;
            operasiNama = "Perkalian";
            break;
        case '/':
            if (bil2 === 0) {
                alert("Tidak bisa melakukan Pembagian dengan nol!");
                return;
            }
            hasil = bil1 / bil2;
            operasiNama = "Pembagian";
            break;
        default:
            alert("Operator tidak valid.");
            return;
    }    
    if (typeof hasil !== 'number' || String(hasil) === 'nan') {
        alert("Input yang dimasukkan tidak valid sebagai angka!");
        return;
    }

    alert(`Hasil ${operasiNama} = ${hasil}`);
}

function clearInputs() {
    document.getElementById('bil1').value = '';
    document.getElementById('bil2').value = '';
}