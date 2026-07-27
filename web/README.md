# 每日英文 Daily English — Website

一個**中英雙語**、每天自動更新的英文學習網站。純靜態，無需後端，可部署到 GitHub Pages。
A bilingual (Chinese/English) daily English-learning site. Fully static — no backend — deployable to GitHub Pages.

## 功能 Features

- 📘 **每日單字** Word of the day（拼字、音標、詞性、中文解釋、例句、發音）
- 💬 **每日片語** Phrase of the day（含中文與用法）
- 📖 **每日短文** Short reading（中英對照＋重點單字）
- 📝 **每日小測驗** Daily quiz（即時批改與解說）
- 🔥 連續學習天數 streak、🌙 深/淺色主題、顯示/隱藏中文、前後日切換
- 內容依「當天日期」自動輪替，每天打開都不一樣

## 檔案 Files

- `index.html` — 頁面結構
- `styles.css` — 樣式（響應式、深/淺色）
- `data.js` — 學習內容資料（`LESSONS` 陣列，一天一課，可自行增修）
- `app.js` — 依日期挑選當天課程、渲染內容、處理測驗與 streak

### 新增每日內容 How to add content

編輯 `data.js`，往 `LESSONS` 陣列再加一個物件即可（格式與現有項目相同）。
課程數量越多，輪替週期越長；`app.js` 會自動處理。

## 部署 Deployment (GitHub Pages)

由 `.github/workflows/deploy-pages.yml` 自動發布 `web/` 資料夾內容。

**一次性設定**（儲存庫擁有者）：
1. 進入 **Settings → Pages**
2. **Build and deployment → Source** 選擇 **GitHub Actions**

之後每次推送到 `master` 且改到 `web/**`，網站就會自動重新發布。

## 本機預覽 Local preview

```bash
cd web
python3 -m http.server 8000
# 開啟 http://localhost:8000
```
