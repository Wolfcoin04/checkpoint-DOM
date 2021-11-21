gsap.from('nav', {opacity:0, delay:1.6, duration:2.5, ease: "elastic.out(1,0.3)", y:-100});

gsap.from('.search', {opacity:0, delay:1.8, duration:2.8, ease: "elastic.out(1,0.3)", y:-100});

gsap.from('.brand_type', {opacity:0, delay:2.2, duration:3, ease: "elastic.out(1,0.3)", y:-100});

gsap.from('.discount', {opacity:0, delay:1, scale:.1, duration:2.4, rotation:180,
 ease: "expo.inOut", x:100});

gsap.from('.bottom_shoes_card', {opacity:0, delay:2.6, duration:3.5, ease: "elastic.out(1,0.3)", x:100});

gsap.from('.selected_product_img', {opacity:0, delay:3, duration:4, ease:"elastic.out(1,0.3)", y:100});

gsap.from('.size_product', {opacity:0, delay:3.5, duration:0.5, ease:"Expo.In", y:100});

gsap.from('.circle1', {opacity:0, delay:4.5, scale:.1, duration:.7, ease:"expo.In"});

gsap.from('.circle2', {opacity:0, delay:4.8, scale:.1, duration:.7, ease:"expo.In"});

gsap.from('.panier', {opacity:0, delay:4.8, scale:.1, duration:.7, ease:"expo.In"});

// Ajouter ou retirer un Article
var qtPlus = document.querySelectorAll(".svg-icon");
var qtMoins = document.querySelectorAll(".svg-icon1");
var prixTotal = document.querySelectorAll(".subtotal");
var qt = document.querySelectorAll(".qte");
var prix= document.querySelectorAll(".price1");
var prixP = document.querySelector(".prixPanier");
var qte = document.getElementById("in-cart-items-num");
var region = document.getElementById('region-select');
var shipping =0;
region.addEventListener("change", function(){ 
    if (region.value == 2) {
        shipping= 200;
}
if (region.value == 1) {
        shipping = 240;
}
if (region.value == 3) {
        shipping = 280;
}
  
})


console.log(qtPlus);
console.log(qtMoins);
 console.log(qt);
 console.log(prixTotal);
 
for(let i=0; i<qtPlus.length;i++){
    qtPlus[i].addEventListener("click", function(){ 
        let q = parseInt(qt[i].innerHTML); 
        qt[i].innerHTML=q+1;
        let p = parseInt(prixTotal[i].innerHTML);
        console.log("region" +region);
   
        console.log(prix[i]);
        prixTotal[i].innerHTML= parseFloat(prix[i].innerHTML)*qt[i].innerHTML +shipping + 'EUR' ;
        qte.innerHTML= parseFloat(qt[i].innerHTML)   ;

        
        
        //prixP.innerHTML = parseFloat(prixP.innerHTML)+ parseFloat(prix[i].innerHTML) +" $";
        //console.log(parseFloat(prixP.innerHTML));
     })
}

for(let i=0; i<qtMoins.length;i++){
    qtMoins[i].addEventListener("click", function(){ 
        let q = parseInt(qt[i].innerHTML); 
        console.log(q);
        if(q >0){
            qt[i].innerHTML=q-1;
            
       
        let p = parseInt(prixTotal[i].innerHTML);
        prixTotal[i].innerHTML= p-parseFloat(prix[i].innerHTML) + 'EUR';
        prixP.innerHTML = parseFloat(prixP.innerHTML)- parseFloat(prix[i].innerHTML) + 'EUR'
        }
        else prixP.innerHTML=0;
        //console.log(prixP.innerHTML);
     })
}