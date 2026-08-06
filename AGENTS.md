# Agent notes for this repository

This repository is the public **DoesQA one-pager** on GitHub:
https://github.com/Does-QA/doesqa

It is a discovery surface for slightly more technical readers. It is **not** product
documentation, the help centre, or the website Features catalogue.

## Docs is primary

All public content destinations are evaluated from the **docs** repository:

https://github.com/Does-QA/docs/blob/main/PUBLISH_DESTINATIONS.md

When product work ships, agents write a Work Package Brief, then decide docs / help /
website / this GitHub one-pager from that file. Do not treat this README as a second
source of truth. Capability claims must match `docs.does.qa` and the product.

## When to update this README

Update when a durable product change would make the one-pager wrong or incomplete for a
technical evaluator, for example:

- A major platform capability customers now rely on (new integration class, major journey
  area, or build surface)
- Positioning that no longer matches docs or the website
- Broken deeplinks into docs or does.qa

Skip for routine docs edits, help articles, small Feature changelog items, and anything on
the Never publish list in docs `AGENTS.md`.

## How to update (PR only)

1. Work from the docs publish evaluation (or an explicit request to refresh this one-pager).
2. Branch in **this** repository. Do not push straight to `main`.
3. Edit `README.md` only unless the change clearly needs another file.
4. Keep the page a **one-pager**: outcome-led, technically credible, brief but comprehensive.
   Link out to [docs.does.qa](https://docs.does.qa) and [does.qa](https://does.qa). Do not
   paste docs pages here.
5. Open a pull request into `main`. Human review merges.
6. Prefer rewriting from the current product and docs, not lightly editing website Feature
   copy.

`main` is protected. Direct pushes and force-pushes are not the workflow.
