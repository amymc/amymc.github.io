"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var popups = [{
  title: "Warning",
  image_url: "warning-icon.png",
  message: ["You can't run forever"],
  links: null,
  button_text: "Abort",
  isOpen: false,
  isSelected: false
}, {
  title: "Error",
  image_url: "error-icon.png",
  message: ["Control panel not found.", "Nevermind. Control is an illusion."],
  links: null,
  button_text: "Cancel",
  isOpen: false,
  isSelected: false
}, {
  title: "Failure to open",
  image_url: "error-icon.png",
  message: ["Link is dead.", "All life is transient."],
  links: null,
  button_text: "OK",
  isOpen: false,
  isSelected: false
}, {
  title: "Random shit",
  image_url: null,
  message: null,
  links: null,
  button_text: null,
  isOpen: false,
  isSelected: false,
  isSideProjects: true
}, {
  title: "Contact",
  image_url: "profile-pic.png",
  message: 'test',
  links: [{
    text: 'Github',
    url: 'http://github.com/amymc'
  }, {
    text: 'LinkedIn',
    url: 'http://www.linkedin.com/in/mccarthyamy'
  }, {
    text: 'Email',
    url: 'mailto:amy.mccarthy2@mail.dcu.ie?subject=hello amy'
  }],
  isOpen: false,
  isSelected: false,
  isContact: true
}];

exports.default = popups;