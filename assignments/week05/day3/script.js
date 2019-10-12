$("<h3/>").text("I haven't watched Sacred Games. So...").appendTo(".container");

$("<img/>").attr({src: "https://blog.worknrby.com/wp-content/uploads/2019/08/Sacred-Games-Gaitonde-is-the-boss-goals-Worknrby.png", class : "mt-2", id: "bhau_img"}).appendTo(".container");

$("<br/>").appendTo('.container');

$("<audio/>").attr({src: "https://www.retones.com/files/uploads/Sacred-Games-Theme-Opening-Main.mp3", class: "offset-md-3 my-1", controls: true, loop : true,}).appendTo(".container");

$("<video/>").attr({src: "./video_series.mp4", controls: true,poster: "main.png"}).appendTo(".container");

$("#bhau_img")[0].addEventListener('click', function() {
    if(!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
})