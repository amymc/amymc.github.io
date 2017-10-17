export const item = {
  title: 'Twin peaks',
  type: 'lynchian',
  description: [
    'There was a fish in the percolator'
  ],
  tech_stack: 'I, do, not, introduce, the, log',
  isOpen: false,
  isSelected: false
};

export const isPortrait = { ...item, 
  company_url: 'http://fake-url.com',
  hasPortraitImages: true, 
  image_urls: ['dots/twodots_screenshot1.png',
    'dots/twodots_screenshot2.png',
    'dots/dots_screenshot1.png'
  ]
};

export const defaultItem = { ...item, 
  company_url: 'http://fake-url.com',
  hasPortraitImages: false, 
  image_urls: [
    'ostmodern/bfi_screenshot1.png',
    'ostmodern/bfi_screenshot2.png'
  ]
};

export const noUrl = { ...item, 
  company_url: null,
  hasPortraitImages: false, 
  image_urls: [
    'ostmodern/bfi_screenshot1.png',
    'ostmodern/bfi_screenshot2.png'
  ],
  popup: {
    title: "false alarm"
  }
};
