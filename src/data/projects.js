const projects = [
  {
    title: 'Edenspiekermann',
    image_urls: [
      'dots/twodots_screenshot1.png',
      'dots/dots_mobile_screenshot1.png'
      ],
    type: 'Design agency',
    description: 'blah blah etc',
    company_url: 'https://www.edenspiekermann.com',
    tech_stack: 'React, Redux, SCSS (BEM)',
    isOpen: false,
    isSelected: false
  },
  {
    title: 'Ostmodern',
    image_urls: [
      'ostmodern/bfi_screenshot1.png',
      'ostmodern/bfi_screenshot2.png'
    ],
    type: 'Digital agency specialising in streaming video platforms',
    description: 'Worked on responsive video platforms for BFI, BBC and UTV',
    company_url: 'http://ostmodern.co.uk',
    tech_stack: 'JS, JQuery, SCSS (BEM), Handlebars, Gulp, RequireJS, Django',
    isOpen: false,
    isSelected: false
  },
  {
    title: 'Dots',
    image_urls: [
      'dots/twodots_screenshot1.png',
      'dots/twodots_screenshot2.png',
      'dots/dots_screenshot1.png'
      ],
    type: 'Games studio',
    description: [
      'Ported the iOS game Two Dots to Facebook',
      'Implemented redesigned company site'
    ],
    company_url: 'http://dots.co',
    tech_stack: 'Coffeescript, JSON, Bootstrap, SASS',
    isOpen: false,
    isSelected: false
  },
  {
    title: 'Bragbet',
    image_urls: [
      'bragbet/bragbet_screenshot1.jpg',
      'bragbet/bragbet_screenshot2.jpg'
      ],
    type: 'Social betting startup',
    description: 'Turned Photoshop mockups into responsive pages',
    company_url: null,
    tech_stack: 'CSS, jQuery, Foundation framework, Grails',
    isOpen: false,
    isSelected: false
  },
  {
    title: 'GetBulb',
    image_urls: [
      'getbulb/getbulb_screenshot1.jpg',
      'getbulb/getbulb_screenshot4.jpg'
      ],
    type: 'Data visualisation startup',
    description: [
      'Created charts, graphs and maps using D3.js.',
      'Integrated these new charts into the exisitng app, which runs on the Sproutcore Javscript MVC framework.',
      'The app allows users to paste in data from a spreadsheet and then the selected chart will update to reflect the data.'
    ],
    company_url: 'http://www.getbulb.com/',
    tech_stack: 'D3.js',
    isOpen: false,
    isSelected: false
  }
];

export default projects;