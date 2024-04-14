const funfact = [
    "Manusia mengonsumsi es krim dalam jumlah sangat banyak. Rata-rata memakan hingga 22 pon es krim dalam setahun",
    "Ada universitas es krim di Italia yang mengajarkan ilmu tentang pembuatan es krim. Universitas ini bernama Carpigiani Gelato University",
    "Es krim rasa oyster dan asparagus pernah ada pada zaman kolonial. Es krim ini dibuat dari bahan-bahan asli, seperti oyster segar dan asparagus rebus",
    "Es krim astronot adalah es krim yang dikeringkan dalam keadaan beku dan siap untuk dimakan. Es krim ini dibuat oleh Whirlpool Corporation atas permintaan NASA ketika Projek Apollo",
    "Es krim tidak menyebabkan batuk pilek. Penyebab utama batuk pilek adalah virus dan alergi bawaan pada anak-anak",
    "Es krim cone pertama kali ditemukan oleh Ernest A. Hamwi, seorang imigran asal Suriah yang menjual waffle. Hamwi membentuk waffle menjadi kerucut dan memberikannya kepada penjual es krim yang kehabisan mangkuk",
    "Es krim vanila adalah rasa es krim yang paling populer di dunia. Menurut sebuah survei, 29% orang memilih vanila sebagai rasa favorit mereka, diikuti oleh coklat (8,9%) dan stroberi (5,3%)",
    "Es krim sundae pertama kali dibuat pada tahun 1892 di New York. Nama sundae berasal dari hari Minggu (Sunday), karena es krim ini hanya dijual pada hari itu",
    "Es krim terbesar yang pernah dibuat adalah es krim berbentuk kue yang memiliki berat 12.096 pon. Es krim ini dibuat oleh Carvel Ice Cream Company pada tahun 2004 untuk merayakan ulang tahun ke-70 mereka",
    "Es krim tercepat yang pernah dimakan adalah es krim seberat 500 gram yang dimakan dalam waktu 36,78 detik. Rekor ini dicetak oleh Leah Shutkever dari Inggris pada tahun 2019"
  ];
  
  document.querySelector("#generate").addEventListener("click", () => {
    generate();
  });
  
  function generate() {
    const randomIndex = Math.floor(Math.random() * funfact.length);
    document.querySelector("#funfact").textContent = funfact[randomIndex];
  }
  
  window.onload = function() {
    generate();
  }
  