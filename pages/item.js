export class Item{
    constructor (page){
        this.page = page;
        this.productName = page.getByRole('heading');
        this.productImage = page.getByRole('img');
        this.productImageAlt = page.locator('.product-hero').getAttribute('alt');
        this.productDesc = page.getByRole('article').locator('.desc');
        this.productPrice = page.getByRole('article').locator('.price');
        this.buyBtn =  page.getByTestId('buy-btn-1');
        this.toast = page.locator('.toast-container').locator('div');
        this.confirmation = page.locator('.toast.toast-success');
        this.backBtn = page.locator('.back');
    }
}

module.exports = { Item }