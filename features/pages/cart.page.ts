import { expect } from 'chai';
import { actionable } from '../../helpers';
import CartItem from './components/cartItem.component';

class CartPage {
  get cartItem() {
    return $('.cart_item');
  }
  get cartItems() {
    return $$('.cart_item');
  }

  get checkoutBtn() {
    return $('[data-test="checkout"]');
  }

  cartItemsCount() {
    actionable(this.cartItem);
    return this.cartItems.length;
  }

  removeFromCart(index: number) {
    actionable(this.cartItem);
    const itemElement = this.cartItems[index];
    new CartItem(itemElement).removeFromCart();
  }

  removeCheapestFromCart() {
    actionable(this.cartItem);
    const cartItemsSortedDescending = this.cartItems.sort(
      (item1: WebdriverIO.Element, item2: WebdriverIO.Element) => {
        return new CartItem(item2).getPrice() - new CartItem(item1).getPrice();
      }
    );
    const cheapestItem =
      cartItemsSortedDescending[cartItemsSortedDescending.length - 1];
    new CartItem(cheapestItem).removeFromCart();
  }

  proceedToCheckout() {
    actionable(this.checkoutBtn).click();
  }
}

export default new CartPage();
