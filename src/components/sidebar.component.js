import template from './sidebar.html';

angular.module('simpleWebApp')
    .component('swaSidebar', {
        template: template,
        controller: SidebarController,
        bindings: {
            sidebarCollapsed: '<'
        }
    });

function SidebarController() {
    var me = this;
    me.title = 'Sidebar';
}