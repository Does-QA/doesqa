export class Email {
    createEmailAddress(seed?: number): string {
        // Type Guard
        if (seed && typeof seed !== 'number') {
            throw new Error('Seed must be a number');
        }

        if(seed) {
            return `t+cc_${seed}@doesqa.email`;
        }
        return `t+cc_${Date.now()}@doesqa.email`;
    }
}