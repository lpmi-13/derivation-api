import word_list from './wordList';

const keySearch = ({ term }) => {
  if (!word_list.hasOwnProperty(term)) {
    return null;
  } else {
    return word_list[term];
  }
};

export default keySearch;
