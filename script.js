var inptRed = false
var sexo = null
var img = document.getElementById("img")

function horas () {
   var data = new Date()
   var hora = data.getHours()

   if (hora >= 5 && hora <= 11) {
      document.querySelector("body").style.backgroundColor = "#fffad4"
   } else {
      if (hora >= 12 && hora <= 17) {
         document.querySelector("body").style.backgroundColor = "#f1b964"
      } else {
         document.querySelector("body").style.backgroundColor = "#021a34"
      }
   }
}

function femn () {
   inptRed = true
   sexo = (String(document.getElementById("femn").value, 10))
}

function masc () {
   inptRed = true
   sexo = (String(document.getElementById("masc").value, 10))
}

function verif () {
   var idade = (parseInt(document.getElementById("idade").value, 10))
   idade = 2020 - idade
   if (inptRed == false || idade < 1) {
      alert("Ops, vocé esqueceu de algo")

   } else {
      if (sexo == "femn") {
         if (idade >= 1 && idade <= 10) {
            msg.innerText = `Vocé é uma mulher com ${idade} anos`
            img.src = "imgs/foto-bebe-f.png"

         } else {
            if (idade >= 11 && idade <= 17) {
               msg.innerText = `Vocé é uma mulher com ${idade} anos`
               img.src = "imgs/foto-jovem-f.png"
            } else {
               if (idade >= 18 && idade <= 30) {
                  msg.innerText = `Vocé é uma mulher com ${idade} anos`
                  img.src = "imgs/foto-adulto-f.png"
               } else {
                  msg.innerText = `Vocé é uma mulher com ${idade} anos`
                  img.src = "imgs/foto-idoso-f.png"
               }
            }
         }

      } else {
         if (idade >= 1 && idade <= 10) {
            msg.innerText = `Vocé é um homem com ${idade} anos`
            img.src = "imgs/foto-bebe-m.png"
         } else {
            if (idade >= 11 && idade <= 17) {
               msg.innerText = `Vocé é um homem com ${idade} anos`
               img.src = "imgs/foto-jovem-m.png"
            } else {
               if (idade >= 18 && idade <= 30) {
                  msg.innerText = `Vocé é um homem com ${idade} anos`
                  img.src = "imgs/foto-adulto-m.png"
               } else {
                  msg.innerText = `Vocé é um homem com ${idade} anos`
                  img.src = "imgs/foto-idoso-m.png"
               }
            }
         }
      }   
   }
}