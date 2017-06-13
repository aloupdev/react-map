var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Home = require('./Home');
var About = require('./About');
var MapPanel = require('./MapPanel');
var Nav = require('./Nav');

class Main extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/map-panel' component={MapPanel} />
            <Route path='/about' component={About} />
            <Route render = { function() {
              return <p>Not found ...</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }

};

export default Main;
