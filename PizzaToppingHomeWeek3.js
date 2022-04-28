const PizzaToppings = ['Pepperoni', 'Sausage', 'Peppers', 'Onions'];
function greetCustomer(toppings) {
  let greeting = "Welcome to johnny's Pizza we offer";
  for (let topping of toppings) {
    greeting += ` ${topping}`
  };
  console.log(greeting);
};
greetCustomer(PizzaToppings);

function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} pizza with `;
for(let topping of toppings) {
  order += ` ${topping} `
};
  order += ` coming up`
  console.log(order);
  return [size, crust, toppings];

};
getPizzaOrder(`Large`, `Thick `, `sausage ` , `Hamburger ` , `Peppers`);

function PreparePizza([size, crust , toppings]) {
  let prepared = "Now cooking Pizza!";
  let cooked = {
    size: "large",
    crust: "thick",
    toppings: ["Pepperoni" , "Sausage" ,"Peppers" , "Onions"]

  };
console.log(prepared);
return (cooked);
};
PreparePizza("large" , "thick" , "Pepperoni" , "Sausage" ,"Peppers" , "Onions");

function servePizza(HotPizza){
  let servePizza = HotPizza
  let NewPizza =  ` One ${HotPizza.size} ${HotPizza.crust} ${Hotpizza.toppings} pizza with `;
for(let topping of toppings) {
  order += ` ${topping} `
  NewPizza += $
  HotPizza += 'Pizza is now Ready enjoy'
};
};