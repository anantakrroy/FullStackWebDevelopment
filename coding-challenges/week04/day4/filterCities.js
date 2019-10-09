$.ajax({
    "type": "GET",
    "url": "https://raw.githubusercontent.com/attainu/attainu-eagle/master/coding-challenges/week-4/day-4/cities.json",
    "success": function (response) {
        var cityObj = JSON.parse(response);
        console.log()
        $("#submit").on('click', function () {
            var beginsWith = $("#firstChar")[0].value.toUpperCase();
            $(".cities-row").html("");
            for (let i = 0; i < cityObj.length; i++) {

                if (beginsWith === "") {
                    $("<div/>").attr("class","alert alert-danger").text("Enter a non empty first letter").appendTo(".cities-row");
                    break;
                }
                else if (cityObj[i].name.startsWith(beginsWith)) {
                    $("<li/>").text(cityObj[i].name).appendTo(".cities-row");
                } 
            }
        })
    },
});

