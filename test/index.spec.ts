import { CodeCompanion } from '../src';
import chai from 'chai';

describe('CodeCompanion Class', () => {
    let expect: typeof chai.expect;

    before(async () => {
        const chai = await import('chai');
        expect = chai.expect;
    });

    it('should create an instance of CodeCompanion', () => {
        const client = new CodeCompanion();
        expect(client).to.be.an.instanceof(CodeCompanion);
    });

    it('should have an email property', () => {
        const client = new CodeCompanion();
        expect(client.email).to.be.an('object');
    });
});
