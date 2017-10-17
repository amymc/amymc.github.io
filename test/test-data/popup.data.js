export const contactItem = { 
  title: "Contact",
  image_url: "profile-pic.png",
  message: 'test',
  links: [
    {
      text: 'Github',
      url: 'http://github.com/amymc'
    },
    {
      text: 'LinkedIn',
      url: 'http://www.linkedin.com/in/mccarthyamy'
    },
    {
      text: 'Email',
      url: 'mailto:amy.mccarthy2@mail.dcu.ie?subject=hello amy'
    }
  ],
  isOpen: false,
  isSelected: false,
  isContact: true
};

export const defaultItem = {
  title: "Error",
  image_url: "error-icon.png",
  message: [
    "Control panel not found.",
    "Nevermind. Control is an illusion."
  ],
  links: null,
  button_text: "Cancel",
  isOpen: false,
  isSelected: false,
};

export const projectsItem = {
  title: "Random shit",
  image_url: null,
  message: null,
  links: null,
  button_text: null,
  isOpen: false,
  isSelected: false,
  isSideProjects: true
};

 export const sideProjects = [
  {
    title: 'cyoa',
    url: 'cyoa'
  },
  {
    title: 'd3 snl',
    url: 'd3-snl'
  },
  {
    title: 'old portfolio',
    url: 'old_portfolio'
  },
  {
    title: 'domo domination',
    url: 'domo-domination'
  }
];
