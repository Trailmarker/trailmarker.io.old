#!/bin/bash

rev=$(git rev-parse HEAD)
remoteurl=$(git ls-remote --get-url origin)

if [[ ! -d gh-pages ]]; then
    git clone --branch master ${remoteurl} gh-pages
fi
(
cd gh-pages
git pull
)

rm -rf target
shadow-cljs release index
boot build
cp -r target/public/* gh-pages

cd gh-pages

git add --all
git commit -m "build site from ${rev}"
git push origin master
