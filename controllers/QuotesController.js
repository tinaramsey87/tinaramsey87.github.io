portfolio.controller('QuotesCtrl', function QuotesCtrl($scope, QuotesFactory) {
  $scope.quotes = QuotesFactory.quotes;
  $scope.QuotesFactory = QuotesFactory;

  $scope.quote = "";

  $scope.selectQuote = function() {
    $scope.quote = $scope.quotes[Math.floor(Math.random() * $scope.quotes.length)].text;
    return $scope.quote;
  };
});
