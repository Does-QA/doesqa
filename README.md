<p align="center">
  <a href="https://does.qa">
    <img src="https://app.does.qa/dqa-logo-color.svg" width="96" alt="DoesQA" />
  </a>
</p>

<h1 align="center">DoesQA</h1>

<p align="center">
  <strong>End-to-end web test automation without building a framework.</strong><br />
  Design real user journeys, run them in parallel on hosted browsers, and ship with evidence you can trust.
</p>

<p align="center">
  <a href="https://does.qa">Website</a> ·
  <a href="https://docs.does.qa">Docs</a> ·
  <a href="https://does.qa/features">Features</a> ·
  <a href="https://docs.does.qa/platform/integrations">Integrations</a> ·
  <a href="https://does.qa/signup">Start free</a>
</p>

---

## What DoesQA is

DoesQA is a hosted platform for **end-to-end web testing**. You build **Flows** from reusable **Test Steps**, run them on real browsers, and review results with screenshots, videos, and clear failure detail.

You do not maintain runners, a page-object framework, or a glue layer of side tools for email, MFA, accessibility, or visual checks. Those capabilities sit inside the same Flow model.

If you already know Playwright or Cypress: DoesQA is the product teams often end up assembling around those frameworks. Codeless authoring for testers, with the depth engineers expect when journeys get serious.

## Why teams use it

- **Coverage that branches.** One Flow can fan into many **Test Cases** through shared steps and **Flow Branches**, so edge paths do not mean copy-paste suites.
- **Runners included.** Parallel execution on fresh machines, without standing up browser farms.
- **Journeys that match production.** Email inboxes, MFA codes, APIs, files, tabs, frames, payments flows, and more live as first-class Test Steps.
- **CI that reports like CI.** Start Runs from GitHub, GitLab, Bitbucket, Azure, or any HTTP client. Get Checks, summaries, and Slack or Teams alerts when you need them.
- **Optional AI that stays in DoesQA.** Summaries, Suggestions, Automatic Elements, and an in-app Assistant. [MCP](https://docs.does.qa/doesqa-ai/mcp) and the [CLI](https://docs.does.qa/doesqa-ai/cli) let coding agents work in your account while people review Flows and Runs in DoesQA. Models and data stay inside DoesQA (UK datacentre). Powerful, and fully optional.
- **Maintenance that scales.** **Elements**, **Values**, **Step Groups**, and **Run Recipes** keep packs coherent as the product changes.

## How you build

| Surface | Role |
| --- | --- |
| [Scenario editor](https://docs.does.qa/platform/scenario-editor) | Plain-language steps. New Flows open here. |
| [Flow Builder](https://docs.does.qa/platform/flow-builder) | Visual canvas for branching, reuse, and serious structure. Same Test Steps, more power. |

Author once. Switch views when the journey needs it. You are not rebuilding the test.

## What a Flow can cover

A short map of the depth available inside ordinary Flows:

| Area | Examples |
| --- | --- |
| Interaction | Touch, type, select, drag and drop, scroll, hover, file upload |
| Assertions | Displayed, text, value, URL, cookies, local storage, downloads |
| Browser | Tabs, windows, frames, scripts, navigation |
| Mail | Per-test and account inboxes, wait, open, extract, continue the journey |
| Auth | Saved MFA secrets and Set MFA inside the Flow |
| API / SFTP | GET/POST/PUT/PATCH/DELETE, SFTP list and upload |
| Vision | Element snapshots, position checks, AI Vision |
| Quality | Accessibility (Axe, Pa11y, Lighthouse), performance, SEO, broken links |
| Data | Value Store, built-in dynamic Values, generate files |
| Orchestration | Step Groups, DoesQA Run, schedules, environments via Values and tags |

Deep dives live in the docs: [Guides](https://docs.does.qa), [Better Coverage](https://docs.does.qa/better-coverage/reuse-steps-with-step-groups), [Test Steps](https://docs.does.qa/test-steps/starter/open).

## Platform around the tests

DoesQA is not only an editor. The platform around each Run includes:

- **Hosted Test Runners** with isolation between Test Cases
- **Run History** with step responses, screenshots, and video
- **Schedules** for recurring coverage
- **Notifications** to email, Slack, Microsoft Teams, and outbound webhooks
- **Integrations** to start Runs from CI and automation tools ([Universal Webhook](https://docs.does.qa/platform/integrations/universal-webhook), [GitHub Action](https://docs.does.qa/platform/integrations/github), [GitLab](https://docs.does.qa/platform/integrations/gitlab), and more)
- **[DoesQA AI](https://docs.does.qa/doesqa-ai)** for faster triage, Element setup, Suggestions, and [MCP](https://docs.does.qa/doesqa-ai/mcp) / [CLI](https://docs.does.qa/doesqa-ai/cli) agent access when you want it

## Who it is for

- **QA and automation testers** who want strong coverage without owning a framework
- **Engineering teams** who want CI gates and real browser evidence without maintaining runner infra
- **Leads comparing tools** who need branching journeys, email, MFA, and quality checks in one system

## Start here

| Link | Summary |
| --- | --- |
| [does.qa](https://does.qa) | Product site and trial |
| [docs.does.qa](https://docs.does.qa) | How to build and run tests |
| [FAQ](FAQ.md) | Common questions with docs links |
| [Create your first Flow](https://docs.does.qa/getting-started/create-and-run-your-first-flow) | Fastest path to a green Run |
| [DoesQA vs Playwright / Cypress](https://docs.does.qa/choosing/doesqa-compared) | Build model and capability comparison |
| [Features](https://does.qa/features) | What shipped and what stands alone |
| [Integrations](https://docs.does.qa/platform/integrations) | CI, chat, and automation connections |

---

<p align="center">
  <a href="https://does.qa/signup"><strong>Try DoesQA</strong></a>
</p>

<p align="center">
  <sub>© DoesQA. All rights reserved.</sub>
</p>
