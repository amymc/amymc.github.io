export const item = {
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
};
