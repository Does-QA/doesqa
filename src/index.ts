import { Email } from './email';
import { MFA } from './mfa';

type RunnerType = 'playwright' | 'cypress';

export class CodeCompanion {
    email: Email;
    mfa: MFA;
    runner: any;
    runnerType: RunnerType;

    constructor(runner: any) {
        this.email = new Email();
        this.mfa = new MFA();
        this.runner = runner;
        this.runnerType = this.detectRunnerType(runner);
    }

    private detectRunnerType(runner: any): RunnerType {
        if (runner.hasOwnProperty('browser') && runner.hasOwnProperty('context')) {
            return 'playwright';
        } else if (runner.hasOwnProperty('cy')) {
            return 'cypress';
        } else {
            throw new Error('Unknown runner');
        }
    }
}
