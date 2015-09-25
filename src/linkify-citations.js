// Load minified citation.js
var Citation = require('citation');

document.addEventListener("DOMContentLoaded", function() {
  var citationToURL = function(citation) {
    // var url = "/" + citation.reporter.volume + "/" + citation.reporter.reporter + "/" + citation.reporter.page;
    var url = getURLfromCitation(citation)
    if (url) return "<a class='citation' href='" + url + "'>" + citation.match + "</a>";
    else return citation.match;
  };

  //
  var thePage = document.documentElement.cloneNode(true);
  // find the citations
  var citations = Citation.find(thePage.innerHTML).citations;
              
  // loop through each citation
  for (i = 0; i < citations.length; i++) {
    // generate a link
    var link = citationToURL(citations[i]);
    // stick the link onto the DOM
    thePage.innerHTML = thePage.innerHTML.replace(citations[i].match, link);
  }
  document.documentElement.innerHTML = thePage.innerHTML;
});

var getURLfromCitation = function (citation) {

  var url = "http://api.fdsys.gov/link?collection="

  switch (citation.type) {
    case "usc":
      return url + "uscode&title=" + citation.usc.title + "&year=mostrecent&section=" + citation.usc.section + "&type=usc"
    case "law":
      return url + "plaw&congress=" + citation.law.congress + "&lawtype=public&lawnum=" + citation.law.number
    case "cfr":
      return "http://api.fdsys.gov/link?collection=cfr&titlenum=" +
        citation.cfr.title + "&partnum=" + citation.cfr.part + "&sectionnum="
        citation.cfr.section + "&year=mostrecent"
    case "stat":
      return url + "statute&volume=" + citation.stat.volume + "&page=" + citation.stat.page
    case "fedreg":
      return url + "fr&volume=" + citation.fedreg.volume + "&page=" + citation.fedreg.page
    default:
      return false;
  }
}
