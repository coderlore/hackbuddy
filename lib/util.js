export const removeDuplicateCategories = (categoryObjects) => {
  let categoryArrayWithDuplicates = [];
  categoryObjects.forEach((idx) => {
    idx.edges.forEach((item) => {
      categoryArrayWithDuplicates.push(item.node.name);
    });
  });
  return [...new Set(categoryArrayWithDuplicates)];
};
