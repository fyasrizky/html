var minuman;
minuman = prompt("Masukkan minuman yang anda pilih (teh manis,kopi,susu,jus jeruk)")||'';
switch(minuman) {
    case "teh manis":
        alert("Hari ini minum teh manis");
        break;      
    case "kopi":
        alert("Hari ini minum kopi");
        break;
    case "susu":
        alert("Hari ini minum susu");
        break;  
    case "jus jeruk":
        alert("Hari ini minum jus jeruk");
        break;
    default:
        alert("tidak meminum apa-apa");       
}