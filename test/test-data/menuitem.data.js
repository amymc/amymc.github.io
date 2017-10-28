export const item = {
  title: "Documents",
  image_url: "documents-icon.png",
  onClick: true,
  onMouseOut: true,
  onMouseOver: true,
  isSubmenu: false,
  popup: {
    title: "Contact"
  },
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
