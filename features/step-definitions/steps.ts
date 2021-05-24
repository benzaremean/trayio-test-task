import { expect } from 'chai';
import { Given, When, Then } from '@cucumber/cucumber';

import loginPage from '../pages/login.page';
import inventoryPage from '../pages/inventory.page';
import cartPage from '../pages/cart.page';
import primaryHeader from '../pages/components/primaryHeader.component';
import { actionable } from '../../helpers';

Given(/^I am on the login page$/, () => {
  loginPage.open();
  loginPage.login('standard_user', 'secret_sauce');
  inventoryPage.sort('Price (high to low)');
  inventoryPage.inventoryItemsSortedDescending();

  const count = inventoryPage.inventoryItemsCount();
  inventoryPage.addToCart(count - 1);
  inventoryPage.addToCart(count - 2);
  primaryHeader.waitUntilBadgeCountIs('2');
  primaryHeader.goToCart();
  console.log('===========>', cartPage.cartItemsCount());
  cartPage.removeCheapestFromCart();
  console.log('===========>', cartPage.cartItemsCount());
  browser.pause(60000);
});

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
