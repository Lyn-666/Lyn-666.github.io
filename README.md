# Lin (Lynn) Zhu — Personal Website

公开主页地址：https://lyn-666.github.io/

## 发布到 GitHub Pages

本网站使用根目录的 `index.html` 和 `static/`，无需 Python 后端或付费服务器。

1. 将修改提交并推送到 GitHub 仓库 `Lyn-666/Lyn-666.github.io` 的 `main` 分支。
2. 在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
3. 在 **Actions** 中查看 **Deploy static content to Pages**。如需手动发布，选择 **Run workflow**，分支选 `main`。
4. 等待部署成功后访问 https://lyn-666.github.io/ 。首次发布可能需要几分钟；在 Pages 设置中启用 **Enforce HTTPS**（可用时）。

如使用 GitHub 免费账户，请确保仓库为 Public。访客访问已发布的网站无需登录 GitHub。
工作流仅发布 `index.html`、`.nojekyll` 和 `static/`，不包含 Flask 源码或模板。
以后更新这些网页文件并推送到 `main`，网站会自动重新部署。

## 本地预览

在仓库根目录运行：

```sh
python3 -m http.server 8000
```

浏览器打开本机的 8000 端口即可。GitHub Pages 不运行 `app.py`；修改 `templates/` 不会改变公开主页，请编辑 `index.html`。
外部字体和图标需要访客能够连接对应的 CDN。
