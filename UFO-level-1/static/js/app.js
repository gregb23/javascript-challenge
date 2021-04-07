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



