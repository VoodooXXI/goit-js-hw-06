const categoriesList = document.querySelectorAll("#categories li.item");
// Count and print the total number of categories
console.log(`Number of categories: ${categoriesList.length}\n`);

// Loop through each category and print its title and the number of elements
categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const elementsList = category.querySelectorAll("li");
  const numElements = elementsList.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${numElements}\n`);
});
