// Create a Javascript program that produces a table of numbers from 1 to 10 and squares of them using DOM manipulation


var createPageHeading = document.createElement('h2');
var createHorizontalBar = document.createElement('hr');

// Create table elements
var createTable = document.createElement('table');
var createTableRow = document.createElement('tr');
var createThead = document.createElement('thead');
var createTbody = document.createElement('tbody');


var tableHeading = ['Numbers', 'Squares'];

var pageHeadText = document.createTextNode('Numbers and Squares');
var pageHeading = createPageHeading.append(pageHeadText);

// Create the table

for (var i = 0; i < 2; i++) {
    var createTableHeading = document.createElement('th');
    createTableHeading.innerText = tableHeading[i];
    createTableRow.appendChild(createTableHeading);
    createThead.appendChild(createTableRow);
    createTable.appendChild(createThead);

}

for (var i = 1; i <= 10; i++) {
    var createTableRow = document.createElement('tr');
    for (var j = 0; j < 2; j++) {
        var createTableData = document.createElement('td');
        j == 0 ? createTableData.innerText = i : createTableData.innerText = i*i;
        createTableRow.appendChild(createTableData);
    }
    createTableRow.appendChild(createTableData);
    createTbody.appendChild(createTableRow)
    createTable.appendChild(createTbody);
}

// Set class of table to use Bootsrap custom classes
createTable.setAttribute('class', 'table table-striped');

// Append the page heading,table and horizontal bar
document.body.append(createPageHeading);
document.body.append(createHorizontalBar);
document.body.append(createTable);





