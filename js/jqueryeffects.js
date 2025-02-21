$(document).ready(function () {
    $("a[href^='#']").on("click", function (event) {
        event.preventDefault();

        let targetId = this.getAttribute("href").substring(1); // Quita el "#"

        // Evitar error si targetId está vacío (href="#")
        if (targetId.trim() === "") {
            return;
        }

        let target = $("#" + targetId);

        if (target.length) {
            $("html, body").animate(
                {
                    scrollTop: target.offset().top
                },
                600 // Duración de la animación
            );
        }
    });

    // Cierra el menú lateral (sidebar)
    $("#menu-close").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Abre el menú lateral (sidebar)
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
});

/////////////////////////ARRIBA/////////////////////////////////////////////
$(document).ready(function(){ irArriba(); }); //Hacia arriba


function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
}

