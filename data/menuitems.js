const menuItems = {
  items: [
    {
      title: 'Documents',
      image_url: 'documents-icon.png',
      onClick: false,
      onMouseOut: true,
      onMouseOver: true,
      items: [
        {
          title: 'Random shit',
          image_url: 'random-icon.png',
          onClick: false,
          onMouseOut: true,
          onMouseOver: true
        }
      ]
    },
    {
      title: 'Settings',
      image_url: 'settings-icon.png',
      onClick: false,
      onMouseOut: true,
      onMouseOver: true,
      items: [
        {
          title: 'Control Panel',
          image_url: 'controlpanel-icon.png',
          onClick: 'this.props.onClick',
          onMouseOut: false,
          onMouseOver: false
        }
      ]
    },
    {
      title: 'Run',
      image_url: 'run-icon.png',
      onClick: true,
      onMouseOut: false,
      onMouseOver: false,
      items: null
    }
  ]
};

export default menuItems;