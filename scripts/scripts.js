var names = [
  "Alex Gibbons",
  "Ryan Turner",
  "Nick Lawlor",
  "Dante Mills",
  "Kieran Strachan",
  "George Carlin"
];

var emails = [
  "a.gibbons@gmail.com",
  "r.turner@gmail.com",
  "smolman@gmail.com",
  "d.mills@gmail.com",
  "k.strachan@gmail.com",
  "georgecarlin@yahoo.com"
];

for (var i = 0; i < names.length; i++) {

  var html = "<div><p>Name: " + names[i] + "</p>" + "<p>Email: " + emails[i] + "</p></div>";

  document.getElementById("text").insertAdjacentHTML('beforeend', html);
}
