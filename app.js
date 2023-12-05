const pr = document.querySelector("#pr");
const sipButton = document.getElementById("siparisButton");
const productDiv = document.querySelectorAll(".product"); // Tüm .product sınıfına sahip div'leri seçer
const urunKoduGirisi = document.getElementById("urunKodu");
const masaKoduGirisi = document.getElementById("masaKodu");
const masaNo = document.querySelectorAll(".masa1");
const masaSiparis = document.getElementsByClassName("masaSip");
let MasaKodu = 0;
import pro from "./data.js";

console.log(pro);
let pTextContent = 0;

productDiv.forEach((div) => {
  div.addEventListener("click", function (e) {
    e.preventDefault();
    const pElement = div.querySelector("p"); // Tıklanan .product içindeki p öğesini seçer

    if (pElement) {
      pTextContent = pElement.textContent; // p öğesinin metin içeriğini alır

      console.log(pTextContent); // Örneğin, p öğesinin içeriğini konsola yazdırır
      urunKoduGirisi.value = pTextContent;
      // Değişken pTextContent'e istediğiniz şeyi yapabilirsiniz, örneğin başka bir yerde kullanabilirsiniz
    }
  });
});

masaNo.forEach((div) => {
  div.addEventListener("click", function (e) {
    e.preventDefault();
    const pMasa = div.querySelector("p");
    if (pMasa) {
      MasaKodu = pMasa.textContent;
      console.log(MasaKodu);
      masaKoduGirisi.value = MasaKodu;
    }
  });
});

sipButton.addEventListener("click", function (e) {
  e.preventDefault();
  const masaNoList = document.querySelectorAll(".masaNo p");
  masaNoList.forEach((masa) => {
    const masaNumarasi = masa.textContent.trim(); // Masa numarasını alır ve boşlukları temizler

    const masaSip = masa.parentElement.nextElementSibling; // Masa numarasının ebeveyninin bir sonraki kardeşini (masaSip) seçer

    if (masaNumarasi === MasaKodu) {
      // masaSip.textContent = pTextContent;
      // Eğer masa numarası istenilen numaraysa, masaSip içine sipariş numarasını yazar

      pro.forEach((x) => {
        if (x.id === pTextContent) {
          const contentSiparis= `
       

          <div class="SirarisEdilmisUrun">
          <img src="${x.icon}" width="30px" alt="">
          <p>${x.title}</p>
          <p>${x.price}TL</p>
          <a href="" id="del"><i class="fa-solid fa-trash"></i></a> 
          </div>     
      
        `;
        masaSip.innerHTML += contentSiparis ;
        }
     
      });
    }
  masaSip.addEventListener('click', function (e) {
    console.log("merhaba")
    if (e.target.classList.contains('fa-trash')) {
      const itemToRemove = e.target.closest('.SirarisEdilmisUrun');
      if (itemToRemove) {
        itemToRemove.remove();
      }
    }
  });
  
});

  });




              