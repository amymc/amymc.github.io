import React from 'react';
import Menu from './menu';
import '../styles/menu.css';

class MenuItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };

    this.closeCallback = null;
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  componentWillUnmount() {
    this.closeCallback && clearTimeout(this.closeCallback);
  }

  mouseOver() {
    if(this.closeCallback) {
      clearTimeout(this.closeCallback);
      this.closeCallback = null;
    }
    if (this.props.item.onMouseOver) {
      this.setState({hover: true});
    }
  }

  mouseOut() {
    this.closeCallback = setTimeout(() => {
      this.setState({ hover: false });
    }, 50);
  }

  render() {
    const { item } = this.props;
    console.log('item', item);

    return (
      <li className={'menu__item' + (item.isSubmenu ? ' menu__item--submenu' : '')} className='menu__item' onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={() => this.props.onClick(item.popup)}>
        <img className='menu__item-icon' src={`../assets/os-icons/${item.image_url}`} alt={item.title}/>
        <span className='menu__item-title'> {item.title} </span>
         {this.state.hover ?
          <Menu items={item.items} type='submenu' onClick={this.props.onClick}/> :
          null
        }
      </li>
    );
  }
}

export default MenuItem;