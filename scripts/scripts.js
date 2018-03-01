var names = [
  "Barack Obama",
  "Bob Hills",
  "Macy Collins",
  "Donald Trump",
  "Colonel Sanders",
  "George Carlin",
  "Bill Hicks",
  "Dave Chapelle",
  "Mother Mary"
];

var emails = [
  "phatcock420@whitehouse.gov",
  "b.hills@yahoo.com",
  "macyiscool69@gmail.com",
  "smolsadpepenbols@gayboyclub.org",
  "chickenboy@hung.com",
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
