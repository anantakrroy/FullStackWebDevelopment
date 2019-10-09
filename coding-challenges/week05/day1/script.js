$('document').ready(function () {
    $.get("https://dog.ceo/api/breeds/image/random", {}, function (response) {
        $("<img/>").attr({ "src": response['message'], "class": "rounded" }).appendTo(".image-section");
    });

    // On button click
    $("button").on('click', function () {
        $("img").remove();
        $.get("https://dog.ceo/api/breeds/image/random", {}, function (response) {
            $("<img/>").attr({ "src": response['message'], "class": "rounded" }).appendTo(".image-section");
        });
    });
})



