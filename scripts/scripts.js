var names = [
  "Alex Gibbons",
  "Ryan Turner",
  "Nick Lawlor",
  "Dante Mills",
  "Kieran Strachan",
  "George Carlin",
  "Bill Hicks",
  "Dave Chapelle",
  "Mother Mary"
];

var emails = [
  "a.gibbons@gmail.com",
  "r.turner@gmail.com",
  "smolman@gmail.com",
  "d.mills@gmail.com",
  "k.strachan@gmail.com",
  "georgecarlin@yahoo.com",
  "b.hicks@gmail.com",
  "d.chapelle@yahoo.com",
  "xXemoforlife420Xx@crackers.com"
];

for (var i = 0; i < names.length; i++) {

  var html = "<div class='contact'><p><span class='name'>Name:</span> " + names[i] + "</p>" + "<p><span class='email'>Email:</span> " + emails[i] + "</p></div>";

  document.getElementById("text").insertAdjacentHTML('beforeend', html);
}

var person = {
  firstName: "Jade",
  lastName: "Manrique",
  email: "jade.a.manrique"
};
