//adding student id & name dynamically
function addStudentInfo() {
    const studentId = '200529109';
    const studentName = 'Baran Akhavan-Yekta';

    const studentInfo = document.getElementById('myStudentInfo');
    studentInfo.textContent = `Student ID: ${studentId} | Student Name: ${studentName}`;
}

//defining pizza class
class Pizza {
    constructor(size, crust, sauce, dough, toppings) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.dough = dough;
        this.toppings = toppings;
    }

    //getting the pizza order summary
    getOrderSummary() {
        return `
            <h3>Your Pizza Order</h3>
            <p>Size: ${this.size}</p>
            <p>Crust Type: ${this.crust}</p>
            <p>Sauce Type: ${this.sauce}</p>
            <p>Dough Type: ${this.dough}</p>
            <p>Toppings: ${this.toppings.join(', ') || 'None'}</p>
        `;
    }
}

//function for creating & displaying pizza order summary
function createPizza() {
    const pizzaSize = document.getElementById('pizzaSize').value;
    const crustType = document.getElementById('crustType').value;
    const sauceType = document.getElementById('sauceType').value;
    const doughType = document.getElementById('doughType').value;

    //checking if at least one topping has been selected
    const toppings = document.getElementsByName('topping');
    const selectedToppings = Array.from(toppings)
        .filter(topping => topping.checked)
        .map(topping => topping.value);

    //validating form inputs
    if (!pizzaSize || !crustType || !sauceType || !doughType || selectedToppings.length === 0) {
        alert('Please fill out all required fields and select at least one topping.');
        return;
    }

    //create new Pizza object
    const pizzaOrder = new Pizza(pizzaSize, crustType, sauceType, doughType, selectedToppings);

    //displaying the pizza order summary
    const orderSummary = document.getElementById('orderSummary');
    orderSummary.innerHTML = pizzaOrder.getOrderSummary();
}

    //adding event listener to the order button
    const orderButton = document.getElementById('orderButton');
    document.addEventListener('DOMContentLoaded', addStudentInfo);
