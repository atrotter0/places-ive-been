function Place(name, country, mainLanguage) {
  this.name = name;
  this.country = country;
  this.mainLanguage = mainLanguage;
}

var bend = new Place("Bend", "USA", "English");
var barcelona = new Place("Barcelona", "Spain", "Spanish");
var rivendell = new Place("Rivendell", "Middle Earth", "Elvish");

$(document).ready(function() {
  console.log("loaded");
});
