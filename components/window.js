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
      activeDrags: 0,
      zIndex: 1
    };

    this.onClick = this.onClick.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
  }

  onClick() {
   // this.setState({zIndex: ++this.state.zIndex});
  }

  onStart() {
    this.setState({activeDrags: ++this.state.activeDrags, zIndex: ++this.state.zIndex});
  }

  onStop() {
    this.setState({activeDrags: --this.state.activeDrags});
  }

  render() {
    const { item } = this.props;
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};

    return (
      <Draggable bounds="body" handle='.handle' {...dragHandlers}>
        <div className='window' onClick={this.onClick}>
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
