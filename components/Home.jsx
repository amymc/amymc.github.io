import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import StartBar from './startbar';
import Trash from './trash';
import Folder from './folder';
import Project from './project';
import '../styles/home.css';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showProject: false,
      currentProject: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    console.log('id', id);
    this.setState({
      showProject: true,
      currentProject: id
    });
  }

  renderProject() {
    var currentProject = this.props.projects.filter((project) => {
      console.log('project.id', project.id, 'this.state.currentProject', this.state.currentProject);
        return project.id === this.state.currentProject;
    })[0];

    console.log('currentProject', currentProject);
    return (
      <Project {...currentProject}/>
    );
  }



  render() {
    var { projects } = this.props;

    return (
      <div className='home'>
        { projects.map((project, index) => {
          return <Folder key={index} project={project} onClick={this.handleClick}/>
        })}
        {this.state.showProject ?
          this.renderProject() :
          null
        }
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

