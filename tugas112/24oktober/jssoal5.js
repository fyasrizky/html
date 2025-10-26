const NAMA_PELANGGAN = "Fayaz Rizky Herlambang";
    const TOTAL_BELANJA = 15000;
    const DATA_BELANJA = [
        { n: "Buku", h: 5000, b: 2, s: 10000 },
        { n: "Pencil", h: 2000, b: 1, s: 2000 },
        { n: "penghapus", h: 1500, b: 2, s: 3000 }
    ];
    function buatTabelBelanja() {
        document.writeln("<table border='1'>");
        document.writeln("<tr><th>Nama Barang</th><th>Harga Barang</th><th>Jumlah Beli</th><th>Sub Total</th></tr>");
        DATA_BELANJA.forEach(item => {
            document.writeln(`<tr><td>${item.n}</td><td>${item.h.toLocaleString('id-ID')}</td><td>${item.b}</td><td>${item.s.toLocaleString('id-ID')}</td></tr>`);
        });
        document.writeln(`<tr><td colspan='3'>Total</td><td>${TOTAL_BELANJA.toLocaleString('id-ID')}</td></tr>`);
        document.writeln("<tr><td colspan='2'></td>");
         document.writeln("<td coslspan='6'><input type='button' value='Bayar' onclick='prosesPembayaran()'></td><td></td></tr>");
        document.writeln("<tr><td colspan='4'>NAMA_PELANGGAN</td></tr>");
        document.writeln("</table>");
    }

    function prosesPembayaran() {
        let inputUang = prompt(` Jumlah Uang\n${TOTAL_BELANJA.toLocaleString('id-ID')}`);
        if (inputUang === null) {
            alert("Transaksi dibatalkan.");
            return;
        }
        let jumlahUangDibayarkan = parseInt(inputUang);
        if (isNaN(jumlahUangDibayarkan) || jumlahUangDibayarkan < TOTAL_BELANJA) {
            alert("Jumlah uang tidak valid atau kurang dari Total Belanja.");
            return;
        }
        const kembalian = jumlahUangDibayarkan - TOTAL_BELANJA;
        let pesanKembalian;
        if (kembalian > 0) { 
            pesanKembalian = `Kembalian : ${kembalian.toLocaleString('id-ID')}`;
        } else {
            pesanKembalian = "Uang pas Gantikan Kembalian : 5000"; 
        }
        alert(`(File ${NAMA_PELANGGAN}) Bayar : ${jumlahUangDibayarkan.toLocaleString('id-ID')} Total Belanja : ${TOTAL_BELANJA.toLocaleString('id-ID')} ${pesanKembalian}`);
    }
    buatTabelBelanja();