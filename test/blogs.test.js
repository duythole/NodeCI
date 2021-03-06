const Page = require('./helper/page');

let page;

beforeEach(async () => {
    page = await Page.build();
    await page.goto('http://localhost:3000');
});


afterEach(async () => {
    await page.close();
});

describe('When logged in', async () => {
    beforeEach(async () => {
        await page.login();
        await page.click('a.btn-floating');
    });

    test('can see blog create form', async () => {

    });


    describe('and using invalid inputs', async () => {
        beforeEach(async () => {
            await page.click('form button');
        });

        test('show errors message', async () => {
            const titleError = await page.getContentsOf('.title .red-text');
            const contentError = await page.getContentsOf('.content .red-text');
            const contentError1 = await page.getContentsOf('.content .red-text');


            // expect(titleError).toEqual('You must provide a value');
            // expect(contentError).toEqual('You must provide a value');
        });
    });

});