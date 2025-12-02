# 2025 年度績效報告網頁

這是一個使用 Vite + React + TypeScript 建立的績效展示網頁，方便您展示年度績效給主管 Review。

## 功能特色

- 📊 **KPI 指標展示** - 圖表化呈現關鍵績效指標達成狀況
- 🏆 **重大成就** - 展示年度重要成就與貢獻
- 💼 **專案經歷** - 詳細列出參與的專案與角色
- 🎯 **技能評估** - 雷達圖呈現技能水平與成長
- ✅ **年度目標** - 追蹤目標完成進度
- 💬 **360度回饋** - 收集各方面的評價回饋
- 🖨️ **列印功能** - 支援列印成 PDF 報告

## 快速開始

### 安裝依賴
```bash
npm install
```

### 啟動開發伺服器
```bash
npm run dev
```

### 建置生產版本
```bash
npm run build
```

## 如何使用

### 1. 編輯您的績效資料

打開 `src/data/performanceData.ts` 檔案，將範例資料替換成您自己的績效資料：

```typescript
export const performanceData: PerformanceData = {
  personalInfo: {
    name: '您的姓名',
    title: '您的職稱',
    department: '您的部門',
    // ...
  },
  // 繼續編輯其他資料...
};
```

### 2. 資料結構說明

| 區塊 | 說明 |
|------|------|
| `personalInfo` | 個人基本資料 |
| `summary` | 績效摘要與評分 |
| `kpis` | 關鍵績效指標 |
| `achievements` | 重大成就 |
| `projects` | 專案經歷 |
| `skills` | 技能評估 |
| `goals` | 年度目標 |
| `feedback` | 360度回饋 |

### 3. 預覽與分享

- 執行 `npm run dev` 啟動本機伺服器預覽
- 點擊右上角「列印報告」按鈕可列印或儲存為 PDF
- 執行 `npm run build` 產生靜態檔案，可部署到任何網頁伺服器

## 技術架構

- **Vite** - 快速的前端建置工具
- **React 19** - 使用者介面框架
- **TypeScript** - 型別安全的 JavaScript
- **Tailwind CSS** - 實用優先的 CSS 框架
- **Chart.js** - 圖表視覺化

## 自訂樣式

如需調整樣式，可編輯：
- `src/index.css` - 全域樣式與自訂類別
- `tailwind.config.js` - Tailwind 配置

## 授權

MIT License
