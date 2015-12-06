import angular from 'angular';

//Controllers
import MyWorkController     from './controllers/mywork.controller';
import ContactController  from './controllers/contact.controller';
import AboutController    from './controllers/about.controller';
import HobbiesController from './controllers/hobbies.controller';
import SingleController from './controllers/single.controller';

//services
import PortfolioService   from './services/portfolio.service';

angular 
  .module('app.layout', ['app.core'])
  .controller('MyWorkController', MyWorkController)
  .controller('AboutController', AboutController)
  .controller('ContactController', ContactController)
  .controller('HobbiesController', HobbiesController)
  .controller('SingleController',SingleController)
  .service('PortfolioService', PortfolioService)
;