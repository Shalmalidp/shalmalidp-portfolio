import angular from 'angular';

//Controllers
import HomeController     from './controllers/home.controller';
import ContactController  from './controllers/contact.controller';
import AboutController    from './controllers/about.controller';
//services
import PortfolioService   from './services/portfolio.service';

angular 
  .module('app.layout', ['app.core'])
  .controller('HomeController', HomeController)
  .controller('AboutController', AboutController)
  .controller('ContactController', ContactController)
  .service('PortfolioService, PortfolioService')
;