import { CodeCompanion } from '../../src';
import chai from 'chai';

describe('Generate MFA Code', () => {
    let expect: typeof chai.expect;

    before(async () => {
        const chai = await import('chai');
        expect = chai.expect;
    });

    const mockPlaywrightRunner = {
        browser: {},
        context: {},
    };

    const mockCypressRunner = {
        cy: {},
    };

    const runTests = (runnerType: 'playwright' | 'cypress', runner: any) => {
        describe(`Running tests with ${runnerType}`, () => {
            let doesqa: CodeCompanion;

            before(() => {
                doesqa = new CodeCompanion(runner);
            });

            it('should generate a static code', async () => {
                const mfa = await doesqa.mfa.generateCode();
                expect(mfa).to.equal(123456);
            });
        });
    };

    describe('Playwright', () => {
        runTests('playwright', mockPlaywrightRunner);
    });

    describe('Cypress', () => {
        runTests('cypress', mockCypressRunner);
    });
});
