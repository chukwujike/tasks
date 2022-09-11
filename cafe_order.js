const prompt = require("prompt-sync")({sigint: true});

order = []

total = 0

let price, attribute1, attribute2, attribute3, more

price = 0

class coffee {
    constructor(style, addon, count) {
        this.style = style;
        this.addon = addon;
        this.count = count;
    }
};

// function to perform the operations needed for the order
// it makes performing the operations multiple times easier
function caffe_order(){

    //User picks his order
    console.log("Choose a coffee type");
    attribute1 = prompt("E for expresso, C for Cappucine and L for Latte: ");

    console.log("Pick an add-on")
    attribute2 = prompt("M for Milk, C for Cream and L for Latte: ")
    attribute3 = parseFloat(prompt("What count is needed: "))

    // Order is stored in an object
    let choice = new coffee(attribute1,attribute2,attribute3)

    // The cost is calculated based on the user's order
    if(choice.style.toLowerCase() == "e"){
        
        if(choice.addon.toLowerCase() == "m"){
            price = price + 60 * choice.count
        }  else if(choice.addon.toLowerCase() == "c") {
            price = price + 80 * choice.count
        } else if(choice.addon.toLowerCase() == "l") {
            price = price + 100 * choice.count
        } else {
            console.log("invalid choice")
        }

    } else if(choice.addon.toLowerCase() == "c") {

        if(choice.addon.toLowerCase() == "m"){
            price = price + 75 * choice.count
        }  else if(choice.addon.toLowerCase() == "c") {
            price = price + 90 * choice.count
        } else if(choice.addon.toLowerCase() == "l") {
            price = price + 125 * choice.count
        } else {
            console.log("invalid choice")
        }

    } else if(choice.style.toLowerCase() == "l") {

        if(choice.addon.toLowerCase() == "m"){
            price = price + 100 * choice.count
        }  else if(choice.addon.toLowerCase() == "c") {
            price = price + 125 * choice.count
        } else if(choice.addon.toLowerCase() == "l") {
            price = price +  150 * choice.count
        } else {
            console.log("invalid choice")
        }

    } else {

        console.log("invalid choice")

    }

    more = prompt("Do you want another order... Yes or No? ")

}

caffe_order()

// loop for if the customer wants more
while(more.toLowerCase() != "no"){

    if(more.toLowerCase() == "yes") {
        caffe_order()
    } else if(more.toLowerCase() == "no"){

        return "Thank you for shopping with us"
    }

}

console.log("The cost of your order is " + price.toString())



