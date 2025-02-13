# 動画生成プロンプトジェネレーター

動画生成AIのためのプロンプトを簡単に作成できるWebアプリケーションです。映像表現スタイル、カメラアングル、演出方法などを直感的に選択し、構造化されたプロンプトを生成できます。

## 特徴

- 映像表現スタイルの階層的な選択
- カメラアングルと制御方法の詳細な指定
- 演技や感情表現の選択
- 特定の映画風の表現スタイル選択
- レスポンシブデザイン対応
- クリップボードへのコピー機能

## 使用方法

このアプリケーションはクライアントサイドのみで動作し、サーバーは必要ありません。以下の方法で実行できます：

1. このリポジトリをクローンまたはダウンロード：
```bash
git clone https://github.com/yourusername/video-prompt-generator.git
```

2. ダウンロードしたフォルダを開き、`index.html`をWebブラウザで開くだけで実行できます。

または、

- ZIPファイルをダウンロードして解凍し、`index.html`をブラウザで開いてください。

## ファイル構成

- `index.html`: メインのHTMLファイル
- `styles.css`: スタイルシート
- `script.js`: JavaScriptコード（データと機能の実装）

## 動作環境

- モダンなWebブラウザ（Chrome, Firefox, Safari, Edge等の最新版）
- インターネット接続は不要
- 特別なソフトウェアのインストールは不要

## カスタマイズ

`script.js`内の以下のデータオブジェクトを編集することで、選択肢をカスタマイズできます：

- `styleData`: 映像表現スタイル
- `angleData`: カメラアングル
- `cameraControlData`: カメラ制御
- `movieStyleData`: 映画風スタイル

## ライセンス

MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## コントリビューション

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 作者

[Your Name]

## 謝辞

このプロジェクトは以下のテクノロジーとリソースを使用しています：

- HTML5
- CSS3
- JavaScript (ES6+) 