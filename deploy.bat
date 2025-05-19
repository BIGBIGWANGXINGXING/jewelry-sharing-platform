@echo off
echo 珠宝分享平台部署脚本
echo =====================================
echo 此脚本将帮助您将网站部署到GitHub Pages
echo.

REM 检查git是否安装
where git >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo 错误: 未检测到Git安装。请先安装Git: https://git-scm.com/download/win
    goto :EOF
)

REM 检查当前目录是否为git仓库
if not exist .git (
    echo 初始化Git仓库...
    git init
    if %ERRORLEVEL% neq 0 (
        echo 错误: 无法初始化Git仓库
        goto :EOF
    )
)

echo.
echo 请输入您的GitHub用户名:
set /p username=

echo.
echo 请输入您要部署的GitHub仓库名称(默认: jewelry-sharing-platform):
set /p reponame=
if "%reponame%"=="" set reponame=jewelry-sharing-platform

REM 检查远程仓库是否已配置
git remote -v | findstr origin >nul
if %ERRORLEVEL% neq 0 (
    echo 配置远程仓库...
    git remote add origin https://github.com/%username%/%reponame%.git
) else (
    echo 更新远程仓库...
    git remote set-url origin https://github.com/%username%/%reponame%.git
)

echo.
echo 添加所有文件到Git...
git add .

echo.
echo 提交更改...
git commit -m "部署更新: %date% %time%"

echo.
echo 推送到GitHub...
git push -u origin master

echo.
echo 部署完成！
echo 您的网站将在几分钟内可通过以下地址访问:
echo https://%username%.github.io/%reponame%
echo.
echo 如需自定义域名或进一步配置，请访问:
echo https://github.com/%username%/%reponame%/settings/pages
echo.
echo 按任意键退出
pause >nul 