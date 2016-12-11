import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import StartBar from './startbar';
import Trash from './trash';
import Folder from './folder';
import '../styles/home.css';

class Home extends React.Component {
  // const reactLink = 'https://github.com/facebook/react';
  // const reactRouterLink = 'https://github.com/reactjs/react-router';
  // const ghPagesLink = 'https://pages.github.com/';
  // const repoReadmeLink = 'https://github.com/rafrex/spa-github-pages#readme';

  render() {
    var { projects } = this.props;

    return (
      <div className='home'>
       TEST
        <StartBar />
        <Trash />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

export default connect(
  mapStateToProps,
  null
)(Home);

