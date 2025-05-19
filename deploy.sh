#!/bin/bash

echo "珠宝分享平台部署脚本"
echo "====================================="
echo "此脚本将帮助您将网站部署到GitHub Pages"
echo ""

# 检查git是否安装
if ! command -v git &> /dev/null; then
    echo "错误: 未检测到Git安装。请先安装Git。"
    exit 1
fi

# 检查当前目录是否为git仓库
if [ ! -d .git ]; then
    echo "初始化Git仓库..."
    git init
    if [ $? -ne 0 ]; then
        echo "错误: 无法初始化Git仓库"
        exit 1
    fi
fi

echo ""
echo "请输入您的GitHub用户名:"
read username

echo ""
echo "请输入您要部署的GitHub仓库名称(默认: jewelry-sharing-platform):"
read reponame
if [ -z "$reponame" ]; then
    reponame="jewelry-sharing-platform"
fi

# 检查远程仓库是否已配置
if ! git remote -v | grep -q origin; then
    echo "配置远程仓库..."
    git remote add origin "https://github.com/$username/$reponame.git"
else
    echo "更新远程仓库..."
    git remote set-url origin "https://github.com/$username/$reponame.git"
fi

echo ""
echo "添加所有文件到Git..."
git add .

echo ""
echo "提交更改..."
git commit -m "部署更新: $(date)"

echo ""
echo "推送到GitHub..."
git push -u origin master

echo ""
echo "部署完成！"
echo "您的网站将在几分钟内可通过以下地址访问:"
echo "https://$username.github.io/$reponame"
echo ""
echo "如需自定义域名或进一步配置，请访问:"
echo "https://github.com/$username/$reponame/settings/pages"
echo ""
echo "按Enter键退出"
read 