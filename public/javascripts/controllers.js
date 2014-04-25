// Managing the poll list
function BibliothekListCtrl($scope) {
  $scope.polls = [];
}
// Voting / viewing poll results
function BibliothekItemCtrl($scope, $routeParams) {
  $scope.poll = {};
  $scope.vote = function() {};
}
// Creating a new poll
function BibliothekNewCtrl($scope) {
  $scope.poll = {
    question: '',
    choices: [{ text: '' }, { text: '' }, { text: '' }]
  };
  $scope.addChoice = function() {
    $scope.poll.choices.push({ text: '' });
  };
  $scope.createPoll = function() {};
}