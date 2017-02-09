const popups = [
  {
    title: "Warning",
    image_url: "warning-icon.png",
    message: [
      "You can't run forever"
    ],
    button_text: "Abort",
    isOpen: false
  },
  {
    title: "Error",
    image_url: "error-icon.png",
    message: [
      "Control panel not found.",
      "Nevermind. Control is an illusion."
    ],
    button_text: "Cancel",
    isOpen: false
  },
  {
    title: "Random shit",
    image_url: null,
    message: null,
    button_text: null,
    isOpen: false,
    isSideProjects: true
  },
  {
    title: "Contact",
    image_url: "profile-pic.png",
    message: 'test',
    button_text: null,
    isOpen: false,
    isContact: true
  }
];

export default popups;