``4 soru için,``

``siparişlerden garson adını urunleri ve durumu çekip alalım.``

restoran.siparisler.flatMap(u=> u.urunler.map(urun => ({
    garson: u.garson,
    ...urun,
    durum: u.durum

})
));


``garsonSiparis konsolda şu şekilde ``

[
{
  "garson": "Ahmet",
  "urunId": 1,
  "adet": 2,
  "durum": "hazirlaniyor"
},
{
  "garson": "Ahmet",
  "urunId": 4,
  "adet": 2,
  "durum": "hazirlaniyor"
},
{
  "garson": "Ayşe",
  "urunId": 8,
  "adet": 2,
  "durum": "tamamlandi"
}
.....]

``Buradan sonra, garson isimlerini argüman olarak alan bir fonksiyon yazabiliriz, örneğin``

const siparisDetay = (isim) => {
    ``garsonSiparis isimli değişkenden key'i garson olan ögenin value-değeri isme eşitse alıp başka bir değişkende saklayıp, bunu return edebiliriz.``
};



``ikinci aşamada garson(isim) için toplamda kaç sipariş aldığını, toplam sipariş tutarını,  ortalama sipariş tutarını (her siparişte ortalama ne kadarlık sipariş aldı) hesapla. ``  

``filterMap ve find ile siparişlerin ürünlerle eşleşmesi sağlanabilir, ardından tutar hesaplanabilir.``

siparisDetay("Ahmet") çıktısı konsolda bu şekilde görünecek.;
[
  { garson: "Ahmet", urun: "Adana Kebap", adet: 2, toplamFiyat: 360 },
  { garson: "Ahmet", urun: "Ayran", adet: 2, toplamFiyat: 30 },
  { garson: "Ahmet", urun: "Baklava", adet: 1, toplamFiyat: 80 },
  { garson: "Ahmet", urun: "Tavuk Şiş", adet: 2, toplamFiyat: 300 },
  { garson: "Ahmet", urun: "Şalgam", adet: 2, toplamFiyat: 40 },
  { garson: "Ahmet", urun: "Baklava", adet: 2, toplamFiyat: 160 }
]

