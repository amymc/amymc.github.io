import React from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import Popup from './popup';
import Project from './project';
import WindowTitle from './windowtitle';
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
    this.renderFixedSize = this.renderFixedSize.bind(this);
    this.renderResizable = this.renderResizable.bind(this);
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

  renderFixedSize() {
    const { item, zIndex } = this.props;
    return (
      <div style={{zIndex: zIndex}} className='window window--popup'>
        <WindowTitle {...item} onClick={() => this.props.onCloseClick(item.title)} />
        <Popup {...item} onClick={() => this.props.onCloseClick(item.title)} />
      </div>
    );
  }

  renderResizable() {
    const { item, zIndex } = this.props;
    return (
      <Resizable height={this.state.height} width={this.state.width} lockAspectRatio={true} minConstraints={[500, 389]} onResize={this.onResize}>
        <div style={{zIndex: zIndex, width: this.state.width + 'px'}} className='window window--project'>
          <WindowTitle {...item} onClick={() => this.props.onCloseClick(item.title)} />
          <Project {...item} />
        </div>
      </Resizable>
    );
  }

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};

    return (
      <Draggable onMouseDown={() => this.props.onMouseDown(this.props.item.title)} bounds=".app__inner-wrapper" handle='.handle' {...dragHandlers}>
        {this.props.isProject ?
          this.renderResizable() :
          this.renderFixedSize()
        }
      </Draggable>
    )
  }
}

export default Window;
