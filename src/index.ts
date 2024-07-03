import { Email } from './email';
import { MFA } from './mfa';

type RunnerType = 'playwright' | 'cypress';
type Runner = { todo: "add runner type"}
export class CodeCompanion {
    email: Email;
    mfa: MFA;
    runner: Runner;
    runnerType: RunnerType;

    constructor(runner: Runner) {
        this.email = new Email();
        this.mfa = new MFA();
        this.runner = runner;
        this.runnerType = this.detectRunnerType(runner);
    }

    private detectRunnerType(runner: Runner): RunnerType {
        if(runner) {
            return 'playwright';
        }
        return 'playwright';
    }
}
