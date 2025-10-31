   
   function kirim() {
            var nama = document.getElementById("nama").value;
            var alamat = document.getElementById("alamat").value;
            var asal = document.getElementById("asal").value;

            var jurusan = [];
            var jurusanDipilih = document.getElementsByName("jurusan");
            for (var i = 0; i < jurusanDipilih.length; i++) {
                if (jurusanDipilih[i].checked) {
                    jurusan.push(jurusanDipilih[i].value);
                }
            }
            var jenjang = "";
            var jenjangDipilih = document.getElementsByName("jenjang");
            for (var j = 0; j < jenjangDipilih.length; j++) {
                if (jenjangDipilih[j].checked) {
                    jenjang = jenjangDipilih[j].value;
                }
            }
            document.getElementById("outNama").value = nama;
            document.getElementById("outAlamat").value = alamat;
            document.getElementById("outAsal").value = asal;
            document.getElementById("outJurusan").value = jurusan.join(", ");
            document.getElementById("outJenjang").value = jenjang;
        }
 
