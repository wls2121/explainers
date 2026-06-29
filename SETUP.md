# One-time setup + the `pub` alias

Do this once. After that, adding an explainer is: say "add to my learning library"
in Cowork → it writes the page and commits → you run `pub`.

## 1. Make the repo (once)

On your Mac, in a terminal:

```bash
cd "/Users/willstamatis/Documents/Claude/Projects/Weekly Sales Brief/claude-explainers"
git init
git add -A
git commit -m "first explainers"
```

Create an empty repo on GitHub (personal account) named `explainers`, then:

```bash
git remote add origin git@github.com:YOURNAME/explainers.git
git branch -M main
git push -u origin main
```

Turn on Pages: GitHub → repo → **Settings → Pages → Source: deploy from branch →
`main` / root → Save.** ~1 min later it's live at
`https://YOURNAME.github.io/explainers/`.

## 2. The `pub` alias (once)

This is the whole "one step." Add it to `~/.zshrc`:

```bash
echo 'alias pub='"'"'git -C "/Users/willstamatis/Documents/Claude/Projects/Weekly Sales Brief/claude-explainers" add -A && git -C "/Users/willstamatis/Documents/Claude/Projects/Weekly Sales Brief/claude-explainers" commit -m "update explainers" --allow-empty && git -C "/Users/willstamatis/Documents/Claude/Projects/Weekly Sales Brief/claude-explainers" push'"'"'' >> ~/.zshrc
source ~/.zshrc
```

Now whenever the skill has staged a new page, you just type:

```bash
pub
```

…and it's live. The skill already does the page + index + commit; `pub` re-stages
anything and pushes. If you'd rather keep the skill's own commit message, just run
`git -C "<path>" push` instead.

## Why no stored token

The Cowork sandbox is ephemeral and doesn't carry your GitHub credentials — so the
skill builds and commits, but the push stays on your machine where your real git
auth lives. That keeps a push token out of a folder whose whole job is publishing
publicly. `pub` makes the push a non-event; that's the better trade.
