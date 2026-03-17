// @ts-check
import { test, expect } from '@playwright/test';
import { Main } from '../pages/main';
import { Item } from '../pages/item';
import { Cart } from '../pages/cart';

test('adding an item to the cart', async ({ page }) => {
  const main = new Main(page);
  const item = new Item(page);
  const cart = new Cart(page);
  await main.navigateTo();

  await expect(main.pageHeader).toBeVisible();
  //await expect(main.mieczRuniczny).toContainText('Miecz Runiczny');
  //await main.mieczRunicznyLink.click();
  await main.mieczRuniczny.click();

  await expect(item.productName).toHaveText('Miecz Runiczny');
  await expect(item.productImage).toBeVisible();
  //console.log(await item.productImageAlt);
  expect(await item.productImageAlt).toEqual('Miecz Runiczny');
  await expect(item.productDesc).toHaveText('Elegancki model pokazowy z grawerunkiem runicznym. Idealny do ekspozycji lub testów UI z elementami 3D.');
  await expect(item.productPrice).toHaveText('Cena: 199.99 zł');
  await item.buyBtn.click();
  // console.log(await item.toast.innerText());
  // console.log(await item.confirmation.innerText());
  expect(await item.toast.first().innerText()).toEqual('Dodano do koszyka: Miecz Runiczny');
  await item.buyBtn.click();
  expect(await item.toast.nth(1).innerText()).toEqual('Dodano do koszyka: Miecz Runiczny');
  await item.backBtn.click();

  await expect(main.pageHeader).toBeVisible();
  cart.cardBtn.click();
  await expect(cart.cartPanel).toContainText('Twój koszyk');
  // await expect(page.getByTestId('cart-list').locator('span')).toContainText('Miecz Runiczny (p1)');
  cart.itemSearch('Miecz Runiczny (p1)');
  cart.removeBtnForEveryItemCheck();
  await cart.buyBtn.click();
  expect(await main.toast.innerText()).toEqual('sukces');
});