import template from './navigation.html';

angular.module('simpleWebApp')
    .component('swaNavigation', {
        template: template,
        controller: NavigationController
    });

function NavigationController() {
    var me = this;
    me.title = 'Navigation';
}