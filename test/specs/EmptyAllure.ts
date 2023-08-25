import AllureReporter from '@wdio/allure-reporter';

describe('Example test', () => {
    beforeEach(async () => {
        console.log('beforeEach');
	});

    it('Empty allure', async () => {
        await AllureReporter.step('test', () => {})
    })
})


