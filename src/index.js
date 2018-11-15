import './styles/app.scss';
import './styles/navigation.scss';
import './styles/sidebar.scss';
import './styles/block.scss';
import './styles/content.scss';
import './styles/sidebar-toggle.scss';

import angular from 'angular';

angular.module('simpleWebApp', []);

// Kept these as require and not import so that they are not 
// hoisted and are run after my simpleWebApp module creation above.
require('./components/layout.component');
require('./components/navigation.component');
require('./components/sidebar.component');
require('./components/block.component');
require('./components/content.component');
require('./components/sidebar-toggle.component');