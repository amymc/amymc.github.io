import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ProjectActions from '../actions';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

function App({ children, routes }) {
  function generateMapMenu() {
    let path = '';

    function nextPath(route) {
      path += (
        (path.slice(-1) === '/' ? '' : '/') +
        (route.path === '/' ? '' : route.path)
      );
      return path;
    }

    return (
      routes.filter(route => route.mapMenuTitle)
        .map((route, index, array) => (
          <span key={index}>
            <Link to={nextPath(route)}>{route.mapMenuTitle}</Link>
            {(index + 1) < array.length && ' / '}
          </span>
        ))
    );
  }


  return (
    <div>
      <nav>
        {generateMapMenu()}
      </nav>
      {children}
    </div>
  );
}

App.propTypes = propTypes;

export default App;

// const mapStateToProps = state => ({
//   menuItems: state.menuItems.items,
//   openProjects: state.openProjects,
//   projects: state.projects
// });

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(ProjectActions, dispatch)
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

