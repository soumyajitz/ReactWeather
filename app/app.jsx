// babeljs.io/repl/
var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');
//or we can also write var Route = require('react-router').Route;

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    	<Route path="About" component={About}/>
    	<Route path="Examples" component={Examples}/>
    	<IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
