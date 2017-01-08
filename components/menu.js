import React from 'react';
import MenuItem from './menuitem';
import '../styles/components/menu.scss';

class Menu extends React.Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   hover: false
    // };

    // this.mouseOver = this.mouseOver.bind(this);
    // this.mouseOut = this.mouseOut.bind(this);
  }

  render() {
    const { items } = this.props;
    console.log('onclick', this.props.onClick);

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

