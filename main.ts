// abstract class SuperClass {
//   constructor(
//     protected customerName: string,
//     protected ticketId: string,
//     protected price: number,
//     protected seatNumber: number
//   ) {
//     this.customerName = customerName;
//     this.seatNumber = seatNumber;
//     this.price = price;
//     this.ticketId = ticketId;
//   }
// }

class MainClass {
  _ticketId: string;
  _price: number;
  _customerName: string;
  _seatNumber: number;

  constructor(customerName: string,ticketId: string,price: number,seatNumber: number) {
    // super(customerName, ticketId, price, seatNumber);

    this._customerName = customerName;
    this._price = price;
    this._seatNumber = seatNumber;
    this._ticketId = ticketId;
   
    
  }
  ticketUret() {
    let name = this._customerName;
    let price = this._price;
    let seatNumber = this._seatNumber;
    
    let button = document.querySelector("#btnBuy")!;
    button.addEventListener("click", gatherInfos);
    function gatherInfos() {
      let length = 10;
      let result: string = "";
      let characters: string = "QWERTYIUIO@£#æßPASDFGHJKLZXCVBNM23981724897askldjklsdfhy9781263872234981273981273987";
      let characterLength: number = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characterLength)
          
        );
      }
      let ticketId = result
      if (result === this.ticketId || this.ticketId === "undefined") {
        console.log("Bilet numarası zaten önceden alınmış!");
      } else {
        return window.alert(`Sayın: ${name}, biletiniz başarıyla satın alınmıştır. Detaylar:
                \nBilet Numaranız: ${ticketId},
                \nBilet Fiyatı: ${price},
                \nKoltuk Numarası: ${seatNumber} 
                `);
      }
    }
  }
  
}

// let musteri1 = new MainClass("Can Mert", "AKNKJ129FA4", 300, 5);
// musteri1.ticketUret();
// let musteri2 = new MainClass('John Sl', 'asdlasdkjads', 300, 6)
// musteri2.ticketUret();


//type casting

