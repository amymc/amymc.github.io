import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import StartBar from './startbar';
import Trash from './trash';
import Folder from './folder';
import Menu from './menu';
import Popup from './popup';
import Project from './project';
import '../styles/home.scss';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      popup: null,
      showMenu: false,
      showPopup: false,
      showProject: false,
      startButtonActive: false,
      currentProject: null
    };

    this.handleFolderClick = this.handleFolderClick.bind(this);
    this.handlePopupClick = this.handlePopupClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.closeProject = this.closeProject.bind(this);
  }

  handleFolderClick(title) {
    this.setState({
      showProject: true,
      currentProject: title
    });
  }

  handlePopupClick(e, popup) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      popup: popup,
      showPopup: true
    });
  }

  handleStartClick() {
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

  closeProject() {
    this.setState({
      showProject: false
    });
  }

  renderProject() {
    var currentProject = this.props.projects.filter((project) => {
        return project.title === this.state.currentProject;
    })[0];

    return (
      <Project {...currentProject} onClick={this.closeProject}/>
    );
  }

  render() {
    const { menuItems, projects } = this.props;

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
          <Menu onClick={this.handlePopupClick} items={menuItems}/> :
          null
        }
        {this.state.showPopup ?
          <Popup onClick={this.closePopup} {...this.state.popup} /> :
          null
        }
        <StartBar onClick={this.handleStartClick} active={this.state.startButtonActive} currentProject={this.state.currentProject}/>
        <Trash />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menuItems: state.menuItems.items,
    projects: state.projects
  };
}

export default connect(
  mapStateToProps,
  null
)(Home);

