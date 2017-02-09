import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProjectActions from '../actions';
import StartBar from './startbar';
import Folder from './folder';
import Menu from './menu';
import Window from './window';
import '../styles/components/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWindow: null,
      showMenu: false,
      startButtonActive: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
  }

  handleMouseDown(windowTitle) {
    this.setState({
      selectedWindow: windowTitle
    });
  }

  handleStartClick() {
    // toggle states on button click
    this.setState({
      showMenu: !this.state.showMenu,
      startButtonActive: !this.state.startButtonActive
    });
  }

  render() {
    const { actions, menuItems, popups, projects } = this.props;
    const openPopups = popups.filter(popup => popup.isOpen === true);
    const openProjects = projects.filter(project => project.isOpen === true);

    return (
      <div className='app'>
        {projects.map((project, index) => {
          return <Folder key={index} project={project} onClick={actions.openProject}/>
        })}
        <div className='app__inner-wrapper'>
          {openProjects.map((project, index) => {
            const zIndex = project.title === this.state.selectedWindow ?
              10 : 1;
            return <Window key={index} item={project} zIndex={zIndex} isProject={true} onMouseDown={this.handleMouseDown} onCloseClick={actions.closeProject}/>
          })}
          {openPopups.map((popup, index) => {
             const zIndex = popup.title === this.state.selectedWindow ?
              10 : 1;
            return <Window key={index} item={popup} zIndex={zIndex} isProject={false} onMouseDown={this.handleMouseDown} onCloseClick={actions.closePopup}/>
          })}
        </div>
        {this.state.showMenu ?
          <Menu onClick={actions.openPopup} items={menuItems} onPageClick={this.handleStartClick} /> :
          null
        }
        <StartBar onClick={this.handleStartClick} active={this.state.startButtonActive} openProjects={openProjects}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuItems: state.menuItems,
  popups: state.popups,
  projects: state.projects,
  sideProjects: state.sideProjects
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ProjectActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

