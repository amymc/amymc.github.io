import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import StartBar from './startbar';
import Trash from './trash';
import Folder from './folder';
import Menu from './menu';
import Popup from './popup';
import Project from './project';
import '../styles/home.css';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      showPopup: false,
      showProject: false,
      startButtonActive: false,
      currentProject: null
    };

    this.handleFolderClick = this.handleFolderClick.bind(this);
    this.handleRunClick = this.handleRunClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  handleFolderClick(id) {
    console.log('id', id);
    this.setState({
      showProject: true,
      currentProject: id
    });
  }

  handleRunClick() {
    console.log('clicked run!', Menu);
    this.setState({
      showPopup: true
    });
  }

  handleStartClick() {
    console.log('clicked!', Menu);
    this.setState({
      showMenu: true,
      startButtonActive: true
    });
  }

  closePopup() {
    this.setState({
      showPopup: false
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
          return <Folder key={index} project={project} onClick={this.handleFolderClick}/>
        })}
        {this.state.showProject ?
          this.renderProject() :
          null
        }
        {this.state.showMenu ?
          <Menu onClick={this.handleRunClick}/> :
          null
        }
        {this.state.showPopup ?
          <Popup onClick={this.closePopup}/> :
          null
        }
        <StartBar onClick={this.handleStartClick} active={this.state.startButtonActive}/>
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

