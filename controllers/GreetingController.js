portfolio.controller('GreetingCtrl', function GreetingCtrl($scope) {
  $scope.greetings = [ { text: "Hello" },
   { text: "Salutations"},
   { text: "Welcome"},
   { text: "Benvenuto"},
   { text: "Hola"},
   { text: "Hi there"},
   { text: "Greetings"},
   { text: "Nice to see you"},
   { text: "Bienvenida"} ];

   $scope.greeting = "";

  $scope.selectGreeting = function() {
    $scope.greeting = $scope.greetings[Math.floor(Math.random() * $scope.greetings.length)].text;
    return $scope.greeting;
  };
});
