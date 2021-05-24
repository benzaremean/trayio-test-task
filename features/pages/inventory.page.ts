import { expect } from 'chai';
import { actionable } from '../../helpers';
import InventoryItem from './components/inventoryItem.component';

class InventoryPage {
  get sortSelect() {
    return $('[data-test="product_sort_container"]');
  }
  get inventoryItem() {
    return $('.inventory_item');
  }
  get inventoryItems() {
    return $$('.inventory_item');
  }

  sort(option: string) {
    actionable(this.sortSelect).selectByVisibleText(option);
  }

  inventoryItemsCount() {
    actionable(this.inventoryItem);
    return this.inventoryItems.length;
  }

  addToCart(index: number) {
    actionable(this.inventoryItem);
    const itemElement = this.inventoryItems[index];
    new InventoryItem(itemElement).addToCart();
  }

  inventoryItemsSortedDescending() {
    actionable(this.inventoryItem);
    const prices = this.inventoryItems.map((item: WebdriverIO.Element) =>
      new InventoryItem(item).getPrice()
    );
    const sortedDescendingPrices = prices.sort((a: number, b: number) => b - a);
    console.log(prices);
    console.log(sortedDescendingPrices);
    expect(prices).to.eql(sortedDescendingPrices);
  }
}

export default new InventoryPage();
