# 每日英文 Daily English — 科技・AI・商務

一個**中英雙語**、每天自動更新的英文學習網站，題材聚焦**科技 Tech、AI、商務 Business**。
純靜態、無需後端，可部署到 GitHub Pages。
A bilingual daily English-learning site focused on tech / AI / business news. Fully static.

## 功能 Features

- 📘 **每日單字** — 內建 **380 個** 科技/AI/商務/通用單字（約**一年不重複**），含詞性、中文、發音、自動例句
- 📰 **每日新聞短文** — 以**真實 2026 新聞**改寫（學習者程度），中英對照＋重點字＋**原始新聞連結**
- 💬 **每日片語** + 📝 **每日小測驗**（自動出題＋即時批改解說）
- 🔎 **點單字即時查意思** — 先查內建詞庫（離線即時），查不到再用線上字典/翻譯
- ✍️ **選句子即時翻譯** — 選取任一句/段，跳出「翻譯」按鈕顯示繁中
- 📄 **貼上任何文章** — 把任何英文新聞貼進閱讀器，一樣能點字查意思、選句翻譯
- 🔥 連續學習天數、🌙 深/淺色主題、顯示/隱藏中文、前後日切換

> 即時查詢用到兩個免費公開 API：單字英英解釋 `dictionaryapi.dev`、
> 中文翻譯 `MyMemory`。它們在使用者瀏覽器端呼叫、支援 CORS；若暫時無法連線，
> 內建詞庫仍可離線即時顯示我們教過的字。

## 檔案 Files

- `index.html` — 頁面結構
- `styles.css` — 樣式（響應式、深/淺色、查詢彈窗）
- `wordbank.js` — 每日單字庫（`WORDBANK`，380 字，`{term,pos,zh,cat}`，可自行增修）
- `data.js` — 新聞短文（`NEWS`，含分類、來源連結、片語、測驗）
- `app.js` — 依日期挑選內容、點字查詢、選句翻譯、閱讀器、測驗、streak、主題
- `.github/workflows/deploy-pages.yml` — 自動發布 `web/` 到 GitHub Pages

### 新增內容 How to add content

- 單字：在 `wordbank.js` 的 `WORDBANK` 加一筆 `{term,pos,zh,cat}`（cat 用 AI/Tech/Business/General）
- 新聞：在 `data.js` 的 `NEWS` 加一則，照現有格式填 `category / source_url / en / zh / vocab / quiz / phrase`

## 部署 Deployment (GitHub Pages)

由 `.github/workflows/deploy-pages.yml` 自動發布 `web/`。
**一次性設定**：儲存庫 **Settings → Pages → Source** 選 **GitHub Actions**。
之後推送到 `master` 且改到 `web/**` 就會自動重新發布。

## 本機預覽 Local preview

```bash
cd web
python3 -m http.server 8000   # 開啟 http://localhost:8000
```
