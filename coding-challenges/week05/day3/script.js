var booksData;
var result = [];
var numberOfBooks = 0;

$('document').ready(function () {

    // Load the books data
    $.ajax({
        "type": "GET",
        "url": "https://raw.githubusercontent.com/attainu/attainu-eagle/master/coding-challenges/week-5/day-3/books.json",
        "dataType": "json",
        "success": function (response) {
            booksData = response;
        }

    });

    // Event on button click 

    $("button").click('click', filterList);

    // Function to filter results

    function filterList() {
        $('table').remove();
        $('h2').remove();
        result = [];
        numberOfBooks = 0;
        var inputLanguage = $("input").val();

        // Check for no input or Check for language input
        if (inputLanguage === "") {
            for (var i = 0; i < booksData.length; i++) {
                delete booksData[i].imageLink;
            }
            result = booksData;
        } else {
            for (var i = 0; i < booksData.length; i++) {
                delete booksData[i].imageLink;
                if (inputLanguage === booksData[i].language) {
                    numberOfBooks++;
                    result.push(booksData[i]);
                }
            }

            // If no books found

            if (numberOfBooks === 0) {
                $("<h2>").addClass("display-5 text-center alert alert-danger").text("No books found for this language!").appendTo("#listOfBooks");
            }
        }

        // Headers for columns and arrange to match output
        var headerText = Object.keys(booksData[0]);
        var temp = headerText.splice(5, 1);
        var firstElem = temp.toString();
        headerText.unshift(firstElem);


        var headerCount = Object.keys(booksData[0]).length;

        // Create the table

        $("<table/>").attr({ "class": "table table-striped px-5" }).appendTo("body");
        $("<thead/>").appendTo(".table");
        $("<tbody/>").appendTo(".table");
        $("<tr/>").attr("id", "header-row").appendTo("thead");

        // Add th to thead
        for (var i = 0; i < headerCount; i++) {
            $("<th/>").addClass('text-capitalize').text((headerText)[i]).appendTo("#header-row");
        }

        // Add td to tbody after rearranging the data as per output format

        for (var i = 0; i < result.length; i++) {
            $("<tr/>").attr("id", i).appendTo("tbody");
            for (var j = 0; j < headerCount; j++) {
                console.log(i);
                var tableData = Object.values(result[i]);
                var temp = tableData.splice(5, 1);
                var firstTableData = temp.toString();
                tableData.unshift(firstTableData);
                $("<td/>").attr({ "style": "width: 8.33%" }).text(tableData[j]).appendTo("#" + i);
            }
        }
    }
});




