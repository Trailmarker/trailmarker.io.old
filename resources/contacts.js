const rot13 = s => s.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
const modul = s => s.replace(/[0-9]/g, function(c){return (9-parseInt(c)).toString();});

$('p.rot13-email').each((i,me) => {
  var orig = $(me).text();
  var rot = modul(rot13(orig));
  $(me).replaceWith('<p><a href="mailto:' + rot + '">' + rot + '</a></p>');
});

$('p.rot13-phone').each((i,pe) => {
  var orig = $(pe).text();
  var rot = modul(rot13(orig));
  $(pe).replaceWith('<p><a href="tel:' + rot + '">' + rot + '</a></p>');
});
