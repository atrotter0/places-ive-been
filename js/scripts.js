function Place(name, country, mainLanguage) {
  this.name = name;
  this.country = country;
  this.mainLanguage = mainLanguage;
}

var bend = new Place("Bend", "USA", "English");
var barcelona = new Place("Barcelona", "Spain", "Spanish");
var rivendell = new Place("Rivendell", "Middle Earth", "Elvish");

function displayPlace(element) {
  var placeName = element.id;
  var bendText = "Country: " + bend.country + "<br>Main Language: " + bend.mainLanguage;
  var barcelonaText = "Country: " + barcelona.country + "<br>Main Language: " + barcelona.mainLanguage;
  var rivendellText = "Country: " + rivendell.country + "<br>Main Language: " + rivendell.mainLanguage;

  if (placeName === "bend") {
    showPlaceDetails(element, bendText);
  } else if (placeName === "barcelona") {
    showPlaceDetails(element, barcelonaText);
  } else if (placeName === "rivendell") {
    showPlaceDetails(element, rivendellText);
  } else {
    alert("Error! No, not telling you why!");
  }
}

function showPlaceDetails(element, text) {
  $(element).siblings("div.details").html(text);
}

$(document).ready(function() {
  $(".btn-place").click(function() {
    displayPlace(this);
  });
});
