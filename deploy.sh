#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run export

# navigate into the build output directory
cd out
touch .nojekyll

# cd _next
# touch .nojekyll
# cd ..

# if you are deploying to a custom domain
echo 'thammarith.dev' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# echo 'here'
# # if you are deploying to https://<USERNAME>.github.io
# git push -f https://github.com/thammarith/thammarith.github.io.git gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

npm run deploy

cd -