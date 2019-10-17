var response;
var salaryList = [];

// Fetch the data

$.ajax({
    "type": "GET",
    "url": "data.json",
    "dataType": "json",
    "success": function (data) {
        response = data;
        renderHeading(data);
        renderTable(data);
        listOfSalary(data);

    }
});

// List of all salaries

function listOfSalary(response) {
    salaryList = [];
    for (var i = 0; i < response.users.length; i++) {
        salaryList.push(response.users[i].salary);
    }
}

// page heading

function renderHeading(response) {
    $('<h1/>').attr("class", "text-center").text(response.appName).appendTo('body');
}

// create a table

function renderTable(response) {
    var rowLength = response.headers.length;
    console.log(response.users);
    console.log(rowLength);

    $("<table/>").attr("class", "table table-striped").appendTo("body");
    $("<thead/>").attr("class", "table table-dark").appendTo('table');
    $("<tbody/>").appendTo('table');

    for (var i = 0; i < 1; i++) {

        $("<tr/>").attr("id", "headerRow").appendTo('thead');
        for (var j = 0; j < rowLength; j++) {
            $("<th/>").attr("id", response.headers[j]).text(response.headers[j]).appendTo('#headerRow');
        }
    }

    for (var i = 0; i < response.users.length; i++) {

        $("<tr/>").attr("id", "bodyRow" + i).appendTo('tbody');

        $('#bodyRow' + i).append("<td><strong>" + (i + 1) + "</strong></td>" +
            "<td>" + response.users[i].name + "</td>" +
            "<td>" + response.users[i].email + "</td>" +
            "<td>" + response.users[i].country + "</td>" +
            "<td>" + response.users[i].salary + "</td>");

        $("<td/>").attr("id", "d" + i).appendTo('#bodyRow' + i);
        $("<button/>").attr({ "id": i, "class": "btn btn-danger" }).text("Delete").appendTo('#d' + i);

    }
}

// Sort table by salary

$("body").on('click', '#Salary', function () {
    var temp;
    listOfSalary(response);
    salaryList.sort(sortSalaries);
    for (var i = 0; i < response.users.length; i++) {
        for (var j = 0; j < response.users.length; j++) {
            if (salaryList[i] === response.users[j].salary) {
                temp = response.users[i]
                response.users[i] = response.users[j];
                response.users[j] = temp;
            }
        }
    }
    $('table').remove();
    renderTable(response);
    $('table').show();
});

// Sort entries in descending order

function sortSalaries(a, b) {
    return (b - a);
}

// Delete row on which delete clicked

$(document).on('click', 'button', function () {
    var getId = event.target.id;
    response.users.splice(getId, 1);
    $('table').remove();
    renderTable(response);
});

