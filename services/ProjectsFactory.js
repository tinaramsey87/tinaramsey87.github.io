portfolio.factory("ProjectsFactory", function ProjectsFactory() {
  var factory = {};
  factory.projects = [
    { title: "Potty Break", info: "Potty Break is a text-based game in which the player must find a bathroom in a strange office building or risk unpleasant consequences.", tech: "AngularJS", link: "http://tinaramsey87.github.io/potty_break_js", image: "./img/toilet.jpg", id: 1 },
    { title: "Animal Shelter", info: "A web app where people can 'adopt' and 'abandon' pets, view adoptable pets and search by pet name or type.", tech: "AngularJS", link: "http://tinaramsey87.github.io/animal_shelter_js", image: "./img/cat.jpg", id: 2 },
    { title: "Concert Tracker", info: "Concert tracker lets users add the names of bands and concert venues and keep track of which bands have played which venues.", tech: "Ruby/Sinatra", link: "https://aqueous-woodland-6951.herokuapp.com", image: "./img/concert.jpg", id: 3 },
    { title: "Undead Journal", info: "A blogging app that lets users sign in and create posts, as well as comment on posts.", tech: "Ruby on Rails", link: "https://quiet-lake-9545.herokuapp.com", image: "./img/journal.jpg", id: 4 }
  ];

  return factory;
});
