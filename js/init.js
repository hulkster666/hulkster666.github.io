jQuery(function ($) {
  $("#rss-tagesschau").rss("https://www.tagesschau.de/xml/rss2_https/", {
    limit: 7
  })
})

jQuery(function ($) {
  $("#rss-taz").rss("https://taz.de/!s=&ExportStatus=Intern&SuchRahmen=Online;rss/", {
    limit: 7
  })
})

jQuery(function ($) {
  $("#rss-mopo").rss("http://www.ndr.de/nachrichten/hamburg/index.xml", {
    limit: 7
  })
})
