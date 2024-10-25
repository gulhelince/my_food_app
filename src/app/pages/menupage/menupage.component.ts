// Gerekli Angular modülleri ve hizmetler içe aktarılıyor.
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Aktif rota hakkında bilgi almak için kullanılır.
import { OrderDetailsService } from 'src/app/services/order-details.service'; // Sipariş detayları hizmeti.

@Component({
  selector: 'app-menupage', // Bu bileşenin HTML'de kullanılacak adı <app-menupage> olacaktır.
  templateUrl: './menupage.component.html', // Şablon dosyasının yolu.
  styleUrls: ['./menupage.component.css'] // Stil dosyasının yolu.
})
export class MenupageComponent implements OnInit {

  // Yapılandırıcı (constructor), bileşene bağımlılık olarak kullanılan sınıf örneklerini alır.
  // 'ActivatedRoute' ile URL parametrelerine erişilir.
  // 'OrderDetailsService' ile menü verileri alınır.
  constructor(private param: ActivatedRoute, private service: OrderDetailsService) { }

  getMenuId: any; // URL'den alınacak menü kimliği için değişken.
  menuData: any; // Seçilen menüye ait verilerin saklanacağı değişken.

  // Bileşen başlatıldığında çalışacak yöntem.
  ngOnInit(): void {
    // 'id' parametresini URL'den alıp 'getMenuId' değişkenine atar.
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId, 'getmenu'); // Alınan 'id' değerini konsola yazdırır.

    // Eğer 'getMenuId' geçerli bir değer ise (yani boş değilse)
    if (this.getMenuId) {
      // 'OrderDetailsService' üzerindeki 'foodDetails' listesinden 
      // 'id' değeri 'getMenuId' ile eşleşen öğeleri filtreler ve 'menuData'ya atar.
      this.menuData = this.service.foodDetails.filter((value) => {
        return value.id == this.getMenuId; // Menü kimliğine eşit olan veriyi döndür.
      });
    }
  }
}
