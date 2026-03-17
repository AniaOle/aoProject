export class Main{
    constructor(page) {
        this.page = page;

        this.pageHeader = this.page.getByRole('heading', { name: 'Strona główna' });
        //this.mieczRuniczny = this.page.getByTestId('product-title-1');
        this.mieczRuniczny = this.page.getByText('Miecz Runiczny');
        //this.mieczRunicznyLink = this.page.getByTestId('product-title-1');
        this.toast = page.locator('.toast-container').locator('div');

        this.login = this.page.locator('#login-username');
        this.password = this.page.locator('#login-password');
        this.logInBtn = this.page.locator('#login-button');
        this.logOutBtn = this.page.locator('#logout-button');
        this.status = this.page.locator('#welcome');    
    }
    
    async navigateTo() {
        await this.page.goto('');
    }

}
module.exports = { Main }