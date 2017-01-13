import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';
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
    const { item } = this.props;
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};

    return (
      <Draggable handle='.handle' {...dragHandlers}>
        <div className='window'>
          <div className='window__header handle'>
            <h1 className='window__title'>
              {item.title}
            </h1>
            <CloseButton onClick={() => this.props.onClick(item.title)} />
          </div>
          {this.props.isProject ?
            <Project {...item} /> :
            <Popup {...item} onClick={this.props.onClick} />
          }
        </div>
      </Draggable>
    )
  }
}

export default Window;
