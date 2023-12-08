#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 删除public文件
rm -rf public

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# 获取当前时间并格式化为指定格式
# current_date=$(date "+%Y-%m-%d %H:%M:%S")

git init
git add -A
git commit -m "update"

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/chenglinxing/blogs.git master
git push -f https://github.com/chenglinxing/chenglinxing.github.io.git master

# 删除public文件
rm -rf public

cd -