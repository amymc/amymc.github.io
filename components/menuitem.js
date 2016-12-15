import React from 'react';
import Menu from './menu';
import '../styles/menu.css';

class MenuItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver() {
    if (this.props.item.onMouseOver) {
      console.log('setting state');
      this.setState({hover: true});
    }
  }

  mouseOut() {
    this.setState({hover: false});
  }

  render() {
    const { item } = this.props;

    return (
      <li className='menu__item' onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={() => this.props.onClick(item.onClick)}>
        <img className='menu__item-icon' src={`../assets/os-icons/${item.image_url}`} alt={item.title}/>
        <span className='menu__item-title'> {item.title} </span>
         {this.state.hover ?
          <Menu items={item.items} type='submenu'/> :
          null
        }
      </li>
    );
  }
}

export default MenuItem;