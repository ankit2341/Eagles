var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 1000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 1000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 1000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 1000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 1000);
}


let dealofdaydata=[
  { imgurl:"https://img.gkbcdn.com/p/2019-08-27/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994588089._w280_p1_.jpg",
    price:"₹2656.58",originalprice:"₹3381.32"},

    { imgurl:"https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-mega-bluetooth-speaker-black-1571991584812._w280_p1_.jpg",
    price:"₹3542.37",originalprice:"₹6781.32"},

    { imgurl:"https://img.gkbcdn.com/p/2021-11-29/razer-deathadder-essential-optical-gaming-mouse-black-aa9d23-1638169302886._w280_p1_.jpg",
    price:"₹2415.00",originalprice:"₹3461.32"},

    { imgurl:"https://img.gkbcdn.com/p/2020-04-22/sabbat-e12-bluetooth-5-0-tws-earphone-gunmetal-1587519936946._w280_p1_.jpg",
    price:"₹4025.53",originalprice:"₹6781.32"},

    { imgurl:"https://img.gkbcdn.com/p/2021-07-20/e8d982f4f76e4c109aff2227fedaaa18-461408-1._w280_p1_.jpg",
    price:"₹84552.33",originalprice:"₹110320.91"},

    { imgurl:"https://img.gkbcdn.com/p/2022-04-16/tronsmart-trip-10w-portable-bluetooth-5-3-speaker-e792fc-1650097262177._w280_p1_.jpg",
    price:"₹1609.73",originalprice:"₹2012.36"},

    { imgurl:"https://img.gkbcdn.com/p/2019-03-18/tronsmart-element-t6-plus-bluetooth-speaker-black-1574132869322._w280_p1_.jpg",
    price:"₹4830.80",originalprice:"₹5432.36"},
    
    { imgurl:"https://img.gkbcdn.com/p/2021-12-09/3-7V-108-Lamp-Beads-Solar-Wall-Lamp-480326-0._w280_p1_.jpg",
    price:"₹1529.73",originalprice:"₹2412.36"},

];

let imgArr=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5vKjFaqeJdlCVi-t-fPyVHiRhI01cqLa4Q&usqp=CAU","https://img.gkbcdn.com/bn/2205/1500x260-628f67db2b40c91f8ca376f8._p1_.jpg","https://img.gkbcdn.com/bn/2205/1500x2603-628f67f02b40c91f8ca376fa._p1_.jpg"];



function confirm1(){
  if(window.confirm("please check your mail")){
      alert("Feature coming soon !!!");
  }
}

function pagechange(){
  let select=document.querySelector("#top #topsecond #topinput2 #topinput1");

  if(select.value=="Local Warehouse"){
    window.open("index.html","popup");
  }
  else if(select.value=="Sports and outdoors"){
    window.open("index.html","popup");
  }
  else if(select.value=="Smart home and Garden"){
    window.open("index.html","popup");
  }
}

function pagechange2(){
  let select=document.querySelector("#top #topthird #categories");

  if(select.value=="Local Warehouse"){
    window.open("index.html","popup");
  }
  else if(select.value=="Sports and outdoors"){
    window.open("index.html","popup");
  }
  else if(select.value=="Smart home and Garden"){
    window.open("index.html","popup");
  }
}



// --------------------------------------------------onscrolling navbar----------------------------------------------------------


window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 790 || document.documentElement.scrollTop > 790) {
    document.getElementById("topsecond2").style.top="0px";
    document.getElementById("navbar").style.top = "250px";
  } else {
    document.getElementById("topsecond2").style.top="-130px";
    document.getElementById("navbar").style.top= "-400px";
  }
}




// --------------------------------------------------onscrolling navbar----------------------------------------------------------


// ------------------------------------------------add to cart----------------------------------------------


let productData=[{name:"BLUETOOTH AV5.0 4MAH",url:"https://img.gkbcdn.com/p/2019-08-27/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994588089._w280_p1_.jpg",
h2:"2656.58"},
{name:"BLUETOOTH QCY T3 Bluetooth TWS Earphones",url:"https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-mega-bluetooth-speaker-black-1571991584812._w280_p1_.jpg",
h2:"3546.58"},
{name:"BLUETOOTH AV5.0 Mouse",url:"https://img.gkbcdn.com/p/2021-11-29/razer-deathadder-essential-optical-gaming-mouse-black-aa9d23-1638169302886._w280_p1_.jpg",
h2:"2476.58"},
{name:"BLUETOOTH QCY T4 Bluetooth TWS Earphones",url:"https://img.gkbcdn.com/p/2020-04-22/sabbat-e12-bluetooth-5-0-tws-earphone-gunmetal-1587519936946._w280_p1_.jpg",
h2:"4546.58"},
{name:"PlayStation 5.0 avH 6.0",url:"https://img.gkbcdn.com/p/2021-07-20/e8d982f4f76e4c109aff2227fedaaa18-461408-1._w280_p1_.jpg",
h2:"84000.58"},
{name:"Bluetooth speaker 5.0 avH 6.0",url:"https://img.gkbcdn.com/p/2022-04-16/tronsmart-trip-10w-portable-bluetooth-5-3-speaker-e792fc-1650097262177._w280_p1_.jpg",
h2:"1609.58"},
{name:"BLUETOOTH Speaker 4.0",url:"https://img.gkbcdn.com/p/2019-03-18/tronsmart-element-t6-plus-bluetooth-speaker-black-1574132869322._w280_p1_.jpg",
h2:"4876.58"},
{name:"BLUETOOTH setup 3.0",url:"https://img.gkbcdn.com/p/2021-12-09/3-7V-108-Lamp-Beads-Solar-Wall-Lamp-480326-0._w280_p1_.jpg",
h2:"1526.58"},
];


let cartData=JSON.parse(localStorage.getItem("cartData"))||[];

function AddtoCart1(){
   console.log(event.target.parentNode.innerText);
   
   let obj={
      td1:productData[0].url,
      td2:productData[0].h2,
      td3:"1",
      td4:"Delete",
   }

   alert("Added");

   cartData.push(obj);
   localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart2(){
  console.log(event.target.parentNode.innerText);
  
  let obj={
     td1:productData[1].url,
     td2:productData[1].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart3(){
  console.log(event.target.parentNode.innerText);
  
  let obj={
     td1:productData[2].url,
     td2:productData[2].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart4(){
  console.log(event.target.parentNode.innerText);
  
  let obj={
     td1:productData[3].url,
     td2:productData[3].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart5(){
  console.log(event.target.parentNode.innerText);
  
  let obj={
     td1:productData[4].url,
     td2:productData[4].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart6(){
  console.log(event.target.parentNode.innerText);
  
  let obj={
     td1:productData[5].url,
     td2:productData[5].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart7(){
  console.log(event.target.parentNode.innerText);
  
  let obj={
     td1:productData[6].url,
     td2:productData[6].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart8(){
  console.log(event.target.parentNode.innerText);
  
  let obj={
     td1:productData[7].url,
     td2:productData[7].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

