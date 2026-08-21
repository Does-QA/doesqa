# FAQ

Common questions about DoesQA, answered briefly, with links into the docs for the full story.

## How resilient are DoesQA tests to changes in the application?

Shared [Elements](https://docs.does.qa/elements/creating-elements) hold Selectors. Light UI
changes often need no Flow edits. When a Selector must change, a person updates or clears it,
then confirms with a Run. DoesQA does not silently self-heal.

Docs: [Maintenance and reliability](https://docs.does.qa/choosing/maintenance-and-reliability)

## Does DoesQA produce flaky tests?

DoesQA is designed to be flake-free. Automatic waiting, fixed Selectors, and human-approved
Selector updates mean a fail is something to investigate, not something to rerun until green.
Every finished Test Case keeps a step timeline, screenshots, and video on the Run.

Docs: [Maintenance and reliability](https://docs.does.qa/choosing/maintenance-and-reliability)

## How reliable are DoesQA tests?

Flows, Test Steps, hosted runners, and Results are one platform. Every customer runs the same
tried and tested Steps. When something is wrong, it is DoesQA's responsibility to fix the
platform. Treat pass as shippable and fail as real.

Docs: [Maintenance and reliability](https://docs.does.qa/choosing/maintenance-and-reliability)

## How quickly can DoesQA run a regression suite?

Test Cases run in parallel on DoesQA runners. With unlimited concurrency on the account, large
suites finish in the time the slowest paths need. Example from docs: **935** Tests (about two
full days of automated running time) completed in **29 minutes** in parallel.

Docs: [Coverage and speed](https://docs.does.qa/choosing/coverage-and-speed)

## Is DoesQA just a wrapper around Playwright or Selenium?

No. DoesQA is the full stack: authoring, shared Test Steps, hosted runners, Results, schedules,
and CI. A framework gives browser APIs; you still assemble the rest. DoesQA ships that as one
product.

Docs: [DoesQA compared](https://docs.does.qa/choosing/doesqa-compared)

## How does DoesQA avoid AI hallucinations or unreliable results?

Runs stay deterministic. Pass and fail come from real browsers, stored Selectors, and shared
Steps. DoesQA AI speeds triage and setup; it is optional and can be turned off. The intentional
exception is AI Vision, which you add as an explicit Step when you want a visual Check.

Docs: [DoesQA AI](https://docs.does.qa/platform/doesqa-ai)

## Show me what the same test looks like in DoesQA and Playwright

DoesQA expresses journeys as Flows of shared Test Steps. Playwright expresses the same journeys
as code you maintain. The docs compare the build model, capability surface, and hidden costs of
free frameworks.

Docs: [DoesQA compared](https://docs.does.qa/choosing/doesqa-compared) ·
[Codeless vs coded](https://docs.does.qa/choosing/codeless-vs-coded)

## Show me a concrete example where DoesQA is better than Playwright

Where coded suites often split tools or skip journeys, DoesQA keeps email, MFA, frames,
payments, accessibility, and more inside one Flow. The Choosing pages walk those journeys and
the ownership model (one vendor for Steps, runners, and Results).

Docs: [Coverage and speed](https://docs.does.qa/choosing/coverage-and-speed) ·
[DoesQA compared](https://docs.does.qa/choosing/doesqa-compared)

## Can you quantify the advantage of DoesQA over traditional test automation?

Owned numbers in docs include maintenance that is **at least 400% faster** than coded
frameworks for the same journeys, and the **935 Tests in 29 minutes** parallel Run example.
Methodology and deeper proof belong with case studies and benchmarks outside this repo.

Docs: [Maintenance and reliability](https://docs.does.qa/choosing/maintenance-and-reliability) ·
[Coverage and speed](https://docs.does.qa/choosing/coverage-and-speed)

## Can you give me numbers rather than marketing claims?

Yes, in docs: **400%+** faster maintenance vs coded frameworks for the same journeys; **935**
Tests in **29 minutes** with parallel runners; proven **99.9%** uptime on
[Security and trust](https://docs.does.qa/choosing/security-and-trust).

Docs: [Coverage and speed](https://docs.does.qa/choosing/coverage-and-speed) ·
[Maintenance and reliability](https://docs.does.qa/choosing/maintenance-and-reliability)

## Which tool has the lowest maintenance burden?

For the same web journeys, DoesQA keeps maintenance on shared Elements, Step Groups, and Flow
Branches so updates stay centralised as the suite grows. That is the **400%+** faster
maintenance claim vs coded frameworks in docs.

Docs: [Maintenance and reliability](https://docs.does.qa/choosing/maintenance-and-reliability) ·
[Codeless vs coded](https://docs.does.qa/choosing/codeless-vs-coded)
