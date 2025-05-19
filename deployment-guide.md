# 珠宝分享平台部署指南

本指南将帮助您将珠宝分享平台部署到互联网上，使其可供全球用户访问。以下提供了几种简单易行的部署方法，您可以根据自己的需求和技术水平选择最适合的方案。

## 方法一：GitHub Pages 部署（免费，推荐新手）

GitHub Pages 是一个免费的静态网站托管服务，非常适合部署HTML/CSS/JavaScript网站。

### 步骤：

1. **创建GitHub账户**：如果您还没有账户，请在 [github.com](https://github.com) 注册。

2. **创建新仓库**：
   - 点击右上角 "+" 图标，选择 "New repository"
   - 仓库名称设置为 `jewelry-sharing-platform`
   - 保持仓库为"Public"（公开）
   - 点击 "Create repository"

3. **上传网站文件**：
   - 点击 "uploading an existing file" 链接
   - 将您的所有网站文件拖拽到上传区域（包括HTML、CSS、JS、图片等）
   - 点击 "Commit changes"

4. **启用GitHub Pages**：
   - 进入仓库设置（Settings）
   - 左侧菜单栏找到 "Pages"
   - 在 "Source" 部分，选择 "main" 分支，保存
   - 等待几分钟，您的网站将部署在类似 `https://yourusername.github.io/jewelry-sharing-platform` 的URL上

## 方法二：Netlify 部署（免费+高级方案）

Netlify 提供更高级的部署选项，包括自定义域名、表单处理等功能。

### 步骤：

1. **创建Netlify账户**：在 [netlify.com](https://www.netlify.com) 使用GitHub账户或邮箱注册。

2. **部署站点**：
   - 点击 "New site from Git"
   - 选择 GitHub 并授权访问
   - 选择您的 `jewelry-sharing-platform` 仓库
   - 点击 "Deploy site"

3. **自定义设置**：
   - 部署完成后，您可以在设置中更改站点名称（例如：`jewelry-share.netlify.app`）
   - 也可以添加自己的自定义域名
   - 配置更高级的功能，如表单提交处理、重定向规则等

## 方法三：Vercel 部署（免费+高级方案）

Vercel 类似于 Netlify，提供现代化的部署工具和服务。

### 步骤：

1. **创建Vercel账户**：在 [vercel.com](https://vercel.com) 注册账户。

2. **导入项目**：
   - 点击 "New Project"
   - 连接 GitHub 并选择您的仓库
   - 保留默认设置，点击 "Deploy"

3. **访问您的网站**：部署完成后，您可以通过 `jewelry-sharing-platform.vercel.app` 类似的域名访问您的网站。

## 方法四：传统虚拟主机部署

如果您需要更多控制权或有特定需求，可以使用传统虚拟主机服务。

### 步骤：

1. **选择虚拟主机提供商**：如阿里云、腾讯云、GoDaddy、BlueHost等。

2. **购买主机套餐**：选择适合静态网站的基础套餐即可。

3. **上传文件**：
   - 使用FTP客户端（如FileZilla）连接到您的主机
   - 将所有网站文件上传到主机的网站根目录

4. **设置域名**：
   - 购买域名（如果没有）
   - 在主机提供商的控制面板中将域名指向您的虚拟主机

## 部署后的优化建议

无论您选择哪种部署方式，以下优化步骤都能提升网站性能：

1. **启用HTTPS**：确保您的网站使用HTTPS加密连接（GitHub Pages、Netlify和Vercel默认支持）。

2. **图片优化**：
   - 压缩所有图片以减小文件大小
   - 考虑使用响应式图片，为不同设备提供适当大小的图片

3. **缓存策略**：设置合适的缓存头信息，减少重复请求。

4. **CDN加速**：考虑使用内容分发网络（如Cloudflare）提高全球访问速度。

5. **定期备份**：确保您的网站文件有备份，以防意外情况。

## 常见问题

**Q: 我的网站在本地运行正常，但部署后出现问题怎么办？**

A: 检查路径问题。本地文件路径和服务器路径可能不同。确保所有资源链接使用相对路径或正确的绝对路径。

**Q: 如何在部署后更新网站？**

A: 对于GitHub Pages、Netlify和Vercel，只需更新您的GitHub仓库，网站将自动重新部署。对于传统虚拟主机，使用FTP上传新文件。

**Q: 如何添加域名？**

A: 各平台都提供域名设置选项。购买域名后，按照平台说明进行DNS设置和验证即可。

---

如需更多帮助，请联系我们的技术支持团队。 