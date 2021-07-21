export const filterCategories = (categories) => {
  let filtered = [];
  categories.map((category) => filtered.push(category.section));
  return [...new Set(filtered)]
};
