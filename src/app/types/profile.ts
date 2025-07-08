export enum INDUSTRIES_ENUM {
  Accommodation_Services = 'Accommodation_Services',
  Administrative_and_Support_Services = 'Administrative_and_Support_Services',
  Construction = 'Construction',
  Consumer_Services = 'Consumer_Services',
  Education = 'Education',
  Entertainment_Providers = 'Entertainment_Providers',
  Farming = 'Farming',
  Financial_Services = 'Financial_Services',
  Technology_Information_and_Media = 'Technology_Information_and_Media',
  Transportation_Logistics_Supply_Chain_and_Storage = 'Transportation_Logistics_Supply_Chain_and_Storage',
  Utilities = 'Utilities',
  Wholesale_and_Retail = 'Wholesale_and_Retail',
  Media_Information = "Media_Information",
  Information_Technology = "Information_Technology",
}

export const INDUSTRIES = [
  {
    value: INDUSTRIES_ENUM.Accommodation_Services,
    label: 'Accommodation Services',
  },
  {
    value: INDUSTRIES_ENUM.Administrative_and_Support_Services,
    label: 'Administrative and Support Services',
  },
  {
      value: INDUSTRIES_ENUM.Construction,
    label: 'Construction',
  },
  {
    value: INDUSTRIES_ENUM.Consumer_Services,
    label: 'Consumer Services',
  },
  {
    value: INDUSTRIES_ENUM.Education,
    label: 'Education',
  },
  {
    value: INDUSTRIES_ENUM.Entertainment_Providers,
    label: 'Entertainment Providers',
  },
  {
    value: INDUSTRIES_ENUM.Farming,
    label: 'Farming',
    },
  {
    value: INDUSTRIES_ENUM.Financial_Services,
    label: 'Financial Services',
  },
  {
    value: INDUSTRIES_ENUM.Information_Technology,
    label: 'Information Technology',
  },
  {
    value: INDUSTRIES_ENUM.Media_Information,
    label: 'Media and Information',
  },
  {
    value: INDUSTRIES_ENUM.Transportation_Logistics_Supply_Chain_and_Storage,
    label: 'Transportation, Logistics, Supply Chain and Storage',
  },
  {
    value: INDUSTRIES_ENUM.Utilities,
    label: 'Utilities',
  },
  {
    value: INDUSTRIES_ENUM.Wholesale_and_Retail,
    label: 'Wholesale and Retail',
  },
];

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
