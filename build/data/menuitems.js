"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var menuItems = [{
  title: "Documents",
  image_url: "documents-icon.png",
  onClick: false,
  onMouseOut: true,
  onMouseOver: true,
  isSubmenu: false,
  popup: null,
  items: [{
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
  }]
}, {
  title: "Settings",
  image_url: "settings-icon.png",
  onClick: false,
  onMouseOut: true,
  onMouseOver: true,
  isSubmenu: false,
  popup: null,
  items: [{
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
  }]
}, {
  title: "Contact",
  image_url: "contact-icon.png",
  onClick: true,
  onMouseOut: false,
  onMouseOver: false,
  isSubmenu: false,
  popup: {
    title: "Contact"
  },
  items: null
}, {
  title: "Run...",
  image_url: "run-icon.png",
  onClick: true,
  onMouseOut: false,
  onMouseOver: false,
  isSubmenu: false,
  popup: {
    title: "Warning"
  },
  items: null
}];

exports.default = menuItems;