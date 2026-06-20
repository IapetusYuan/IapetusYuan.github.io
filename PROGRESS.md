# IapetusYuan.github.io 進度記錄

## 狀態：v1.1.0 已推送，GitHub Actions 部署中

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

### Phase 4 — 動畫精修 ✅
- TOC 元件：sticky 側欄、捲動進度條、active section 高亮（tocPulse）
- BlogLayout：雙欄佈局，heading 從 [slug].astro 傳入
- scroll-triggered reveal：IntersectionObserver 在 BaseLayout 啟動 .reveal 元素
- aiSoftGlow：Nav logo 脈衝光暈動畫（4.8s）
- aiShimmerLoop：global.css 定義，hero shimmer 文字使用
- pulsate：更新為 box-shadow 版本（innei.in 風格）

### Phase 5 — i18n ✅
- Nav：語言切換按鈕，自動從 URL 偵測語言，連結至對應版本
- i18n/translations.ts：所有 UI 字串 zh/en
- i18n/utils.ts：getLangFromUrl、getAlternatePath
- 英文頁面：/en/（首頁）、/en/blog、/en/blog/[slug]、/en/projects、/en/about

---

## 用戶待辦

1. **GitHub Pages 設定**：repo → Settings → Pages → Source 設為「GitHub Actions」
2. **上傳頭像**：放到 `public/avatar.png`（否則顯示 "BY" 文字 fallback）
3. **等待部署**：Actions 約 2-3 分鐘完成
4. **新增文章**：在 `src/content/blog/` 新增 `.md` 檔即可

## Git 狀態

- main：v1.1.0
- 已合併分支：feature/design-system, feature/homepage, feature/content-pages, feature/animations, feature/i18n
