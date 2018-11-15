import template from './sidebar-toggle.html';

angular.module('simpleWebApp')
    .component('swaSidebarToggle', {
        template: template,
        controller: SidebarToggleController,
        bindings: {
            sidebarCollapsed: '<',
            onClick: '&'
        }
    });

function SidebarToggleController() {
    var me = this;
}