// const fullpath = "M1534.53,0c847.5,0,1534.53,674.286,1534.53,1506.061S2382.028,3012.121,1534.53,3012.121,0,2337.834,0,1506.061,687.033,0,1534.53,0Z";

// const btnpath = "M169.379,0c93.545,0,169.379,73.262,169.379,163.636S262.924,327.273,169.379,327.273,0,254.01,0,163.636,75.833,0,169.379,0Z";

// const darkmode = document.querySelector('.darkmode');
// let toggle = false;



// darkmode.addEventListener('click', () => {
//   const timeline = anime.timeline({
//     duration: 750,
//     easing: "easeOutExpo",
//   });
//   timeline.add({
//     targets: ".sun",
//     d: [{
//       value:   fullpath 
//     }],
//     translateX:  "60%",
//   }).add({
//         targets: "body",
//         backgroundColor: '#000' 
//       },
//       "-=750"
//     )
// if(!toggle){
//   toggle=true
// }else{
//   toggle=false
// }
// })











let media = document.querySelector(".media")
let container = document.querySelector(".container")
let title = document.querySelector(".title")
let btn = document.querySelector(".button")

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  media.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


container.addEventListener("mouseenter", (e) => {
  media.style.transition = "none";
  btn.style.transform = "translateZ(10px)";
  title.style.transform = "translateZ(320px)";
});


container.addEventListener("mouseleave", (e) => {
  media.style.transition = "all 0.9s ease";
  media.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateZ(320px)";
});


let mouseCursor = document.querySelector(".button");
let imagesHover = document.querySelectorAll(".about-images");
let textHover = document.querySelector(".about-info-p");
let homeImageHover = document.querySelector(".img-home");
let navLinks = document.querySelectorAll(".navbar-nav li");
let titleText = document.querySelector(".title");


//mouse move detector
window.addEventListener("mousemove", mouse);

function mouse(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

var elem = document.getElementById("myVideo");

media.addEventListener("click", openFullscreen)
function openFullscreen() {

  elem.classList.add("fullScreen");

}


  //video resize


  media.addEventListener("click", openFullscreen)
  window.addEventListener("click", openFullscreen)
  function openFullscreen() {
  elem.currentTime = 80;
  elem.muted = false;
  elem.classList.toggle("fullScreen");
  titleText.classList.toggle("hidden")
  container.classList.toggle("widthfull")

  //cursor pointer
  if (mouseCursor.innerHTML === "press") {
    mouseCursor.innerHTML = "close";
    media.style.transform = "none";
    container.addEventListener("mousemove", (e) => {
      media.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
 
    
  } else {
    event.preventDefault();
    mouseCursor.innerHTML = "press";
    elem.currentTime = 2;

    container.addEventListener("mousemove", (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
      media.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      
    });

    elem.muted = true;
    
  }
}

//mouse hover circular effect
 let imageContain = document.querySelector(".image-contain")
 let imageHoverEffect = document.querySelector(".imageHoverEffect");
 let image3d = document.querySelector(".image3d");
//  let nothing = document.querySelector(".floar");
 let storke = document.querySelector(".storke");


// imageContain.addEventListener("click", circularEffect);
 
// nothing.addEventListener("mousemove", circularEffect);

//  function circularEffect(e) {

//    imageHoverEffect.classList.add("imageHoverEffect2");


 
//  }


//omar task "drag and scroll"
 (function() {
    
  function scrollHorizontally(e) { // function name
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      document.documentElement.scrollLeft -= (delta*300); // Multiplied by 300
      document.body.scrollLeft -= (delta*300); // Multiplied by 40
      
  }
  if (window.addEventListener) {
      // Versions of : IE9, Chrome, Safari, Opera
      window.addEventListener("mousewheel", scrollHorizontally, false);
      // Firefox
      window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
      // IE 6/7/8
      window.attachEvent("onmousewheel", scrollHorizontally);
  }
})();

var timer;
document.addEventListener("mousedown", function(){
   timer=setInterval(function(){
       document.querySelector(".container").style.cursor = "grabbing";
   }, 100); // the above code is executed every 100 ms
});
document.addEventListener("mouseup", function(){
  if (timer) clearInterval(timer)
  document.querySelector(".container").style.cursor = "grab";

});

//drag to scroll method 2

  var curXPos , curYPos , curDown = false;
  window.addEventListener('mousedown', function(e)
  { curDown = true;
  curYPos = e.pageY;
   curXPos = e.pageX; 
});

window.addEventListener('mouseup', function(e){ curDown = false; });

window.addEventListener('mousemove', function(e){ 
  if(curDown === true){
    window.scrollTo(document.body.scrollLeft + (curXPos - e.pageX), document.body.scrollTop + (curYPos - e.pageY));
  }
});












//  make nothing ends on page button




//  /* jQuery Pre loader
//   -----------------------------------------------*/
//   $(window).load(function(){
//     $('.preloader').fadeOut(1000); 
//     // set duration in brackets    
// });



//   /* Home Slideshow Vegas
//   -----------------------------------------------*/

//    /* Back top
//   -----------------------------------------------*/
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 200) {
//         $('.go-top').fadeIn(200);
//         } else {
//           $('.go-top').fadeOut(200);
//         }
//         });   
//         // Animate the scroll to top
//       $('.go-top').click(function(event) {
//         event.preventDefault();
//       $('html, body').animate({scrollTop: 0}, 300);
//       })


//   /* wow
//   -------------------------------*/
//   new WOW({ mobile: true }).init();

//   $(function () {
//     $(document).scroll(function () {
//       var $nav = $(".fixed-top");
//       var $navLink = $(".nav-link");
//       var $bar1 = $(".bar1");
//       var $bar2 = $(".bar2");
//       var $bar3 = $(".bar3"); 

//       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//       $navLink.toggleClass('scrolle', $(this).scrollTop() > $nav.height());
//       $bar1.toggleClass('scroll1', $(this).scrollTop() > $nav.height());
//       $bar2.toggleClass('scroll2', $(this).scrollTop() > $nav.height());
//       $bar3.toggleClass('scroll3', $(this).scrollTop() > $nav.height());
//       ;
//     });
//   });


//   function myFunction(x) {
//     x.classList.toggle("change");
//     }

// function douple(x) {
//   x.classList.toggle("up");
// }
//    $(".links ul li a").click(function () {
//      $('html , body').animate({
//        scrollTop: $('#' + $(this).data('value')).offset().top
//      }, 1000)
//    })
//    $(".contact-btn").click(function () {
//     $('html , body').animate({
//       scrollTop: $('#' + $(this).data('value')).offset().top
//     }, 1000)
//   })

// // language code

//     const langEl = document.querySelector('.langWrap');
//     const langEl1 = document.querySelector('.social-icon-up-div');
// 		const link = document.querySelectorAll('.lang');
// 		const homehEl = document.querySelector('.homeh');
//     const whohEl = document.querySelector('.whoh');
//     const whotEl = document.querySelector('.whot');
//     const whopEl = document.querySelector('.whop');
//     const whomEl = document.querySelector('.whom');
//     const navaEl = document.querySelector('.nava');
//     const navcEl = document.querySelector('.navc');
//     const navtEl = document.querySelector('.navt');
//     const navhEl = document.querySelector('.navh');
//     const teamhEl = document.querySelector('.teamh');
//     const gethEl = document.querySelector('.geth');
//     const getbEl = document.querySelector('.getb');
//     const foothEl = document.querySelector('.footh');
//     const footsEl = document.querySelector('.foots');

// 		link.forEach(el => {
// 			el.addEventListener('click', () => {
//         langEl.querySelector('.active').classList.remove('active');
//         el.classList.add('active');
//         const attr = el.getAttribute('language');
// 				homehEl.textContent = data[attr].homeh;
//         whohEl.textContent = data[attr].whoh;
//         whotEl.textContent = data[attr].whot;
//         whomEl.textContent = data[attr].whom;
//         whopEl.textContent = data[attr].whop;
//         navaEl.textContent = data[attr].nava;
//         navcEl.textContent = data[attr].navc;
//         navtEl.textContent = data[attr].navt;
//         navhEl.textContent = data[attr].navh;
//         teamhEl.textContent = data[attr].teamh;
//         gethEl.textContent = data[attr].geth;
//         getbEl.textContent = data[attr].getb;
//         foothEl.textContent = data[attr].footh;
//         footsEl.textContent = data[attr].foots;

// 			});
//     });

//     let ArbicP = `
// تعمل "شو ميديا" كبوابة لتنفيذ الإنتاج السينمائي والإنتاج التلفزيوني والإعلامي ، وتتمثل رؤية الشركة في بناء مجموعة واسعة من العملاء المحليين والدوليين. كما تهدف الشركة إلى تقديم مستوى عالي من الجودة يتناسب مع توقعات عملائنا وميزانيتهم ، وكسب رضا وثقة العملاء ، ولدينا فريق أكاديمي محترف. ومتكامل صناع الأفلام ، لتسهيل عملية الإنتاج مهما كان حجم الإنتاج
// `;
// 		var data = {
// 			  "english": 
// 			  {
// 			    "homeh": "WE ARE SHOW STUDIO",
// 			    "homep": "Website is Under Implementation  our new creative website , Will Coming Soon!",
//             "whoh": " WHO WE ARE !",
//             "whot": "  This is a showreel of some exciting previous projects our chairman took part in as an executive producer.",
//             "whom":`Show Media Production, founded in 2020 and based in Egypt is an artistic and media production implementation company, and participated in the implementation of more than 100 projects, from films, series, theater, advertising and awareness campaigns, to organizing celebrations and events.`,

//             "whop": `
// The company's vision is to build a wide range of local and international customers.
// "Show Media Production" acts as a gateway to the implementation of film production, television and media production,
//   The company also aims to provide a high level of quality commensurate with our clients  expectations and their budget,
//       and gain clients satisfaction and trust, and we have a professional academic team and integrated filmmakers, to facilitate the production process, whatever the production volume.
//             `,  
//             "navh":"Home",
//             "nava":"About",
//             "navt":"Partners",
//             "navc":"Contact Us",
//             "teamh" :"Partners",
//             "geth" : "Get in touch",
//             "getb" : "SEND MESSAGE",
//             "footh":"Show Media Production",
//             "foots":"Our Studio",
//             "footp":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus lacus nulla, eget varius justo tristique ut. Etiam a tellus magna.",

// 			  },
// 			  "arabic": 
// 			  {
// 			    "homeh":"WE ARE SHOW STUDIO",
// 			    "homep": "!الموقع تحت الانشاء , موقعنا المذهل يأتي قريبا ",
//             "whoh": "من نحن !",
//             "whot": "هذا عرض لبعض المشاريع السابقة المتميزة التي شارك فيها رئيسنا كمنتج تنفيذي ",
//             "whom": `شو ميديا برودكشن - تأسست عام 2020 ومقرها مصر - وهي  شركة تنفيذية للإنتاج الفني والإعلامي ، وشارك في تنفيذ أكثر من 100 مشروع ، من أفلام ومسلسلات وأعمال المسرح وحملات إعلانية وتوعوية ، إلى تنظيم الإحتفالات والفعاليات ذات أهمية `,
//             "whop": ArbicP,
//             "navh":"الرئيسيه",
//             "nava":"عنا",
//             "navt":"شركاؤنا",
//             "navc":"اتصل بنا",
//             "teamh" : "شركاؤنا",
//             "geth" : "ابقي علي تواصل",
//             "getb" : "أرسل",
//             "footh":"Show Media Production",
//             "foots":"الاستوديو",
//             "footp":"لموقع تحت الانشاء , موقعنا المذهل يأتي قريبا لموقع تحت الانشاء , موقعنا المذهل يأتي قريبا لموقع تحت الانشاء , موقعنا المذهل يأتي قريبا",
// 			  }

//       }




//     //   $(function() {
//     //     $('body').vegas({
//     //         slides: [
//     //           { src: './images/3_4.jpg' ,  delay:7000 , transition: 'zoomOut'},
//     //             { src: './images/tiktok2.jpg' , delay:7000, transition: 'zoomOut'},
//     //             { src: './images/ramadan.jpg' , delay:7000 ,transition: 'zoomOut' },
//     //             { src: './images/30years.jpg'   , delay:7000 ,transition: 'zoomOut'},
//     //             { src: './images/d286d378599593.5d63cfac43c29.png'  , delay:7000 , transition: 'zoomOut' },
//     //             { src: './images/badla.jpeg' , delay:7000, transition: 'zoomOut'},
//     //             { src: './images/morgan.jpg' , delay:7000 , transition: 'zoomOut' },
//     //             { src: './images/awnta.jpg' , delay:7000 , transition: 'zoomOut' },
//     //             { src: './images/KHER.jpg'  , delay:7000 , transition: 'zoomOut'},

//     //         ],
//     //         overlay: '/js/vegas/dist/overlays/05.png',
//     //         transitionDuration: 8000,
//     //         delay:5000,
//     //         animation: [ 'kenburnsLeft'],
//     //         transition: [ 'fade']

//     //     }  );
//     // } );

//     $(document).ready(function(){
//       $('.customer-logos').slick({
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1000,
//         arrows: false,
//         dots: false,
//         pauseOnHover: false,
//         responsive: [{
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 4
//           }
//         }, {
//           breakpoint: 520,
//           settings: {
//             slidesToShow: 3
//           }
//         }]
//       });
//     });

//     function sendFunAlert() {
//       // Get the snackbar DIV
//       var x = document.getElementById("snackbar");

//       // Add the "show" class to DIV
//       x.className = "show";

//       // After 3 seconds, remove the show class from DIV
//       setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
//     }
// var style = 1;
//     var textIndentPercent = 150;
// var marqueeCenteringInterval = setInterval(function() {
//     console.log(document.getElementById('my-marquee'));
//     console.log(textIndentPercent);
//     console.log(document.getElementById('my-marquee').style.textIndent);
//     document.getElementById('my-marquee').style.textIndent = -textIndentPercent + '%';
//     textIndentPercent -= 0.00005;
//     if (textIndentPercent < 0) {
//         document.getElementById('my-marquee').style.textIndent = '0px';
//         clearInterval(marqueeCenteringInterval);
//     }
// }, 100);