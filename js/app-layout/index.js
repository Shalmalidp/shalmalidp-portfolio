import angular from 'angular';

//Controllers
import MyWorkController     from './controllers/mywork.controller';
import ContactController  from './controllers/contact.controller';
import AboutController    from './controllers/about.controller';
import HobbiesController from './controllers/hobbies.controller';
import ResumeController from './controllers/resume.controller';

//services
import PortfolioService   from './services/portfolio.service';

angular 
  .module('app.layout', ['app.core'])
  .controller('MyWorkController', MyWorkController)
  .controller('AboutController', AboutController)
  .controller('ContactController', ContactController)
  .controller('HobbiesController', HobbiesController)
  .controller('ResumeController',ResumeController)
  .service('PortfolioService', PortfolioService)
;