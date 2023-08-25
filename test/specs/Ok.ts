import AllureReporter from '@wdio/allure-reporter';

describe('Example test', () => {
    it('Ok allure', async () => {
        await AllureReporter.step('test', () => {})
    })
})


