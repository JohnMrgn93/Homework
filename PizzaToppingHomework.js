//Pizza Topping Homework
const PizzaToppings = ['Pepperoni', 'Sausage', 'Peppers', 'Onions'];
for (let name of PizzaToppings) {
  console.log(name);
}

function greetCustomer() {
  return `Welcome to Johnnys Pizza, our toppings are ${PizzaToppings}!`;
}
 console.log(greetCustomer());
  function getPizzaOrder(size, crust, toppings) {
  console.log(`One ${size} ${crust} pizza with ${toppings} ... coming up!`);
}
getPizzaOrder("large", "thick", "cheese, sausage, and mushrooms");
getPizzaOrder.length;
function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size} ${crust} pizza with ${toppings} ... coming up!`);
};

