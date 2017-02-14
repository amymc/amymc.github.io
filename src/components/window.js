import React from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import Popup from './popup';
import Project from './project';
import CloseButton from './closebutton';
import '../styles/components/window.scss';

class Window extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      activeDrags: 0,
      width: 540,
      height: 420
    };

    this.onResize = this.onResize.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
  }

  onResize(event, {size}){
    this.setState({width: size.width, height: size.height});
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
      <Draggable onMouseDown={() => this.props.onMouseDown(item.title)} bounds=".app__inner-wrapper" handle='.handle' {...dragHandlers}>
        <Resizable height={this.state.height} width={this.state.width} lockAspectRatio={true} onResize={this.onResize}>

          <div style={{zIndex: zIndex, width: this.state.width + 'px', height: this.state.height + 'px'}} className={'window' + (this.props.isProject ? ' window--project' : ' window--popup')}>
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
        </Resizable>
      </Draggable>
    )
  }
}

export default Window;
