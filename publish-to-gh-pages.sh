#!/bin/bash

git init
git remote add origin ssh://git@github/quangkr/funix_web101x.git
git add .
git commit -m 'Publishing'
git push origin main:gh-pages --force
rm -rf .git
