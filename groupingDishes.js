function groupingDishes(dishes) {
  var dishesByIngredient = {};
  dishes.forEach(dish => {
    dish.forEach((element, i) => {
      if (i === 0) {
      dishesByIngredient[dish] = [0];
    }
    if (dishesByIngredient[dish].length === 1 || element > dishesByIngredient[dish][dishesByIngredient[dish].length]) {
      dishesByIngredient[dish].push(element);
    } else {
      let dishesIndexToCheck = dishesByIngredient[dish].length - 1;
      while (element < dishesByIngredient[dish][dishesIndexToCheck]) {
        dishesIndexToCheck--;
      }
      dishesByIngredient[dish][dishesIndexToCheck] = element;
    }
  })
}