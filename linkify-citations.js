document.addEventListener("DOMContentLoaded", function() {
  var citationToPFLink = function(citation) {
    if (citation.type == "reporter") {
      var url = "/" + citation.reporter.volume + "/" + citation.reporter.reporter + "/" + citation.reporter.page;
      return "<a class='citation' href='" + url + "'>" + citation.match + "</a>";
    };
  };
  
  //var thePage = $('div#fetched_page');
  //var doc = document.getElementById('fetched_page');
  //var thePage = doc;
  // find the citations
  var citations = Citation.find(document.documentElement.innerHTML).citations;
              
  // loop through each citation
  for (i = 0; i < citations.length; i++) {
    if (citations[i].type == "reporter") {
      // generate a link
      var link = citationToPFLink(citations[i]);
      // stick the link onto the DOM
      thePage.innerHTML = thePage.innerHTML.replace(citations[i].match, link);
    } 
  }
});
