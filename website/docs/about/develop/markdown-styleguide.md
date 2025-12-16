# Markdown Style Guide

This article covers how to get started with Markdown, what editors to use, writing conventions, and other tips.

:::info

This article is based on [GitLab Handbook | Handbook Markdown Guide](https://handbook.gitlab.com/docs/markdown-guide/)

:::

For a list of Markdown features supported by Docusaurus, the library powering the handbook, see [Docusaurus | Markdown Features](https://docusaurus.io/docs/markdown-features) and [Markdown Guide | Docusaurus](https://www.markdownguide.org/tools/docusaurus/).

## Markdown Conventions

- Words must be separated by one single space only. Do not leave more blank spaces than the necessary, they can render differently than expected and can cause other issues.
- Do not leave blank spaces at the end of sentences.
- Always leave a blank line between block-level markup elements, except between list items.

  ```html
  --- (markup for horizontal line)
  <!-- blank line -->
  Paragraph.
  <!-- blank line -->
  Do not leave blank lines within list items:
  <!-- blank line -->
  - Item 1 - Item 2 - Item 3
  ```

- Do **not** skip headings. Always do `h1 -> h2 -> h3 -> h4`. Never `h2 -> h4`.
- Prefer short titles and headings. Do not punctuate them (unless they require a question mark or an exclamation).
- Try not to punctuate list items, but if you do, be consistent, and do that throughout the list.
- If you have to mention a non-clickable URL, prefer using backticks: `http://an-example.com`.
- To add fancy emojis to your file, see [Using Emoji Shortcodes](https://www.markdownguide.org/extended-syntax/#using-emoji-shortcodes).

### Use relative file paths

When adding a link to another handbook page, use relative file paths (with `.md` extensions) instead of absolute file paths or relative URL links.

To learn more about using Markdown links in Docusaurus, see [Docusaurus | Markdown links](https://docusaurus.io/docs/markdown-features/links).

> Using relative file paths... provides the following benefits:
>
> - Links will keep working on the GitHub interface and many Markdown editors
> - You can customize the files' slugs without having to update all the links
> - Moving files around the folders can be tracked by your editor, and some editors may automatically update file links
> - A [versioned doc](https://docusaurus.io/docs/versioning) will link to another doc of the exact same version
> - Relative URL links are very likely to break if you update the [`trailingSlash` config](https://docusaurus.io/docs/api/docusaurus-config#trailingSlash)

:::tip

Use the below regular expressions to search for non-compliant Markdown links.

```bash
(?<!!)\[[^\]]*\]\(((?=\/)|(?!(http|\.\/images|<http[^>]*>|#|mailto:|callto:|\/img\/|.*\.md#|.*\.mdx#))(?!.*\.(md|mdx)\))).*\)
```

:::

## Markdown Editors

Use the editors available in your internal development or code repository platform (e.g., GitHub), one of the below editors, or your preferred code/text editor to write in Markdown.

### GitHub Editors

- [github.dev](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor)
- Web WYSIWYG Editor

### GitLab Editors

- [Web IDE](https://docs.gitlab.com/ee/user/project/web_ide/)
- [Web Editor](https://docs.gitlab.com/ee/user/project/repository/web_editor.html)

### Regular Code/Text Editors

- [Visual Studio Code](https://code.visualstudio.com/) (recommended)
- [Sublime Text](https://www.sublimetext.com/)
- [Vim](https://www.vim.org/)
- [NeoVim](https://neovim.io/)

#### Visual Studio Code

I recommend Visual Studio Code as your code editor. To edit Markdown files with VS Code, start with the [Markdown and Visual Studio Code guide](https://code.visualstudio.com/docs/languages/markdown) and the handbook's recommended [extensions](https://github.com/paddy74/paddy74.github.io/blob/main/.vscode/extensions.jsonc) and [settings](https://github.com/paddy74/paddy74.github.io/blob/main/.vscode/settings.jsonc).

Additional information about configuring VSCode is covered by [the VSCode configuration guide](../../setup/configure-vscode.md).

### Dedicated Markdown Editors

- macOS:
  - [MacDown](https://macdown.uranusjr.com/)
  - [iA Writer](https://ia.net/writer)
  - [Ulysses](https://ulysses.app/)
- In-browser: [StackEdit](https://stackedit.io/)
- Cross-platform:
  - [Typora](https://typora.io/)

If you are not used to writing Markdown, these editors can be helpful. Many editors offer real time preview and while these preview may not be exactly the same as the final result, they can be a very good approximation, which gives you a good idea of what the output will be while you type.

## Markdown Tools

The browser-based [Markdown Tables Generator](https://www.tablesgenerator.com/markdown_tables) can help you create Markdown tables from scratch or imported from spreadsheets (e.g., Google Docs, LibreOffice Calc, MS Excel).

Do you want a simple way of copying a hyperlink title and address in Markdown? The [Format Link](https://chrome.google.com/webstore/detail/format-link/pocemhmkmchpgamlnocemnbhlcjcbjgg) browser extension offers a quick and easy way to do this, along with allowing you to customize any number of other formats.

If you're looking for just the ability to copy something as Markdown, try these [Firefox add-ons](https://addons.mozilla.org/firefox/search/?q=copy+markdown) or [Chrome extensions](https://chrome.google.com/webstore/search/copy+markdown).

### Word to Markdown with Mammoth

Use the [Mammoth](https://github.com/mwilliamson/python-mammoth) library to convert `.docx` documents, such as those created by Microsoft Word, Google Docs and LibreOffice, and convert them to HTML/Markdown. Mammoth aims to produce simple and clean HTML/Markdown by using semantic information in the document, and ignoring other details.

1. Install Mammoth using `pip install mammoth`.[^1]
2. Convert `.docx` to `.md` using Mammoth by running `mammoth SomeWordDocument.docx SomeMdDocument.md --output-format=markdown`
3. Check the generated Markdown file and correct conversion issues and format it for the Handbook.

[^1]: [PyPi | Mammoth](https://pypi.org/project/mammoth/)

---

Is there anything missing on this page? Do you have a tip or trick not described here? Please submit a contribution!
