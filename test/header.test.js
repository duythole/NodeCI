
const Page = require('./helper/page');

let page;

beforeEach(async () => {
    page = await Page.build();
    await page.goto('http://localhost:3000');
});

afterEach(async () => {
    await page.close();
});


test('When signed in, show logout button', async () => {
    await page.login();

    const text = await page.getContentsOf('a[href="/auth/logout"]');

    expect(text).toEqual('Logout');

});