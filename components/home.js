import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as ProjectActions from '../actions';
// import { DragDropContext } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
import StartBar from './startbar';
import Trash from './trash';
import Folder from './folder';
import Menu from './menu';
import Window from './window';
import '../styles/components/home.scss';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      popup: null,
      showMenu: false,
      showPopup: false,
      startButtonActive: false
    };

    this.handlePopupClick = this.handlePopupClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.closePopup = this.closePopup.bind(this);
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
    // toggle states on button click
    this.setState({
      showMenu: !this.state.showMenu,
      startButtonActive: !this.state.startButtonActive
    });
  }

  closePopup() {
    this.setState({
      showPopup: false
    });
  }

  render() {
    const { actions, menuItems, projects } = this.props;
    const openProjects = projects.filter(project => project.isOpen === true);

    return (
      <div className='home'>
        {projects.map((project, index) => {
          return <Folder key={index} project={project} onClick={actions.openProject}/>
        })}
        <div className='home__inner-wrapper'>
          {openProjects.map((project, index) => {
            return <Window key={index} item={project} isProject={true} onClick={actions.closeProject}/>
          })}
        </div>
        {this.state.showMenu ?
          <Menu onClick={this.handlePopupClick} items={menuItems}/> :
          null
        }
        {this.state.showPopup ?
          <Window item={this.state.popup} isProject={false} onClick={this.closePopup}/> :
          null
        }
        <StartBar onClick={this.handleStartClick} active={this.state.startButtonActive} openProjects={openProjects}/>
        <Trash />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuItems: state.menuItems,
  projects: state.projects,
  sideProjects: state.sideProjects
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ProjectActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

