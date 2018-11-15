import template from './content.html';

angular.module('simpleWebApp')
    .component('swaContent', {
        template: template,
        controller: ContentController,
        bindings: {
            sidebarCollapsed: '<',
            onClick: '&'
        }
    });

function ContentController() {
    var me = this;
    me.blockClicked = blockClicked;
    me.blocks =
        [{ title: 'block 1', id: 'block1', expanded: false, collapsed: false },
        { title: 'block 2', id: 'block2', expanded: false, collapsed: false },
        { title: 'block 3', id: 'block3', expanded: false, collapsed: false },
        { title: 'block 4', id: 'block4', expanded: false, collapsed: false }];

    function blockClicked(block) {
        if (block.expanded) {
            me.blocks.forEach(function (x) {
                x.expanded = false;
                x.collapsed = false;
            });
        }
        else {
            me.blocks.forEach(function (x) {
                if (x === block) {
                    x.expanded = true;
                }
                else {
                    x.collapsed = true;
                }
            });
        }
    }
}