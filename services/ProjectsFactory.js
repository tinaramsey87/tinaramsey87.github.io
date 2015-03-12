portfolio.factory("ProjectsFactory", function ProjectsFactory() {
  var factory = {};
  factory.projects = [
    { title: "Potty Break", link: "http://tinaramsey87.github.io/potty_break_js", image: "./img/poop.jpg" },
    { title: "Animal Shelter", link: "http://tinaramsey87.github.io/animal_shelter_js", image: "./img/cat.jpg"},
    { title: "Concert Tracker", link: "https://aqueous-woodland-6951.herokuapp.com", image: "./img/concert.jpg"}
  ];

  return factory;
});
