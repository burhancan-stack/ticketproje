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
var MainClass = /** @class */ (function () {
    function MainClass(customerName, ticketId, price, seatNumber) {
        // super(customerName, ticketId, price, seatNumber);
        this._customerName = customerName;
        this._price = price;
        this._seatNumber = seatNumber;
        this._ticketId = ticketId;
    }
    MainClass.prototype.ticketUret = function () {
        var name = this._customerName;
        var price = this._price;
        var seatNumber = this._seatNumber;
        var button = document.querySelector("#btnBuy");
        button.addEventListener("click", gatherInfos);
        function gatherInfos() {
            var length = 10;
            var result = "";
            var characters = "QWERTYIUIO@£#æßPASDFGHJKLZXCVBNM23981724897askldjklsdfhy9781263872234981273981273987";
            var characterLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characterLength));
            }
            var ticketId = result;
            if (result === this.ticketId || this.ticketId === "undefined") {
                console.log("Bilet numarası zaten önceden alınmış!");
            }
            else {
                return window.alert("Say\u0131n: ".concat(name, ", biletiniz ba\u015Far\u0131yla sat\u0131n al\u0131nm\u0131\u015Ft\u0131r. Detaylar:\n                \nBilet Numaran\u0131z: ").concat(ticketId, ",\n                \nBilet Fiyat\u0131: ").concat(price, ",\n                \nKoltuk Numaras\u0131: ").concat(seatNumber, " \n                "));
            }
        }
    };
    return MainClass;
}());
// let musteri1 = new MainClass("Can Mert", "AKNKJ129FA4", 300, 5);
// musteri1.ticketUret();
// let musteri2 = new MainClass('John Sl', 'asdlasdkjads', 300, 6)
// musteri2.ticketUret();
//type casting
