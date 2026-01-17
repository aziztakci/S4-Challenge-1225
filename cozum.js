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


