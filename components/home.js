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
  }

  handleFolderClick(id) {
    console.log('id', id);
    this.setState({
      showProject: true,
      currentProject: id
    });
  }

  handlePopupClick(popup) {
    console.log('clicked run!', popup);
    this.setState({
      popup: popup,
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
        <StartBar onClick={this.handleStartClick} active={this.state.startButtonActive}/>
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

