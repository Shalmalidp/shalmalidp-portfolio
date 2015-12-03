import angular from 'angular';
import 'angular-ui-router';
import $ from 'jquery';

//IMPORTING OUR SUB-MODULES
import './app-core/index';
import './app-layout/index';


angular
  .module('app',['app.core','app.layout','ui.router'])
  ;
