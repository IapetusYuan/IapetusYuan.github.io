# IapetusYuan.github.io 進度記錄

## 狀態：v1.0.0 已推送，等待 GitHub Actions 部署

---

## 已完成

### Phase 0 — 專案初始化 ✅
- Astro v4 專案建立（Node 20 相容）
- git remote 連接 IapetusYuan/IapetusYuan.github.io
- GitHub Actions 部署工作流（.github/workflows/deploy.yml）
- 初始 commit 推送 main

### Phase 1 — 設計系統 ✅
- `src/styles/global.css`：OKLCH --hue:24 橘色系，Instrument Sans + JetBrains Mono
- `src/components/StarCanvas.astro`：Canvas 連線星座，滑鼠近星發亮
- `src/components/Nav.astro`：固定 blur navbar，active 狀態偵測
- `src/components/Footer.astro`：簡潔 mono footer
- `src/layouts/BaseLayout.astro`：meta、星空、nav/footer 殼層
- `src/layouts/BlogLayout.astro`：文章 prose 樣式

### Phase 2 — 首頁 ✅
- Hero：動畫 tag、blink cursor、shimmer 文字、技能標籤、CTA 按鈕
- Author card：浮動頭像（fallback 文字 BY）、橘色下劃線、GitHub/Email 社群連結
- 最新文章預覽（編號列表）
- 精選作品 2 欄（含媒體徽章）
- RWD：手機單欄

### Phase 3 — 內容頁面 ✅
- Blog 列表：Tag 過濾器、年份分組、hover 動畫
- Blog 文章：`[slug].astro` 動態路由，Astro content collections
- 範例文章：tmux 完整使用指南（中文）
- Projects：6 張作品卡（真實履歷內容）
- About：時間軸工作/學歷、技術棧分類、頭像

---

## 待完成

### Phase 4 — 動畫精修（未開始）
- aiShimmerLoop、aiSoftGlow（參考 innei.in）
- tocPulse、fadeInOut（參考 blog.yuuzi.cc）
- 文章 TOC 側欄 + 滾動高亮

### Phase 5 — i18n（未開始）
- 中/英切換按鈕
- /en/ 路由前綴
- 翻譯檔

---

## 用戶待辦

1. **GitHub Pages 設定**：repo → Settings → Pages → Source 設為「GitHub Actions」
2. **上傳頭像**：放到 `public/avatar.jpg`（否則顯示 "BY" 文字 fallback）
3. **等待部署**：Actions 約 2-3 分鐘完成
4. **新增文章**：在 `src/content/blog/` 新增 `.md` 檔即可

## Git 狀態

- main：v1.0.0
- 已合併分支：feature/design-system, feature/homepage, feature/content-pages
