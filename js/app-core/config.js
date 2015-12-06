let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root',{
      abstract    :true,
      templateUrl :'templates/layout.tpl.html'
    })

    .state('root.about',{
      url         :'/',
      controller  :'AboutController as vm',
      templateUrl :'templates/about.tpl.html'
    })

    .state('root.hobbies',{
      url         :'/hobbies',
      controller  :'HobbiesController as vm',
      templateUrl :'templates/hobbies.tpl.html' 

    })

    .state('root.single',{
      url : '/resume',
      controller :'ResumeController',
      templateUrl : 'templates/resume.tpl.html'
    })

    .state('root.mywork',{
      url         :'/work',
      controller  :'MyWorkController as vm',
      templateUrl : 'templates/mywork.tpl.html'
    })
    .state('root.contact',{
      url         :'/contact',
      controller  :'ContactController as vm',
      templateUrl : 'templates/contact.tpl.html'
    });
  

};

config.$inject = ['$stateProvider' , '$urlRouterProvider'];

export default config;