class ShoppingCart {
    private items: string[] = [];
    private bookAdded: boolean = false;

    addItem(item: string): void {
        this.items.push(item);
        if (item.toLowerCase() === "book") {
            this.bookAdded = true;
        }
    }

    removeItem(item: string): void {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }

        if (item.toLowerCase() === "book" && !this.items.includes("book")) {
            this.bookAdded = false;
        }
    }

    getDiscountPercentage(): number {
        return this.bookAdded ? 5 : 0;
    }

    getItems(): string[] {
        return [...this.items];
    }
}

const cart = new ShoppingCart();
cart.addItem("book");
cart.addItem("laptop");
console.log(cart.getDiscountPercentage());
cart.removeItem("book");
console.log(cart.getDiscountPercentage());


console.log("---------------------------------------------------------------------------------------")


function getDiscountPercentage(items: string[]): number {
    return items.includes("book") ? 5 : 0;
}

const items = ["book", "laptop"];
console.log(getDiscountPercentage(items));
console.log(getDiscountPercentage(["phone", "tablet"]));
