let PortfolioService = function($state, PARSE, $http) {
  let url =PARSE.URL + 'classes/projects';

  this.getAllProjects = getAllProjects;


  function getAllProjects(){
    return $http.get(url,PARSE.CONFIG);
  }
  
  
  

};

PortfolioService.$inject = ['$state','PARSE','$http'];

export default PortfolioService;