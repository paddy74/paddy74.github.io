---
description: Handbook troubleshooting, solving for a specific use case, and other tips for writing documentation for the handbook.
---

# Practical Handbook Editing Tips

This article covers instructions, tips, and examples for editing documentation in the handbook and working [handbook-first](https://about.gitlab.com/company/culture/all-remote/handbook-first-documentation/).

:::info

This article is based on [GitLab Handbook | Practical Handbook Editing Tips](https://handbook.gitlab.com/handbook/editing-handbook/practical-handbook-edits/).

:::

## Unlisted and Draft Content

Docusaurus supports the ability to hide or remove content from production builds. This is supported for all Docusaurus content plugins: [docs](https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-content-docs), [blog](https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-content-blog), and [pages](https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-content-pages).

**Remove** content from production builds using the `draft: true` front matter; the content will only be available during development.

**Hide** content using the `unlisted: true` front matter, which will keep your pages available in production builds, while "hiding" them and making them impossible to discover without a direct link.

---

Is there anything missing on this page? Do you have a tip or trick not described here? Please submit a contribution!
