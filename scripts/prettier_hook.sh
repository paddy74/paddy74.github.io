#!/usr/bin/env bash

if ! [[ -f "./node_modules/.bin/prettier" && -x "./node_modules/.bin/prettier" ]]; then
    printf %s\n "prettier was not found or was not executable." >&2
    exit 1
fi

FILES=$(git diff --cached --name-only --diff-filter=ACMR | sed 's| |\\ |g')
[ -z "$FILES" ] && exit 0

# Prettify all selected files
echo "$FILES" | xargs ./node_modules/.bin/prettier --ignore-unknown --write

# Add back the modified/prettified files to staging
echo "$FILES" | xargs git add

exit 0
