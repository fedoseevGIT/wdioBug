import AllureReporter from '@wdio/allure-reporter';
import {Status} from 'allure-js-commons';

describe('Example test', () => {
    it('Ok allure', async () => {
        AllureReporter.startStep('test');
        AllureReporter.endStep(Status.PASSED);
    })
})


