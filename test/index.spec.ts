import { CodeCompanion } from '../src';
import chai from 'chai';

describe('Code Companion Class', () => {
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

            it('should create an instance of CodeCompanion', () => {
                expect(doesqa).to.be.an.instanceof(CodeCompanion);
            });

            it('should have an email property', () => {
                expect(doesqa.email).to.be.an('object');
            });

            it('should have an mfa property', () => {
                expect(doesqa.mfa).to.be.an('object');
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
