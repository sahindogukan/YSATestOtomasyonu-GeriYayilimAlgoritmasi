
 class YSA {
     constructor(value1, value2,value3,result){
       this.v1 = value1;
       this.v2 = value2;
       this.v3 = value3;
       this.result = result;
       let y1 = this.noron1();
       let y2 = this.noron2();
       this.noron3(y1,y2,result);
     }

     static  w11 = -2.11;
     static  w12 = 0.69;
     static  w21 = 1.83;
     static  w22 = 1.12;
     static  w31 = 1.49;
     static  w32 = 1.97;
     static  w13 = -2.89;
     static  w23 = -1.36;
     static  wb1 = -0.24;
     static  wb2 = -2.4;
     static  wb3 = -2.12;
     static  xb = 1;

     noron1(){
        let net = this.v1*YSA.w11+this.v2*YSA.w21+this.v3*YSA.w31+YSA.xb*YSA.wb1;
        let y1 = (1/(1+Math.exp(-net)));
        return y1;
     }
     noron2()
     {
         let net2 = this.v1*YSA.w12+this.v2*YSA.w22+this.v3*YSA.w32+YSA.xb*YSA.wb2;
         let y2 = (1/(1+Math.exp(-net2)));
         return y2;
     }
     noron3(y1,y2,result)
     {
         let net3 = y1*YSA.w13+y2*YSA.w23+YSA.xb*YSA.wb3;
         let y3 = (1/(1+Math.exp(-net3)));


         let hataDegeri = parseFloat(y3 * (1-y3) * (result - y3));


         YSA.wb3 = YSA.wb3 + (hataDegeri*YSA.xb);
         YSA.w13 = YSA.w13 + (hataDegeri*y1);
         YSA.w23 = YSA.w23 + (hataDegeri*y2);

         let y1Hata = y1*(1-y1)*(YSA.w13*hataDegeri);

         YSA.wb1 = YSA.wb1 + (y1Hata*YSA.xb);
         YSA.w11 = YSA.w11 + (y1Hata*this.v1);
         YSA.w21 = YSA.w21 + (y1Hata*this.v2);
         YSA.w31 = YSA.w31 + (y1Hata*this.v3);

         let y2Hata = y2*(1-y2)*(YSA.w23*hataDegeri);

         YSA.wb2 = YSA.wb2 + (y2Hata*YSA.xb);
         YSA.w12 = YSA.w12 + (y2Hata*this.v1);
         YSA.w22 = YSA.w22 + (y2Hata*this.v2);
         YSA.w32 = YSA.w32 + (y2Hata*this.v3);

     }
     static showCard()
     {
         document.querySelector("#result").style.display="inline";
         let number =  document.getElementById("epok").value;
         document.querySelector("#epoknum").textContent = number;
         document.querySelector("#w11").textContent= YSA.w11;
         document.querySelector("#w12").textContent= YSA.w12;
         document.querySelector("#w21").textContent= YSA.w21;
         document.querySelector("#w22").textContent= YSA.w22;
         document.querySelector("#w31").textContent= YSA.w31;
         document.querySelector("#w32").textContent= YSA.w32;
         document.querySelector("#w13").textContent= YSA.w13;
         document.querySelector("#w23").textContent= YSA.w23;
         document.querySelector("#wb1").textContent= YSA.wb1;
         document.querySelector("#wb2").textContent= YSA.wb2;
         document.querySelector("#wb3").textContent= YSA.wb3;
     }
     static testEt(v1,v2,v3,r)
     {
         document.querySelector("#resultValue").style.display="inline";
         let net = v1*YSA.w11+v2*YSA.w21+v3*YSA.w31+YSA.xb*YSA.wb1;
         let y1 = (1/(1+Math.exp(-net)));

         let net2 = v1*YSA.w12+v2*YSA.w22+v3*YSA.w32+YSA.xb*YSA.wb2;
         let y2 = (1/(1+Math.exp(-net2)));

         let net3 = y1*YSA.w13+y2*YSA.w23+YSA.xb*YSA.wb3;
         let y3 = (1/(1+Math.exp(-net3)));

         document.querySelector("#gercekSonuc").textContent = r;
         document.querySelector("#bulunanSonuc").textContent = y3;
         return y3;

     }

 }

const App = (function ()
{
    loadEvents = function () {
        document.querySelector(".startLearn").addEventListener("click", getLearning);
        document.querySelector(".refreshLearn").addEventListener("click", getRefresh);

        document.querySelector(".btn1").addEventListener("click", function (e) {
            YSA.testEt(0,0,0,0);
            e.preventDefault();
        });
        document.querySelector(".btn2").addEventListener("click", function (e) {
            YSA.testEt(0,0,1,1);
            e.preventDefault();
        });
        document.querySelector(".btn3").addEventListener("click", function (e) {
            YSA.testEt(0,1,0,0);
            e.preventDefault();
        });
        document.querySelector(".btn4").addEventListener("click", function (e) {
            YSA.testEt(0,1,1,0);
            e.preventDefault();
        });
        document.querySelector(".btn5").addEventListener("click", function (e) {
            YSA.testEt(1,0,0,0);
            e.preventDefault();
        });
        document.querySelector(".btn6").addEventListener("click", function (e) {
            YSA.testEt(1,0,1,0);
            e.preventDefault();
        });
        document.querySelector(".btn7").addEventListener("click", function (e) {
            YSA.testEt(1,1,0,1);
            e.preventDefault();
        });
        document.querySelector(".btn8").addEventListener("click", function (e) {
            YSA.testEt(1,1,1,1);
            e.preventDefault();
        });
    };

    const getLearning = function (e) {

        if (document.getElementById("exampleRadios1").checked)
        {
            let i = document.getElementById("epok").value;
            let j = 0;
            while (j < i)
            {
                /*const ysa = new YSA(0,0,0,0);*/
                const ysa1 = new YSA(0,0,1,1);
                const ysa2 = new YSA(0,1,0,0);
                const ysa3 = new YSA(0,1,1,0);
                const ysa4 = new YSA(1,0,0,0);
                const ysa5 = new YSA(1,0,1,0);
                const ysa6 = new YSA(1,1,0,1);
                const ysa7 = new YSA(1,1,1,1);
                j++;
            }
            YSA.showCard();
            console.log(YSA.w11);

        }else if (document.getElementById("exampleRadios2").checked)
        {
            let i = document.getElementById("epok").value;
            let j = 0;
            while (j < i)
            {
                const ysa = new YSA(0,0,0,0);
               /* const ysa1 = new YSA(0,0,1,1);*/
                const ysa2 = new YSA(0,1,0,0);
                const ysa3 = new YSA(0,1,1,0);
                const ysa4 = new YSA(1,0,0,0);
                const ysa5 = new YSA(1,0,1,0);
                const ysa6 = new YSA(1,1,0,1);
                const ysa7 = new YSA(1,1,1,1);
                j++;
            }
            YSA.showCard();

        }else if (document.getElementById("exampleRadios3").checked)
        {
            let i = document.getElementById("epok").value;
            let j = 0;
            while (j < i)
            {
                const ysa = new YSA(0,0,0,0);
                const ysa1 = new YSA(0,0,1,1);
                /*const ysa2 = new YSA(0,1,0,0);*/
                const ysa3 = new YSA(0,1,1,0);
                const ysa4 = new YSA(1,0,0,0);
                const ysa5 = new YSA(1,0,1,0);
                const ysa6 = new YSA(1,1,0,1);
                const ysa7 = new YSA(1,1,1,1);
                j++;
            }
            YSA.showCard();

        }else if (document.getElementById("exampleRadios4").checked)
        {
            let i = document.getElementById("epok").value;
            let j = 0;
            while (j < i)
            {
                const ysa = new YSA(0,0,0,0);
                const ysa1 = new YSA(0,0,1,1);
                const ysa2 = new YSA(0,1,0,0);
                /*const ysa3 = new YSA(0,1,1,0);*/
                const ysa4 = new YSA(1,0,0,0);
                const ysa5 = new YSA(1,0,1,0);
                const ysa6 = new YSA(1,1,0,1);
                const ysa7 = new YSA(1,1,1,1);
                j++;
            }
            YSA.showCard();

        }else if (document.getElementById("exampleRadios5").checked)
        {
            let i = document.getElementById("epok").value;
            let j = 0;
            while (j < i)
            {
                const ysa = new YSA(0,0,0,0);
                const ysa1 = new YSA(0,0,1,1);
                const ysa2 = new YSA(0,1,0,0);
                const ysa3 = new YSA(0,1,1,0);
                /*const ysa4 = new YSA(1,0,0,0);*/
                const ysa5 = new YSA(1,0,1,0);
                const ysa6 = new YSA(1,1,0,1);
                const ysa7 = new YSA(1,1,1,1);
                j++;
            }
            YSA.showCard();

        }else if (document.getElementById("exampleRadios6").checked)
        {
            let i = document.getElementById("epok").value;
            let j = 0;
            while (j < i)
            {
                const ysa = new YSA(0,0,0,0);
                const ysa1 = new YSA(0,0,1,1);
                const ysa2 = new YSA(0,1,0,0);
                const ysa3 = new YSA(0,1,1,0);
                const ysa4 = new YSA(1,0,0,0);
                /*const ysa5 = new YSA(1,0,1,0);*/
                const ysa6 = new YSA(1,1,0,1);
                const ysa7 = new YSA(1,1,1,1);
                j++;
            }
            YSA.showCard();

        }else if (document.getElementById("exampleRadios7").checked)
        {
            let i = document.getElementById("epok").value;
            let j = 0;
            while (j < i)
            {
                const ysa = new YSA(0,0,0,0);
                const ysa1 = new YSA(0,0,1,1);
                const ysa2 = new YSA(0,1,0,0);
                const ysa3 = new YSA(0,1,1,0);
                const ysa4 = new YSA(1,0,0,0);
                const ysa5 = new YSA(1,0,1,0);
                /*const ysa6 = new YSA(1,1,0,1);*/
                const ysa7 = new YSA(1,1,1,1);
                j++;
            }
            YSA.showCard();

        }else if (document.getElementById("exampleRadios8").checked)
        {
            let i = document.getElementById("epok").value;
            let j = 0;
            while (j < i)
            {
                const ysa = new YSA(0,0,0,0);
                const ysa1 = new YSA(0,0,1,1);
                const ysa2 = new YSA(0,1,0,0);
                const ysa3 = new YSA(0,1,1,0);
                const ysa4 = new YSA(1,0,0,0);
                const ysa5 = new YSA(1,0,1,0);
                const ysa6 = new YSA(1,1,0,1);
               /* const ysa7 = new YSA(1,1,1,1);*/
                j++;
            }
            YSA.showCard();

        }else {
            let i = document.getElementById("epok").value;
            let j = 0;
            while (j < i)
            {
                const ysa = new YSA(0,0,0,0);
                const ysa1 = new YSA(0,0,1,1);
                const ysa2 = new YSA(0,1,0,0);
                const ysa3 = new YSA(0,1,1,0);
                const ysa4 = new YSA(1,0,0,0);
                const ysa5 = new YSA(1,0,1,0);
                const ysa6 = new YSA(1,1,0,1);
                const ysa7 = new YSA(1,1,1,1);
                j++;
            }
            YSA.showCard();
        }

        document.querySelector("#bulunan1").textContent = YSA.testEt(0,0,0,0);
        document.querySelector("#bulunan2").textContent = YSA.testEt(0,0,1,1);
        document.querySelector("#bulunan3").textContent = YSA.testEt(0,1,0,0);
        document.querySelector("#bulunan4").textContent = YSA.testEt(0,1,1,0);
        document.querySelector("#bulunan5").textContent = YSA.testEt(1,0,0,0);
        document.querySelector("#bulunan6").textContent = YSA.testEt(1,0,1,0);
        document.querySelector("#bulunan7").textContent = YSA.testEt(1,1,0,1);
        document.querySelector("#bulunan8").textContent = YSA.testEt(1,1,1,1);
        e.preventDefault();
    };
    const getRefresh = function (e) {
        document.getElementById("epok").value="";
        document.querySelector("#result").style.display="none";
        document.querySelector("#resultValue").style.display="none";
         YSA.w11 = -2.11;
         YSA.w12 = 0.69;
         YSA.w21 = 1.83;
         YSA.w22 = 1.12;
         YSA.w31 = 1.49;
         YSA.w32 = 1.97;
         YSA.w13 = -2.89;
         YSA.w23 = -1.36;
         YSA.wb1 = -0.24;
         YSA.wb2 = -2.4;
         YSA.wb3 = -2.12;
         YSA.xb = 1;
         for (let i=0; i<8; i++)
         {
             if (document.getElementById(`exampleRadios${i+1}`).checked) {
                 document.getElementById(`exampleRadios${i+1}`).checked = false
             }
         }
        e.preventDefault();
    };

    return{
        init: function () {
           loadEvents();
           document.querySelector("#result").style.display="none";
            document.querySelector("#resultValue").style.display="none";


        }
    }
})();

 App.init();
