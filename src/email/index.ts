export class Email {
    createEmailAddress(seed?: number): string {
        if(seed) {
            return `t+cc_${seed}@doesqa.email`;
        }
        return `t+cc_${Date.now()}@doesqa.email`;
    }
}