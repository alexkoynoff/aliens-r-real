// from data.js
var tableData = data;
//console.log(data);

/////*** ADD ALL RECORDS FROM DATA.JS TO TABLE IN HTML ***/////
var tbody = d3.select("tbody")

var table = d3.select("table");


//  Use d3 to update each cell's text with values from data
data.forEach(function(aliensInfo) {
  //console.log(aliensInfo);
  var row = tbody.append("tr");
  Object.entries(aliensInfo).forEach(function([key, value]) {
    //console.log(key, value);
    // Append a cell to the row for each value in aliensInfo
    var cell = row.append("td");
    cell.text(value);
  });
});

/////*** FILTER BY DATES SECTION ***/////


// Select the submit button
var submit = d3.select("#filter-btn");
submit.on("click", function() {
  
  
  // Prevent page from refreshing
  d3.event.preventDefault();

 
  // Set user input as variable
  var inputDate = d3.select("#datetime");
  var inputValue = inputDate.property("value");
  console.log(inputValue);

// Filter Data variable
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  //console.log(filteredData);

  //Clears the previously posted table before it loops through the inputted date
  tbody.text("")

  // Loop through the filtered date from user input
  filteredData.forEach(function(datefilter) {
    console.log(datefilter);
    var dateselection = tbody.append("tr");
    Object.entries(datefilter).forEach(function([key, value]) {
        var item = dateselection.append("td");
        item.text(value);
    });
  });
});