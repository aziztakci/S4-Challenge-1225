/* 1. Soru Çözümü */
/* 1. Çözüm: */
let ucuzMu = (urun) => urun.fiyat <= 50;
let kaloriDusuk = (urun) => urun.kalori < 500;
let malzeme = (urun) => urun.malzemeler.includes("domates");

const menudeAra = (clb) => {
  let liste = [];
  restoran.menuler.forEach((category) => {
    category.urunler.forEach((urun) => {
      if (clb(urun)) {
        liste.push({ ...urun, kategorisi: category.kategori });
      }
    });
  });
  return liste;
};

/* filterMap ve map ile */

let ucuzMu = (urun) => urun.fiyat <= 50;
let kaloriDusuk = (urun) => urun.kalori < 500;
let malzeme = (urun) => urun.malzemeler.includes("domates");

const menudeAra = (clb) => {
  const liste = restoran.menuler.flatMap((categories) =>
    categories.urunler.map((urun) => ({
      ...urun,
      kategorisi: categories.kategori,
    })),
  );

  return liste.filter(clb);
};


/* 2. Soru Çözümü */

let siparisDetay = (urun, adet) => {
  return {
    ad: urun.ad,
    adet: adet,
    toplam: urun.fiyat * adet
  };
};

const siparisiIsle = (masaNo, clb) => {
  let sonuc = [];
  let result = [];

  restoran.siparisler.forEach(siparis => {
    if (siparis.masa === masaNo) {
      sonuc.push(...siparis.urunler);
    }
  });

  restoran.menuler.forEach(kategori => {
    kategori.urunler.forEach(urun => {
      const eslesme = sonuc.find(
        obje => urun.id === obje.urunId
      );

      if (eslesme) {
        result.push(
          clb(urun, eslesme.adet)
        );
      }
    });
  });

  return result;
};

console.log(siparisiIsle(5, siparisDetay));


