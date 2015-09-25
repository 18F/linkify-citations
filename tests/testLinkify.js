var test = require('tape');
var linkify = require('../src/linkify-citations.js');

var testCite = {
        "type": "usc",
        "match": "5 U.S.C. 552(a)(1)(E)",
        "index": 12,
        "usc": {
            "title": "5",
            "section": "552",
            "subsections": ["a", "1", "E"],
            "id": "usc/5/552/a/1/E",
            "section_id": "usc/5/552"
        }
    }

test('test getURLfromCitation', function(t) {
    t.plan(1);
    var URL = linkify.getURLfromCitation(testCite);
    t.equal(URL, 'http://api.fdsys.gov/link?collection=uscode&title=5&year=mostrecent&section=552&type=usc');
});

test('test citationToURL', function (t){
    t.plan(1);
    var link = linkify.citationToURL(testCite);
    t.equal(link, "<a class='citation' href='http://api.fdsys.gov/link?collection=uscode&title=5&year=mostrecent&section=552&type=usc'>5 U.S.C. 552(a)(1)(E)</a>");
})