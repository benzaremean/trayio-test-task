import { expect } from 'chai';
import { Given, When, Then } from '@cucumber/cucumber';

import loginPage from '../pages/login.page';
import inventoryPage from '../pages/inventory.page';
import cartPage from '../pages/cart.page';
import checkoutPage from '../pages/checkout.page';
import primaryHeader from '../pages/components/primaryHeader.component';
import { actionable } from '../../helpers';

Given(/^I login as '(.*)'$/, (username: string) => {
  loginPage.open();
  loginPage.login(username, 'secret_sauce');
});

Then(/^I should be on the inventory page$/, () => {
  actionable(inventoryPage.inventoryItem);
});

When(/^I sort the inventory by '(.*)'$/, (filter: string) => {
  inventoryPage.sort(filter);
});

Then(/^the inventory should be sorted by '(.*)'$/, (filter: string) => {
  if (filter === 'Price (high to low)') {
    inventoryPage.inventoryItemsSortedDescending();
  } else {
    throw new Error('Handle other conditions appropriately');
  }
});

When(/^I add the two cheapest items$/, () => {
  const count = inventoryPage.inventoryItemsCount();
  inventoryPage.addToCart(count - 1);
  inventoryPage.addToCart(count - 2);
});

When(/^I proceed to cart$/, () => {
  primaryHeader.goToCart();
});

Then(
  /^there should be (\d+) item(s)? in my cart$/,
  (expectedCount: number, sugar: string) => {
    primaryHeader.waitUntilBadgeCountIs(Number(expectedCount).toString());
    const actualCount = cartPage.cartItemsCount();
    expect(actualCount).to.eq(expectedCount);
  }
);

When(/^I remove the cheapest item in my cart$/, () => {
  cartPage.removeCheapestFromCart();
});

When(/^I proceed to checkout$/, () => {
  cartPage.proceedToCheckout();
});

Then(/^I should be on the checkout page$/, () => {
  actionable(checkoutPage.firstNameInput);
});
