import template from './layout.html';

angular.module('simpleWebApp')
    .component('swaLayout', {
        template: template,
        controller: LayoutController
    });

function LayoutController() {
    var me = this;
    me.sidebarCollapsed = false;
    me.toggleSidebar = toggleSidebar;

    function toggleSidebar() {
        me.sidebarCollapsed = !me.sidebarCollapsed;
    }
}