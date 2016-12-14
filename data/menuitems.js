const menuItems = {
  main: [
    {
      title: 'Documents',
      image_url: 'documents-icon.png',
      onClick: null,
      onMouseOut: 'this.mouseOut',
      onMouseOver: 'this.mouseOver'
    },
    {
      title: 'Settings',
      image_url: 'settings-icon.png',
      onClick: null,
      onMouseOut: 'this.mouseOut',
      onMouseOver: 'this.mouseOver'
    },
    {
      title: 'Run',
      image_url: 'documents-icon.png',
      onClick: 'this.props.onClick',
      onMouseOut: null,
      onMouseOver: null
    }
  ],
  submneu: [
    {
      title: 'Control Panel',
      image_url: 'controlpanel-icon.png',
      onClick: 'this.props.onClick',
      onMouseOut: null,
      onMouseOver: null
    }
  ]
};

export default menuItems;