function groupingDishes(dishes) {
  var dishesByIngredient = {};
  dishes.forEach(ingredientList => {
    dish = ingredientList[0];
    for (var i = 1; i < ingredientList.length; i++) {
      if (!dishesByIngredient[ingredientList[i]]) {
        dishesByIngredient[ingredientList[i]] = [ingredientList[i], dish];
      } else {
        dishesByIngredient[ingredientList[i]].push(dish);
      }
    }
  })
  return Object.values(dishesByIngredient).filter((ingredient) => {
    return ingredient.length > 2;
  }).sort();
}

dishes = [["Pasta","Tomato Sauce","Onions","Garlic"], 
 ["Chicken Curry","Chicken","Curry Sauce"], 
 ["Fried Rice","Rice","Onions","Nuts"], 
 ["Salad","Spinach","Nuts"], 
 ["Sandwich","Cheese","Bread"], 
 ["Quesadilla","Chicken","Cheese"]]

 // dishes = [["Salad","Tomato","Cucumber","Salad","Sauce"]]

 console.log(groupingDishes(dishes))