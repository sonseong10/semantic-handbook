#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd ./docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy with vuepress script'
git push -f https://github.com/sonseong10/semantic-handbook.git main:gh-pages

cd -