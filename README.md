# 悦见｜女性AI成长社群 品牌启动包网页

## 运行方式

```bash
npm install
npm run dev
```

默认地址：`http://localhost:5173`

## 页面路径

- 首页宣传落地页：`/`
- 品牌介绍页：`/brand`
- 招募海报（3张）：`/posters`
- 社群介绍长图：`/long-intro`
- 欢迎页 H5：`/welcome`

## 二维码替换说明

当前二维码区域为 CSS 占位框（无图片文件）。
你可以在 `src/App.jsx` 中搜索“二维码占位｜后期替换”，将该区块替换为真实二维码组件或 SVG。

## 项目说明

- 使用 React + Vite + Tailwind CSS 实现。
- 所有视觉元素由 HTML/CSS/渐变/卡片构建，无新增图片或二进制文件。
- 文案集中在 `src/content.js`（导航、品牌基础字段）并在页面中使用。
