// from data.js
const tableData = data;

// YOUR CODE HERE!
const button = d3.select ("#filter-btn")

//select form
const form = d3.select("#form")

//select table
const tableBody = d3.select(".table-body");

//create event 
button.on("click", runFilter);
form.on("submit", runFilter);

//write function for form 

function runFilter () {
    d3.event.preventDefault(); //stops page for refreshing
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    //show requested data
    var filteredData = tableData.filter(datum => datum.datetime === inputValue);
    console.log(filteredData);

    //update table with data
    filteredData.forEach((alienData) => {
        const row = tableBody.append("tr");
        Object.entries(alienData).forEach(([key, value]) => {
            const cell = row.append("td");
            cell.text(value);
        });

    });
};

function resetFxn () {
    document.getElementById("form").reset();
};

function clearResults () {
    document.getElementById('tableContents').innerHTML='';
};



