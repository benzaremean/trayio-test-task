import { visible, actionable } from '../../../helpers';

class PrimaryHeader {
  get badgeCountElement() {
    return $('.shopping_cart_badge');
  }

  get shoppingCartLink() {
    return $('.shopping_cart_link');
  }

  waitUntilBadgeCountIs(expectedCount: string) {
    visible(this.badgeCountElement).waitUntil(async function () {
      const text = await this.getText();
      return text === expectedCount;
    });
  }

  goToCart() {
    actionable(this.shoppingCartLink).click();
  }
}

export default new PrimaryHeader();
