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
    toplam: urun.fiyat * adet,
  };
};

const siparisiIsle = (masaNo, clb) => {
  let sonuc = [];
  let result = [];

  restoran.siparisler.forEach((siparis) => {
    if (siparis.masa === masaNo) {
      sonuc.push(...siparis.urunler);
    }
  });

  restoran.menuler.forEach((kategori) => {
    kategori.urunler.forEach((urun) => {
      const eslesme = sonuc.find((obje) => urun.id === obje.urunId);

      if (eslesme) {
        result.push(clb(urun, eslesme.adet));
      }
    });
  });

  return result;
};

console.log(siparisiIsle(5, siparisDetay));

/* 3. Soru Çözümü */

const toplamStok = {...restoran.stok};

let siparisUrunleri = restoran.siparisler.flatMap((order) => {
  return order.urunler.map((orderTime) => ({
    urunId: orderTime.urunId,
    adet: orderTime.adet,
    saat: order.saat,
  }));
});

let siraliSiparis = siparisUrunleri.sort((a, b) => {
  let [aSaat, aDakika] = a.saat.split(":").map(Number);
  let [bSaat, bDakika] = b.saat.split(":").map(Number);
  return aSaat !== bSaat ? aSaat - bSaat : aDakika - bDakika;
});

siraliSiparis.forEach((urun) => {
  const siparisDetay = restoran.menuler
    .flatMap((u) => u.urunler)
    .find((s) => s.id === urun.urunId);

    siparisDetay.malzemeler.forEach(malzeme => {
      if (restoran.stok[malzeme] >= urun.adet) {
        restoran.stok[malzeme] -= urun.adet;
        let stokYuzde = (restoran.stok[malzeme] / toplamStok[malzeme]);
        console.log(`${urun.adet} adet ${malzeme} kullanıldı. Kalan: ${restoran.stok[malzeme]} adet( %${(stokYuzde*100).toFixed(2)}). `)
      } else {
        console.log(`Stoklarda ${malzeme} yetersiz. Stok ${restoran.stok[malzeme]}.`)
      }
    })
});
