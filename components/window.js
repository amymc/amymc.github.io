import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';
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
//  render() {
  const project = this.props;
  const dragHandlers = {onStart: this.onStart, onStop: this.onStop};

    return (
      <Draggable handle='.handle' {...dragHandlers}>
        <div className='window'>
          <div className='window__header handle'>
            <h1 className='window__title'>
              {project.title}
            </h1>
            <CloseButton onClick={this.props.onClick}/>
          </div>
          <Project {...this.props}/>
        </div>
      </Draggable>
    )
  }
}

export default Window;
