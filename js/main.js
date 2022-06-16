// var element = document.getElementById("about-us");
//
// element.scrollIntoView();
// element.scrollIntoView(false);
// element.scrollIntoView({block: "end"});
// element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});



let c = init("canvas"),
    w = (canvas.width = window.innerWidth),
    h = (canvas.height = window.innerHeight);
//initiation

class firefly {
    constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.s = Math.random() * 2;
        this.ang = Math.random() * 2 * Math.PI;
        this.v = this.s * this.s / 4;
    }
    move() {
        this.x += this.v * Math.cos(this.ang);
        this.y += this.v * Math.sin(this.ang);
        this.ang += Math.random() * 20 * Math.PI / 180 - 10 * Math.PI / 180;
    }
    show() {
        c.beginPath();
        c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
        c.fillStyle = "#fff";
        c.fill();
    }
}

let f = [];

function draw() {
    if (f.length < 100) {
        for (let j = 0; j < 10; j++) {
            f.push(new firefly());
        }
    }
    //animation
    for (let i = 0; i < f.length; i++) {
        f[i].move();
        f[i].show();
        if (f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h) {
            f.splice(i, 1);
        }
    }
}

let mouse = {};
let last_mouse = {};

canvas.addEventListener(
    "mousemove",
    function(e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
    },
    false
);

function init(elemid) {
    let canvas = document.getElementById(elemid),
        c = canvas.getContext("2d"),
        w = (canvas.width = window.innerWidth),
        h = (canvas.height = window.innerHeight);
    c.fillStyle = "#fff";
    c.fillRect(0, 0, w, h);
    return c;
}

window.requestAnimFrame = (function() {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback);
        }
    );
});

function loop() {
    window.requestAnimFrame(loop);
    c.clearRect(0, 0, w, h);
    draw();
}

window.addEventListener("resize", function() {
    (w = canvas.width = window.innerWidth);
    (h = canvas.height = window.innerHeight);
    loop();
});

loop();
setInterval(loop, 1000 / 60);


$(document).ready(function() {
    $('.gototop').click(function(event) {
        event.preventDefault()
        $('html,body').animate({
            scrollTop: 0
        }, 800);
    });
});

$(document).ready(function() {
    $("#toggler").click(function() {
        var elem = $("#toggler").text();
        if (elem === "Читать больше") {
            //Stuff to do when btn is in the read more state
            $("#toggler").text("Свернуть");
            $("#textt").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $("#toggler").text("Читать больше");
            $("#textt").slideUp();
        }
    });
});

$(document).ready(function() {
    $("#togglerEn").click(function() {
        var elem = $("#togglerEn").text();
        if (elem === "Read More") {
            //Stuff to do when btn is in the read more state
            $("#togglerEn").text("Read Less");
            $("#textEn").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $("#togglerEn").text("Read More");
            $("#textEn").slideUp();
        }
    });
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 100)
        $('header').addClass('header-fixed');
    else
        $('header').removeClass('header-fixed');
});

function preloaderFadeOutInit() {
    $('.preloader').fadeOut('slow');
    $('body').attr('id', '');
}
// Window load function
jQuery(window).on('load', function() {
    (function($) {
        preloaderFadeOutInit();
    })(jQuery);
});