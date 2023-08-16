/*button ganti rumus */
document.addEventListener("DOMContentLoaded", function() {
    const kehtml1 = document.getElementById("kehtml1");
    
    kehtml1.addEventListener("click", function() {
        window.location.href = "index.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const kehtml2 = document.getElementById("kehtml2");
    
    kehtml2.addEventListener("click", function() {
        window.location.href = "index2.html";
    });
});

/*rumus luas*/
function hitung1() {
    const tinggi= parseFloat(document.getElementById("tinggi1").value);
    const alas = parseFloat(document.getElementById("alas1").value);

    if (isNaN(tinggi) || isNaN(alas)) {
        alert("di isi dulu gan");
        return;
      }

    const luasSegitiga = 0.5 * tinggi * alas;
    let t = tinggi1.value
    let a = alas1.value
    let l = luasSegitiga
    
    document.getElementById("hasil1").innerHTML = `Luas segitiga dari Tinggi ${t}cm dan Alas ${a}cm adalah ${l}cm2.`;
  }
  
  /*rumus keliling*/
  function hitung2() {
    const sisiA = parseFloat(document.getElementById("SisiA").value);
    const sisiB = parseFloat(document.getElementById("SisiB").value);
    const sisiC = parseFloat(document.getElementById("SisiC").value);

    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
        alert("di isi dulu gan");
        return;
      }
      
    const kelilingSegitiga = sisiA + sisiB + sisiC;
    let sA = SisiA.value
    let sB = SisiB.value
    let sC = SisiC.value
    let k = kelilingSegitiga
    document.getElementById("hasil2").innerHTML = `Keliling segitiga dari sisi A ${sA}cm, sisi B ${sB}cm dan sisi C ${sC}cm adalah ${k}cm.`;
  }

  /*reset luas*/
  function reset1() {
    document.getElementById("tinggi1").value = "";
    document.getElementById("alas1").value = "";
    document.getElementById("hasil1").innerHTML = "";
  }

  /*reset keliling*/
  function reset2() {
    document.getElementById("SisiA").value = "";
    document.getElementById("SisiB").value = "";
    document.getElementById("SisiC").value = "";
    document.getElementById("hasil2").innerHTML = "";
  }

  /*tombol enter*/
  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      if (document.activeElement.tagName === "INPUT") {
        event.preventDefault();
        if (document.activeElement.id === "alas1" || document.activeElement.id === "tinggi1") {
          document.getElementById("hitung1").click();
        } else if (document.activeElement.id === "SisiA" || document.activeElement.id === "SisiB" || document.activeElement.id === "SisiC") {
          document.getElementById("hitung2").click();
        }
      }
    }
  });