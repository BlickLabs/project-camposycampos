function doSomething(e){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-camposycampos/index.html"!==window.location.pathname&&"/project-camposycampos/"!==window.location.pathname||(e>30?siteNavbar.classList.add("nav-scroll"):siteNavbar.classList.remove("nav-scroll"))}function showMenu(){document.querySelector("#menuContainer").style.width="100%",document.querySelector("#hamburgerMenu").style.display="flex"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="flex"}$('form[name="camposycampos-contact-form"]').validate({name:"required",email:"required",phone:"required",messages:{name:"Por favor, introduce tu Nombre.",email:"Por favor, introduce un Correo Electrónico.",phone:"Por favor, introduce tu Teléfono."},submitHandler:function(e){var o=$('form[name="camposycampos-contact-form"]').serialize();console.log(o),$.ajax({url:"http://integrations.blick.mx/camposycampos/contact/",method:"POST",data:o}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="camposycampos-contact-form"]')[0].reset())})},invalidHandler:function(e,o){var n=o.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica tu información tienes "+n+" errores.")}});var homeCoverCarousel=$(".home-cover-carousel");homeCoverCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="carousel-arrow" src="/img/icons/icon-arrow-left.png" />','<img class="carousel-arrow" src="/img/icons/icon-arrow-right.png" />'],margin:20,responsive:{0:{items:1},800:{items:1},1e3:{items:1}}}),homeCoverCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-cover-carousel-controls'></div>")});var homeServicesCarousel=$(".home-services-carousel");homeServicesCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="carousel-arrow" src="/img/icons/icon-arrow-left.png" />','<img class="carousel-arrow" src="/img/icons/icon-arrow-right.png" />'],margin:0,autoWidth:!0,responsive:{0:{items:1},800:{items:1},1e3:{items:3}}}),homeServicesCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-services-carousel-controls'></div>")}),$(function(){function e(e){e.val().length>0?e.addClass("has-value"):e.removeClass("has-value")}$(".contact-input").each(function(){e($(this))}),$(".contact-input").on("focusout",function(){e($(this))})});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".nav");doSomething(),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()});