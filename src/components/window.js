import React from 'react';
import Draggable from 'react-draggable';
import Popup from './popup';
import Project from './project';
import CloseButton from './closebutton';
import '../styles/components/window.scss';


class Window extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      activeDrags: 0
    };

    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
  }

  onStart() {
    this.setState({activeDrags: ++this.state.activeDrags});
  }

  onStop() {
    this.setState({activeDrags: --this.state.activeDrags});
  }

  render() {
    const { item, zIndex } = this.props;
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};

    return (
      <Draggable onMouseDown={() => this.props.onMouseDown(item.title)} bounds="body" handle='.handle' {...dragHandlers}>
        <div style={{zIndex: zIndex}} className='window'>
          <div className='window__header handle'>
            <h1 className='window__title'>
              {item.title}
            </h1>
            <CloseButton onClick={() => this.props.onCloseClick(item.title)} />
          </div>
          {this.props.isProject ?
            <Project {...item} /> :
            <Popup {...item} onClick={() => this.props.onCloseClick(item.title)} />
          }
        </div>
      </Draggable>
    )
  }
}

export default Window;
