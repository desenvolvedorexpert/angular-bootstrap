'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import angulartics from 'angulartics';
import angularticsGoogle from 'angulartics-google-analytics';
import 'font-awesome-loader';
import 'angular-scroll';

angular.module('app', [
    uiRouter,
    angulartics,
    angularticsGoogle,
    'duScroll',
    Common.name,
    Components.name
  ])
  .value('duScrollDuration', 1250)
  .value('duScrollOffset', 50)
  .value('duScrollEasing', function (t) { return t<0.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t; }) // https://gist.github.com/gre/1650294
  .config(($locationProvider) => {
    'ngInject';
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

.component('app', AppComponent);
