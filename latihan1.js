class FruitBasket {
    constructor() {
        this.fruitsBasket = [];
    }

    addItem(fruit) {
        this.fruitsBasket.push(fruit);
    }

    removeItem() {
        this.fruitsBasket.pop();
    }

    getInformation() {
        return this.fruitsBasket;
    }
}

const Basket = new FruitBasket();

Basket.addItem("Apel");
Basket.addItem("Mangga");
Basket.addItem("Pisang");

console.log(Basket.getInformation());

Basket.removeItem();

console.log(Basket.getInformation());