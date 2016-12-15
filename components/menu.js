import React from 'react';
import MenuItem from './menuitem';
//import Submenu from './submenu';
import '../styles/menu.css';

class Menu extends React.Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   hover: false
    // };

    // this.mouseOver = this.mouseOver.bind(this);
    // this.mouseOut = this.mouseOut.bind(this);
    console.log('this.props', this.props);
  }

  // mouseOver() {
  //   this.setState({hover: true});
  // }

  // mouseOut() {
  //   this.setState({hover: false});
  // }

  render() {
    const { items } = this.props;
    console.log('items', items);

    return (
      <ul className={'menu' + (this.props.type ? ' menu--submenu' : '')}>

        {items.map((item, index) => {
          return <MenuItem key={index} item={item} onClick={this.props.onClick}/>
        })}
        
      </ul>
    );
  }
}

export default Menu;

