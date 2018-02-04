export const initialState = {
  categories: [
  {
    name: 'Rest',
    id: 0,
    parent: null,
    subCategories: [3, 7],
    visibleSubCategory: false,
    level: 0
  },
  {
    name: 'Studies',
    id: 1,
    parent: null,
    subCategories: [4, 5],
    visibleSubCategory: false,
    level: 0
  },
  {
    name: 'Family',
    id: 2,
    parent: null,
    subCategories: [],
    visibleSubCategory: false,
    level: 0
  },
  {
    name: 'Cinema',
    id: 3,
    parent: 0,
    subCategories: [],
    visibleSubCategory: false,
    level: 1
  },
  {
    name: 'Bar',
    id: 7,
    parent: 0,
    subCategories: [],
    visibleSubCategory: false,
    level: 1
  },
  {
    name: 'React Task',
    id: 4,
    parent: 1,
    subCategories: [8, 9, 10, 11],
    visibleSubCategory: false,
    level: 1
  },
  {
    name: 'React.js',
    id: 8,
    parent: 4,
    subCategories: [],
    visibleSubCategory: false,
    level: 2
  },
  {
    name: 'Redux.js',
    id: 9,
    parent: 4,
    subCategories: [],
    visibleSubCategory: false,
    level: 2
  },
  {
    name: 'Thunk.js',
    id: 10,
    parent: 4,
    subCategories: [],
    visibleSubCategory: false,
    level: 2
  },
  {
    name: 'Bootstrap',
    id: 11,
    parent: 4,
    subCategories: [],
    visibleSubCategory: false,
    level: 2
  },
  {
    name: 'Landing Page Task',
    id: 5,
    parent: 1,
    subCategories: [6/*, 7*/],
    visibleSubCategory: false,
    level: 1
  },
  {
    name: 'Html',
    id: 6,
    parent: 5,
    subCategories: [],
    visibleSubCategory: false,
    level: 2
  }
  ],
  popupVisibility: {
    visibility: false
  },
  popupTaskVisibility: {
    visibility: false
  },
  confirmVisibility: {
    visibility: false
  },
  showComplete: false,
  currentCategory: '',
  searchValue: ''
};

initialState.tasks = [
  {
    name: 'Make money',
    id: 0,
    category: initialState.categories[0].id,
    description: "Look for a job, lazy man",
    complete: false
  },
  {
    name: 'Buy movie tickets',
    id: 1,
    category: initialState.categories[0].id,
    description: "Do not buy tickets for kids cartoons as usual",
    complete: false
  },
  {
    name: 'Open codewars.com',
    id: 2,
    category: initialState.categories[1].id,
    description: "Resolve one Kata",
    complete: false
  },
  {
    name: 'Open learn.javascript.ru',
    id: 3,
    category: initialState.categories[1].id,
    description: "Read something interesting",
    complete: false
  },
  {
    name: 'Remember that you have a family',
    id: 4,
    category: initialState.categories[2].id,
    description: "Remember that you have a big lovely family",
    complete: false
  },
  {
    name: 'Invite friends to the bar',
    id: 5,
    category: initialState.categories[0].id,
    description: "Call Dasha, Masha and Pasha",
    complete: false
  }
];
