import { expect } from '@playwright/test';
export class Cart{
    constructor(page) {
        this.page = page;
        this.cardBtn = page.getByTestId('cart-button');
        this.cartPanel = page.getByTestId('cart-panel');
        this.cartList = page.getByTestId('cart-list').locator('.cart-item');
        this.cartListElementName = page.getByTestId('cart-list').locator('span');
        this.cartListRemoveBtn = page.getByTestId('cart-list').locator('button');
        this.buyBtn =  page.getByTestId('cart-buy');
    }

     async removeBtnForEveryItemCheck(){
        let listLength = await this.cartList.count();
        //console.log(listLength);
        // for(let i=0;i<listLength;i++){
        //     // console.log(this.cartList.nth(i).locator('.cart-remove'));
        //     await expect(this.cartList.nth(i).locator('.cart-remove')).toBeVisible();
        // }
        let list = [];
        list = await this.cartList.locator('.cart-remove').all();
        list.forEach(async (element) => {
            //console.log(await element.getAttribute('class'));
            expect(await element.getAttribute('class')).toEqual('cart-remove');
        }
    );     
    }

    async itemSearch(name){
        let list = await this.cartListElementName.allInnerTexts();
        //console.log(await list.includes(name));
        expect(await list.includes(name)).toBeTruthy();
    }
}
module.exports = { Cart }