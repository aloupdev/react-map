var React = require('react');
var ReactDOM = require('react-dom');

import Main from './components/Main';

require('foundation-sites/dist/css/foundation.css');
require('./index.css');
require('./styles/index.scss');

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
