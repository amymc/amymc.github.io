export const item = [
  {
    title: "Documents",
    image_url: "documents-icon.png",
    onClick: false,
    onMouseOut: true,
    onMouseOver: true,
    isSubmenu: false,
    popup: null,
    items: [
      {
        title: "Random shit",
        image_url: "random-icon.png",
        onClick: true,
        onMouseOut: false,
        onMouseOver: false,
        isSubmenu: true,
        popup: {
            title: "Random shit"
          },
        items: null
      }
    ]
  },
  {
    title: "Settings",
    image_url: "settings-icon.png",
    onClick: false,
    onMouseOut: true,
    onMouseOver: true,
    isSubmenu: false,
    popup: null,
    items: [
      {
        title: "Control Panel",
        image_url: "controlpanel-icon.png",
        onClick: true,
        onMouseOut: false,
        onMouseOver: false,
        isSubmenu: true,
        popup: {
            title: "Error"
          },
        items: null
      }
    ]
  }
]
