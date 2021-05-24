import { actionable, visible } from '../../../helpers';

class CartItem {
  container: WebdriverIO.Element;
  constructor(container: WebdriverIO.Element) {
    this.container = container;
  }

  get priceDiv() {
    return this.container.$('.inventory_item_price');
  }
  get removeFromCartBtn() {
    return this.container.$('[data-test^="remove"]');
  }

  getPrice(): number {
    const text = visible(this.priceDiv).getText().replace('$', '');
    return parseFloat(text);
  }

  removeFromCart(): void {
    actionable(this.removeFromCartBtn).click();
  }
}

export default CartItem;
