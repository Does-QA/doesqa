import { CodeCompanion } from '../../src';
import chai from 'chai';

describe('Code Companion Class', () => {
    let expect: typeof chai.expect;

    before(async () => {
        const chai = await import('chai');
        expect = chai.expect;
    });

    it('should create an email address', () => {
        const client = new CodeCompanion();
        const email = client.email.createEmailAddress(12345);
        expect(email).to.equal('t+cc_12345@doesqa.email');
    });

    it('should return a random email if no seed is sent', () => {
        const client = new CodeCompanion();
        const email = client.email.createEmailAddress();
        // Example: t+cc_1719956650158@doesqa.email
        expect(email).to.match(/t\+cc_\d+@doesqa\.email/);
    });
});
