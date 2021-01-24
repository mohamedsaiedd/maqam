
 /* jQuery Pre loader
  -----------------------------------------------*/
  $(window).load(function(){
    $('.preloader').fadeOut(1000); 
    // set duration in brackets    
});



  /* Home Slideshow Vegas
  -----------------------------------------------*/
  
   /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })
      

  /* wow
  -------------------------------*/
  new WOW({ mobile: true }).init();

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      var $navLink = $(".nav-link");
      var $bar1 = $(".bar1");
      var $bar2 = $(".bar2");
      var $bar3 = $(".bar3"); 
      
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $navLink.toggleClass('scrolle', $(this).scrollTop() > $nav.height());
      $bar1.toggleClass('scroll1', $(this).scrollTop() > $nav.height());
      $bar2.toggleClass('scroll2', $(this).scrollTop() > $nav.height());
      $bar3.toggleClass('scroll3', $(this).scrollTop() > $nav.height());
      ;
    });
  });

 
  function myFunction(x) {
    x.classList.toggle("change");
    }

function douple(x) {
  x.classList.toggle("up");
}
   $(".links ul li a").click(function () {
     $('html , body').animate({
       scrollTop: $('#' + $(this).data('value')).offset().top
     }, 1000)
   })
   $(".contact-btn").click(function () {
    $('html , body').animate({
      scrollTop: $('#' + $(this).data('value')).offset().top
    }, 1000)
  })

// language code

    const langEl = document.querySelector('.langWrap');
    const langEl1 = document.querySelector('.social-icon-up-div');
		const link = document.querySelectorAll('.lang');
		const homehEl = document.querySelector('.homeh');
    const whohEl = document.querySelector('.whoh');
    const whotEl = document.querySelector('.whot');
    const whopEl = document.querySelector('.whop');
    const whomEl = document.querySelector('.whom');
    const navaEl = document.querySelector('.nava');
    const navcEl = document.querySelector('.navc');
    const navtEl = document.querySelector('.navt');
    const navhEl = document.querySelector('.navh');
    const teamhEl = document.querySelector('.teamh');
    const gethEl = document.querySelector('.geth');
    const getbEl = document.querySelector('.getb');
    const foothEl = document.querySelector('.footh');
    const footsEl = document.querySelector('.foots');
  
		link.forEach(el => {
			el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');
        const attr = el.getAttribute('language');
				homehEl.textContent = data[attr].homeh;
        whohEl.textContent = data[attr].whoh;
        whotEl.textContent = data[attr].whot;
        whomEl.textContent = data[attr].whom;
        whopEl.textContent = data[attr].whop;
        navaEl.textContent = data[attr].nava;
        navcEl.textContent = data[attr].navc;
        navtEl.textContent = data[attr].navt;
        navhEl.textContent = data[attr].navh;
        teamhEl.textContent = data[attr].teamh;
        gethEl.textContent = data[attr].geth;
        getbEl.textContent = data[attr].getb;
        foothEl.textContent = data[attr].footh;
        footsEl.textContent = data[attr].foots;

			});
    });
  
    let ArbicP = `
تعمل "شو ميديا" كبوابة لتنفيذ الإنتاج السينمائي والإنتاج التلفزيوني والإعلامي ، وتتمثل رؤية الشركة في بناء مجموعة واسعة من العملاء المحليين والدوليين. كما تهدف الشركة إلى تقديم مستوى عالي من الجودة يتناسب مع توقعات عملائنا وميزانيتهم ، وكسب رضا وثقة العملاء ، ولدينا فريق أكاديمي محترف. ومتكامل صناع الأفلام ، لتسهيل عملية الإنتاج مهما كان حجم الإنتاج
`;
		var data = {
			  "english": 
			  {
			    "homeh": "WE ARE SHOW STUDIO",
			    "homep": "Website is Under Implementation  our new creative website , Will Coming Soon!",
            "whoh": " WHO WE ARE !",
            "whot": "  This is a showreel of some exciting previous projects our chairman took part in as an executive producer.",
            "whom":`Show Media Production, founded in 2020 and based in Egypt is an artistic and media production implementation company, and participated in the implementation of more than 100 projects, from films, series, theater, advertising and awareness campaigns, to organizing celebrations and events.`,
            
            "whop": `
The company's vision is to build a wide range of local and international customers.
"Show Media Production" acts as a gateway to the implementation of film production, television and media production,
  The company also aims to provide a high level of quality commensurate with our clients  expectations and their budget,
      and gain clients satisfaction and trust, and we have a professional academic team and integrated filmmakers, to facilitate the production process, whatever the production volume.
            `,  
            "navh":"Home",
            "nava":"About",
            "navt":"Partners",
            "navc":"Contact Us",
            "teamh" :"Partners",
            "geth" : "Get in touch",
            "getb" : "SEND MESSAGE",
            "footh":"Show Media Production",
            "foots":"Our Studio",
            "footp":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus lacus nulla, eget varius justo tristique ut. Etiam a tellus magna.",
            
			  },
			  "arabic": 
			  {
			    "homeh":"WE ARE SHOW STUDIO",
			    "homep": "!الموقع تحت الانشاء , موقعنا المذهل يأتي قريبا ",
            "whoh": "من نحن !",
            "whot": "هذا عرض لبعض المشاريع السابقة المتميزة التي شارك فيها رئيسنا كمنتج تنفيذي ",
            "whom": `شو ميديا برودكشن - تأسست عام 2020 ومقرها مصر - وهي  شركة تنفيذية للإنتاج الفني والإعلامي ، وشارك في تنفيذ أكثر من 100 مشروع ، من أفلام ومسلسلات وأعمال المسرح وحملات إعلانية وتوعوية ، إلى تنظيم الإحتفالات والفعاليات ذات أهمية `,
            "whop": ArbicP,
            "navh":"الرئيسيه",
            "nava":"عنا",
            "navt":"شركاؤنا",
            "navc":"اتصل بنا",
            "teamh" : "شركاؤنا",
            "geth" : "ابقي علي تواصل",
            "getb" : "أرسل",
            "footh":"Show Media Production",
            "foots":"الاستوديو",
            "footp":"لموقع تحت الانشاء , موقعنا المذهل يأتي قريبا لموقع تحت الانشاء , موقعنا المذهل يأتي قريبا لموقع تحت الانشاء , موقعنا المذهل يأتي قريبا",
			  }
			
      }
     



    //   $(function() {
    //     $('body').vegas({
    //         slides: [
    //           { src: './images/3_4.jpg' ,  delay:7000 , transition: 'zoomOut'},
    //             { src: './images/tiktok2.jpg' , delay:7000, transition: 'zoomOut'},
    //             { src: './images/ramadan.jpg' , delay:7000 ,transition: 'zoomOut' },
    //             { src: './images/30years.jpg'   , delay:7000 ,transition: 'zoomOut'},
    //             { src: './images/d286d378599593.5d63cfac43c29.png'  , delay:7000 , transition: 'zoomOut' },
    //             { src: './images/badla.jpeg' , delay:7000, transition: 'zoomOut'},
    //             { src: './images/morgan.jpg' , delay:7000 , transition: 'zoomOut' },
    //             { src: './images/awnta.jpg' , delay:7000 , transition: 'zoomOut' },
    //             { src: './images/KHER.jpg'  , delay:7000 , transition: 'zoomOut'},
                
    //         ],
    //         overlay: '/js/vegas/dist/overlays/05.png',
    //         transitionDuration: 8000,
    //         delay:5000,
    //         animation: [ 'kenburnsLeft'],
    //         transition: [ 'fade']

    //     }  );
    // } );
    
    $(document).ready(function(){
      $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 520,
          settings: {
            slidesToShow: 3
          }
        }]
      });
    });

    function sendFunAlert() {
      // Get the snackbar DIV
      var x = document.getElementById("snackbar");
    
      // Add the "show" class to DIV
      x.className = "show";
    
      // After 3 seconds, remove the show class from DIV
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
var style = 1;
    var textIndentPercent = 150;
var marqueeCenteringInterval = setInterval(function() {
    console.log(document.getElementById('my-marquee'));
    console.log(textIndentPercent);
    console.log(document.getElementById('my-marquee').style.textIndent);
    document.getElementById('my-marquee').style.textIndent = -textIndentPercent + '%';
    textIndentPercent -= 0.00005;
    if (textIndentPercent < 0) {
        document.getElementById('my-marquee').style.textIndent = '0px';
        clearInterval(marqueeCenteringInterval);
    }
}, 100);
