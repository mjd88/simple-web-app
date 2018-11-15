import template from './block.html';

angular.module('simpleWebApp')
    .component('swaBlock', {
        template: template,
        controller: BlockController,
        bindings: {
            title: '@',
            id: '@',
            expanded: '<',
            collapsed: '<',
            onClick: '&'
        }
    });

function BlockController() {
    var me = this;
}