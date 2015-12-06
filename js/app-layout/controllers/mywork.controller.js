let MyWorkController = function(PortfolioService) {
  
  let vm = this;
  vm.projects =[];

  activate();

  function activate(){
    PortfolioService.getAllProjects().then((res)=>{
      vm.projects = res.data.results;
    });
  }

};

MyWorkController.$inject = ['PortfolioService'];

export default MyWorkController;