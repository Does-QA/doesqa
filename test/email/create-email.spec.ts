import { CodeCompanion } from '../../src';
import chai from 'chai';

describe('Create Email Address', () => {
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

            it('should create an email address', () => {
                const email = doesqa.email.createEmailAddress(12345);
                expect(email).to.equal('t+cc_12345@doesqa.email');
            });

            it('should return a random email if no seed is sent', () => {
                const email = doesqa.email.createEmailAddress();
                // Example: t+cc_1719956650158@doesqa.email
                expect(email).to.match(/t\+cc_\d+@doesqa\.email/);
            });

            it('should error if the seed is not a number', () => {
                // @ts-ignore
                expect(() => doesqa.email.createEmailAddress('abc')).to.throw('Seed must be a number');
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
