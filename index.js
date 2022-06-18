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


let Newforyou=[
  {url:"https://img.gkbcdn.com/p/2022-06-07/C127-RC-Helicopter-2-4G-4CH-6-Axis-Gyro-720P-Camera-with-Remote-Contro-501582-0._w280_p1_.jpg",h2:"9662.89"},
  {url:"https://img.gkbcdn.com/p/2022-05-27/xiaomi-mi-band-7-black-17e243-1653647543366._w280_p1_.jpg",h2:"4589.80"},
  {url:"https://img.gkbcdn.com/p/2022-05-27/MEROCA-WR15-WR25-Cushion-mounting-bracket-501368-0._w280_p1_.jpg",h2:"9662.89"},
  {url:"https://img.gkbcdn.com/p/2022-06-11/J2-Colorful-Flame-Diffuser-with-3D-Dynamic-Mist-502439-0._w280_p1_.jpg",h2:"9662.89"},
  {url:"https://img.gkbcdn.com/p/2018-11-22/netac-n600s-1tb-ssd-2-5-inch-solid-state-drive-blue-1571991121689._w280_p1_.jpg",h2:"11457.78"},
  {url:"https://img.gkbcdn.com/p/2022-05-23/68356b7ef7904bcd990edda141b5baa6-501236-0._w280_p1_.jpg",h2:"23456.6"},
  {url:"https://img.gkbcdn.com/p/2019-07-11/qcy-t3--bluetooth-5-0-tws-earphone-3d-stereo-1574132285489._w280_p1_.jpg",h2:"2456.23"},
  {url:"https://img.gkbcdn.com/p/2019-02-20/stmagic-spt31-512g-mini-portable-m-2-ssd-gray-1571995742585._w280_p1_.jpg",h2:"6038.70"},
  {url:"https://img.gkbcdn.com/p/2022-04-24/eleglide-m1-plus-upgraded-version-electric-bike-12-5ah-250w-black-258649-1650765309927._w280_p1_.jpg",h2:"65130.45"},
  {url:"https://img.gkbcdn.com/p/2022-04-24/eleglide-m1-upgraded-version-electric-bike-7-5ah-250w-motor-dark-blue-b23cd2-1650765670228._w280_p1_.jpg",h2:"54670.45"},
  {url:"https://img.gkbcdn.com/p/2021-10-28/36v-10-4ah-removable-battery-for-eleglide-f1-electric-bike-1635406527480._w280_p1_.jpg",h2:"14530.45"},
  {url:"https://img.gkbcdn.com/p/2021-10-28/36v-12-5ah-removable-battery-for-eleglide-m1-plus---m1-electric-bike-1635405942861._w280_p1_.jpg",h2:"11558.45"},
  {url:"https://img.gkbcdn.com/p/2020-10-14/tronsmart-element-mega-pro-60w-bluetooth-5-0-speaker-1602637495048._w280_p1_.jpg",h2:"6900.45"},
  {url:"https://img.gkbcdn.com/p/2020-01-09/Tronsmart-element-T6-plus-Upgrade-Black-895558-._w280_p1_.jpg",h2:"1670.44"},
  {url:"https://img.gkbcdn.com/p/2021-10-12/tronsmart-splash-1-led-15w-bluetooth-speaker-1634038411944._w280_p1_.jpg",h2:"4530.25"},
  {url:"https://img.gkbcdn.com/p/2020-12-09/Tronsmart-Apollo-Q10-ANC-Bluetooth-Headphones-Black-426941-0._w280_p1_.jpg",h2:"3050.15"},
  {url:"https://img.gkbcdn.com/p/2021-02-20/roborock-s7-robot-vacuum-cleaner-2500pa-powerful-suction-1613791182553._w280_p1_.jpg",h2:"65130.45"},
  {url:"https://img.gkbcdn.com/p/2022-03-14/Roborock-Q7-Max--Robot-Vacuum-Cleaner-497781-1._w280_p1_.jpg",h2:"54670.45"},
  {url:"https://img.gkbcdn.com/p/2020-05-29/roborock-s5-max-robot-vacuum-cleaner-international-version-black-1590736089662._w280_p1_.jpg",h2:"33530.45"},
  {url:"https://img.gkbcdn.com/p/2020-05-13/roborock-h6-wireless-handheld-vacuum-cleaner-space-silver-1589359148385._w280_p1_.jpg",h2:"25730.45"},
];



function AddtoCart11(){
  
  let obj={
     td1:Newforyou[0].url,
     td2:Newforyou[0].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart12(){
  
  let obj={
     td1:Newforyou[1].url,
     td2:Newforyou[1].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart13(){
  
  let obj={
     td1:Newforyou[2].url,
     td2:Newforyou[2].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart14(){
  
  let obj={
     td1:Newforyou[3].url,
     td2:Newforyou[3].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart15(){
  
  let obj={
     td1:Newforyou[4].url,
     td2:Newforyou[4].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart16(){
  
  let obj={
     td1:Newforyou[5].url,
     td2:Newforyou[5].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart17(){
  
  let obj={
     td1:Newforyou[6].url,
     td2:Newforyou[6].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart18(){
  
  let obj={
     td1:Newforyou[7].url,
     td2:Newforyou[7].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart19(){
  
  let obj={
     td1:Newforyou[8].url,
     td2:Newforyou[8].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart20(){
  
  let obj={
     td1:Newforyou[9].url,
     td2:Newforyou[9].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart21(){
  
  let obj={
     td1:Newforyou[10].url,
     td2:Newforyou[10].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart22(){
  
  let obj={
     td1:Newforyou[11].url,
     td2:Newforyou[11].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart23(){
  
  let obj={
     td1:Newforyou[12].url,
     td2:Newforyou[12].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart24(){
  
  let obj={
     td1:Newforyou[13].url,
     td2:Newforyou[13].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart25(){
  
  let obj={
     td1:Newforyou[14].url,
     td2:Newforyou[14].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart26(){
  
  let obj={
     td1:Newforyou[15].url,
     td2:Newforyou[15].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart27(){
  
  let obj={
     td1:Newforyou[16].url,
     td2:Newforyou[16].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart28(){
  
  let obj={
     td1:Newforyou[17].url,
     td2:Newforyou[17].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart29(){
  
  let obj={
     td1:Newforyou[18].url,
     td2:Newforyou[18].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

function AddtoCart30(){
  
  let obj={
     td1:Newforyou[19].url,
     td2:Newforyou[19].h2,
     td3:"1",
     td4:"Delete",
  }

  alert("Added");

  cartData.push(obj);
  localStorage.setItem("cartData",JSON.stringify(cartData));

}

