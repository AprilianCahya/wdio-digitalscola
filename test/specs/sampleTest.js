describe('SauceDemo Tests', () => {
    it('User success login', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        // Validate user berada di dashboard setelah login
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it('Add item to cart', async () => {
        // Add item to cart
        await $('.inventory_item:nth-child(1) .btn_inventory').click();

        // Validate item sukses ditambahkan ke cart
        const cartBadge = $('.shopping_cart_badge');
        await expect(cartBadge).toBeDisplayed();
        await expect(cartBadge).toHaveText('1');
    });
});
