# math-practice-generator

小学1年生向けの算数マトリクス計算プリントを自動生成するWebアプリケーションです。

## 機能

- **たしざん / ひきざん** の切り替え
- 数字の並び順：**じゅんばん（1〜9）** または **ランダム**
- 「もんだいをつくる」ボタンでランダム問題を再生成
- **A4縦向き**でブラウザ印刷（PDF出力）に対応

### 問題生成ルール

| 演算 | 条件 | "ー" が表示されるマス |
|------|------|----------------------|
| たしざん | 答えが 10 以下のみ | 答えが 11 以上になるマス |
| ひきざん | 答えが 0 以上のみ | 答えがマイナスになるマス |

## 動作環境

- Node.js 18 以上
- Google Chrome / Microsoft Edge（印刷推奨）

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 印刷方法

1. ブラウザで問題を表示する
2. 「印刷する」ボタンをクリック、または `Ctrl+P`
3. 用紙サイズを **A4 縦向き**、余白を **なし** に設定して印刷

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **フォント**: BIZ UDPGothic（システムフォント使用）

## ディレクトリ構成

```
src/
├── app/
│   ├── page.tsx         # メイン画面（設定UI ＋ プレビュー）
│   ├── layout.tsx       # ページレイアウト
│   └── globals.css      # グローバルCSS（印刷スタイル含む）
├── components/
│   └── MatrixPrint.tsx  # A4プリントプレビューコンポーネント
└── lib/
    └── generators/
        ├── index.ts        # 共通型定義（MatrixPageData）
        ├── addition.ts     # 足し算ロジック
        └── subtraction.ts  # 引き算ロジック
```
