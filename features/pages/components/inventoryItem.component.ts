import { actionable, visible } from '../../../helpers';

class InventoryItem {
  container: WebdriverIO.Element;
  constructor(container: WebdriverIO.Element) {
    this.container = container;
  }

  get priceDiv() {
    return this.container.$('.inventory_item_price');
  }
  get addToCartBtn() {
    return this.container.$('[data-test^="add-to-cart"]');
  }
  get removeFromCartBtn() {
    return this.container.$('[data-test^="remove"]');
  }

  getPrice(): number {
    const text = visible(this.priceDiv).getText().replace('$', '');
    return parseFloat(text);
  }

  addToCart(): void {
    actionable(this.addToCartBtn).click();
    visible(this.removeFromCartBtn);
  }

  removeFromCart(): void {
    actionable(this.removeFromCartBtn).click();
    visible(this.addToCartBtn);
  }
}

export default InventoryItem;
