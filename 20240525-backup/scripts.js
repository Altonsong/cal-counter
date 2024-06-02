const dishes = [
  {src: "./photos/beef-and-broccoli-noodle-stir-fry.webp", calories: "50Cal"},
  {src: "./photos/chinese-chicken-fried-rice.webp", calories: "60Cal"},
  {src: "./photos/classic-chicken-noodle-soup.webp", calories: "70Cal"},
  {src: "./photos/creamy-lemon-chicken.webp", calories: "80Cal"},
  {src: "./photos/cucumber-tomato-avocado-salad.webp", calories: "90Cal"},
  {src: "./photos/grilled-shrimp-tacos.webp", calories: "100Cal"},
  {src: "./photos/honey-soy-glazed-salmon.webp", calories: "110Cal"},
  {src: "./photos/mushroom-stroganoff.webp", calories: "120Cal"},
  {src: "./photos/potato-soup.webp", calories: "130Cal"}
];

function selectDish(index) {
  const selectedDish = dishes[index];
  const imgElement = document.getElementById('selected-img');
  const caloriesInfo = document.getElementById('calories-info');
  
  imgElement.src = selectedDish.src;
  caloriesInfo.textContent = `Calories: ${selectedDish.calories}`;
}
