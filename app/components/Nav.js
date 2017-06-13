var React = require('react');
var NavLink = require('react-router-dom').NavLink;

class Nav extends React.Component {
  render () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">React Map</li>
            <li>
              <NavLink exact activeClassName='active' to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/map-panel'>
                Map Panel
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/about'>
                About
              </NavLink>
            </li>

          </ul>
        </div>
        <div className="top-bar-right">

        </div>
      </div>
    )
  };
};

module.exports = Nav;

// return (
//   <ul className='nav'>
//     <li>
//       <NavLink exact activeClassName='active' to='/'>
//         Home
//       </NavLink>
//     </li>
//     <li>
//       <NavLink activeClassName='active' to='/map-panel'>
//         Map Panel
//       </NavLink>
//     </li>
//     <li>
//       <NavLink activeClassName='active' to='/about'>
//         About
//       </NavLink>
//     </li>
//
//   </ul>
// )
