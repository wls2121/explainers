# Setup + how to publish

After the repo exists, adding an explainer is: say "add to my learning library"
in Cowork → it writes the page → you run the publish command below.

## Publishing (every time)

One copy-paste line, works from any directory:

```bash
cd "/Users/willstamatis/Documents/Claude/Projects/Weekly Sales Brief/claude-explainers" && git add -A && git commit -m "add explainer" && git push
```

That's the whole step. Give Pages ~1 min, then the page is live. (Cowork only
writes the files — it never runs git, so the publish is always yours.)

## 1. The repo (already done)

Done on 2026-06-29 — the repo is live at `github.com/wls2121/explainers`, served at
`https://wls2121.github.io/explainers/`. Kept here for reference if you ever rebuild:
`gh repo create explainers --public --source=. --remote=origin --push`, then
Settings → Pages → deploy from `main` / root.

## 2. Optional: a `pub` shortcut

You don't need this — the publish command above is enough. But if you'd rather type
three letters, add this to `~/.zshrc`:

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
