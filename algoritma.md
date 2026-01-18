``tüm siparişleri kontrol dolaşıp, hangi üründen kaç tane kullanıldığını tespit eden fonksiyonu yaz.``

``öncelikle her siparişte ürünid ve ürün adeti veren bir değişken tutulmalı,``
``fonksiyonu şu şekilde olabilir,``

(flatmap ve map ile)

``siparisUrunleri = urunId adet ve sipariş saatini içermekte.``

önce verilen sipariş sonrası malzemeleri toplamak.

sort metoduyla saat bilgilerini kıyaslayabiliriz,

`siraliSiparis ile önceliğie göre sıraladık.`

[
  { urunId: 1, adet: 2, saat: "12:30" },
  { urunId: 4, adet: 2, saat: "12:30" },
  { urunId: 7, adet: 1, saat: "12:30" },
  { urunId: 2, adet: 1, saat: "13:00" },
  { urunId: 5, adet: 3, saat: "13:00" },
  { urunId: 8, adet: 2, saat: "13:00" },
  { urunId: 3, adet: 2, saat: "13:15" },
  { urunId: 6, adet: 2, saat: "13:15" },
  { urunId: 7, adet: 2, saat: "13:15" }
]  çıktı bu şekilde.

`her birini kontrol edip menüler içinde hangi ürün olduğunu ve hangi malzemeden kaç tane kullanıldığına bakılacak. flatmap ile restoran.menuler düzleştirilip, içinde find ile yeni listeyi bir değişkene atayıp onun üzerinde çalışılabilir`

