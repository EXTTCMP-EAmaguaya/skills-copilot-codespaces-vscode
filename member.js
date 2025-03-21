function skillsMembers() {
  return {
    restrict: 'E',
    scope: {
      member: '='
    },
    templateUrl: 'templates/members.html'
  };
}