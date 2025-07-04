export enum INDUSTRIES_ENUM {
  EIT = 'EIT',
  ECE = 'ECE',
  CSE = 'CSE',
  ME = 'ME',
  EE = 'EE',
}

export const INDUSTRIES = [
  {
    value: INDUSTRIES_ENUM.EIT,
    label: 'Electronics and Information Technology',
  },
];

export const INDUSTRY_ICONS = {
  [INDUSTRIES_ENUM.EIT]: 'computer',
};

export const HEADER_DATA = {
  name: '',
  icon: '',
  mobileMenuIcon: 'menu',
  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],
};
