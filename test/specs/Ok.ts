import AllureReporter from '@wdio/allure-reporter';
import {Status} from 'allure-js-commons';

describe('Example test', () => {
    beforeEach(async () => {
        console.log('beforeEach');
	});
    it('Empty allure', async () => {
        AllureReporter.startStep('test');
        AllureReporter.endStep(Status.PASSED);
    })
})


