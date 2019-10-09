// ## Improvise the [Currency Exchange App](https://github.com/attainu/attainu-eagle/tree/master/live-coding/currency-exchange-app)

// 1. Create a *json* file and shift all the currency codes to to it (*select* tags should be empty in index.html file)
// 2. Load the currency codes on app load (document ready) and bind (option tags) it to both `select` tags
// 3. Everytime the dropdown value changes, check if the `#result` container is visible -- if yes hide it
// 4. Convert the simple dropdown to *bootstrap* dropdown

$(document).ready(function () {
    // Write your app logic below this line

    // CODE ADDED FOR ASSIGNMENT
    // Get the currency codes from file and bind to dropdowns
    var firstDropDown = $(".currency-one");
    var secondDropDown = $(".currency-two");

    $.ajax({
        "method": "GET",
        "url": "https://api.exchangeratesapi.io/latest",
        "success": function (response) {
            for (currency in response.rates) {
                $("<option/>").text(currency).appendTo(firstDropDown);
                $("<option/>").clone().text(currency).appendTo(secondDropDown);
            }
        }
    })

    // CODE ADDED FOR ASSIGNMENT
    // Hide result on currency change in either dropdown
    firstDropDown.change(function () {
        if ($('#result [display = block]')) {
            $("#result").hide();
        }
    })

    secondDropDown.change(function () {
        if ($('#result [display = block]')) {
            $("#result").hide();
        }
    })


    // Pre filled code
    $('#convert-currency-btn').on('click', function () {
        // Get currency values from the dropdowns
        var currencyOne = $(".currency-one").val();
        var currencyTwo = $(".currency-two").val();

        // Validate if both the currencies are same
        // If they are same, throw an error
        if (currencyOne === currencyTwo) {
            alert("Please choose two different currencies!");
            return;
        }

        // Bind currency symbols in the result container right away
        $('#cr-one-symbol').text(currencyOne);
        $('#cr-two-symbol').text(currencyTwo);

        // Call ExhchangeRatesAPI server and get the currency conversion
        // for selected currencies
        $.get("https://api.exchangeratesapi.io/latest", {
            base: currencyOne,
            symbols: currencyTwo
        }, function (data) {
            // Limit the decimal value to be of only 2 integers long
            var convertedValue = data.rates[currencyTwo].toFixed(2);

            // Bind the currency count to the respective element
            $('#cr-two-count').text(convertedValue);

            // Finally, show the result (Result elem is hidden by default)
            $('#result').fadeIn(400);
        });
    });
});