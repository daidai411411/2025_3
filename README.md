# プロダクト名

<!-- プロダクト名・イメージ画像を差し変えてください -->

育て天保山

<img width="478" alt="プロダクト名" src="https://github.com/user-attachments/assets/6daa2541-c0b4-4506-aec1-718d90a79233" />

## チーム名

<!-- チームIDとチーム名を入力してください -->
チーム3 サクサク.wav

## 背景・課題・解決されること

<!-- テーマ「関西をいい感じに」に対して、考案するプロダクトがどういった(Why)背景から思いついたのか、どのよう(What)な課題があり、どのよう(How)に解決するのかを入力してください -->
関西を捉える新たな視点として、私たちは「地理的な特徴」を考えてみました。
その結果、日本一低い山として有名な天保山をメインテーマとして、関西の様々なランドマークの「高さ」に注目したプロダクトを作ろうという考えに至りました。
そこで、「天保山を育ててめっちゃでかい山にする」というアイデアがうまれ、天保山を育てるゲームを作ることに決まりました。

「高さ」という視点から関西を見る、そして天保山を育てる、そんな新鮮な体験を皆様にお届けします。

## プロダクト説明

<!-- 開発したプロダクトの説明を入力してください -->
このゲームは、知る人ぞ知るゲーム「クッキークリッカー」のようなシステムを採用しています。天保山をクリックすると、山に土が盛られていき、どんどん高くしていきます。山が成長していくにつれて、様々な関西のランドマークを「吸収」していきます。吸収した施設の収益を使って、土を盛る道具や施設自体をアップグレードすることができます。ひたすらクリックして、ひたすらお金と標高を稼いでいきましょう！

## 操作説明・デモ動画

<!-- 開発したプロダクトの操作説明について入力してください。また、操作説明デモ動画があれば、埋め込みやリンクを記載してください -->

ゲーム画面は以下の画像のようになります。操作対象は大きく

- 天保山
- 道具ウィンドウ
- 施設ウィンドウ
- 収益ストックバー
- メニューボタン

の5つに分けられます。

<img width="1470" alt="ゲーム画面" src="https://github.com/user-attachments/assets/f56aea3c-b3ed-4998-a2fc-97bc31f355c4" />


### 天保山

画面中央に鎮座している緑色の山が天保山です。クリックすると、現在の道具レベルに応じた量の土を盛ることができ、標高が上がっていきます。

ある程度標高が高くなると、画面上に黄色い線が出現します(下の画像)。

<img width="831" alt="ランドマーク線" src="https://github.com/user-attachments/assets/0558ddf2-0238-4506-96c0-6b9664995d25" />


これは、関西のとあるランドマークの高さを示しています。この高さまで山を大きくすると、、、

<img width="570" alt="Tips" src="https://github.com/user-attachments/assets/7da58e57-585c-42c0-bb09-1b9e7c1a8ed1" />


上の画像のように、そのランドマークのTipsが画面上に表示されます。ランドマークによっては、新たに施設を獲得することができます(下の画像)。

<img width="458" alt="施設アンロック" src="https://github.com/user-attachments/assets/f7e3afbe-1ed6-4bac-93f7-530d615c25e8" />


### 道具ウィンドウ

画面左上の「道具」と書かれているウィンドウに、現在の道具レベルとその道具名が表示されます。お金を使って道具をレベルアップさせることができます。一定のレベルに到達すると、どんどん道具が強くなっていきます。

### 施設ウィンドウ

画面左下の「施設」と書かれているウィンドウに、現在所有している施設のレベルが表示されます。アンロック済みの施設にマウスカーソルを合わせると、その施設のちょっとした説明文や収益効率などを見ることができます(下の画像)。

<img width="671" alt="施設ポップアップ" src="https://github.com/user-attachments/assets/09e78f55-2e30-41b6-9ce8-57ccede00edb" />


十分なお金を所有している状態で、施設の項目をクリックすると、施設をレベルアップされることができます。施設の収益効率は、その施設のレベルが高いほど、また天保山の標高が高いほど大きくなっていきます。

### 収益ストックゲージ

画面下部の「収益」と書かれたゲージに、現在施設から得られた収益のストック量が表示されています。マウスカーソルを合わせると、実際にどのくらいの収益がストックされているかを確認できます(下の画像)。

<img width="572" alt="収益ストックゲージ" src="https://github.com/user-attachments/assets/2372c0db-3f7f-4836-bd20-4a7f76831d91" />


ストックには上限があり、定期的にゲージをクリックして回収する必要があります。ストック中のお金はレベルアップに使用できないので、欠かさず回収しましょう。

### メニューボタン

画面右上のメニューボタンをクリックすると、詳細なパラメータ情報を閲覧できます(下の画像)。

<img width="286" alt="メニュー" src="https://github.com/user-attachments/assets/77f0e132-4978-49b7-a2b3-9f7f268e1af3" />


Name: ユーザーネーム。自由に変更できる  
Sand: 天保山の総重量  
Elevation: 天保山の標高  
Money: 所持金  
Tool Level: 道具レベル

## 注力したポイント

<!-- 開発したプロダクトの中で、特に注力して作成した箇所・ポイントについて入力してください -->
### アイデア面

「お金」と「標高」という2つのパラメータを用意することにより、

- 「お金」で土を盛る道具をアップグレード  
→ 「標高」がもっと高く

- 「標高」が高くなると収益効率アップ  
→ 「お金」がもっと高く

という「天保山育成スパイラル」を生み出すことに成功しました！

### デザイン面

ReactのためのUIライブラリであるMaterial UIを利用し、スタイリッシュなUIデザインを実現しました。

標高や施設のレベルに応じて画面を動的に変化させることで、プレイヤーは操作に対する適切なフィードバックを得られます。

### その他

ブラウザでページを閉じたりリロードしたりしても、進捗状況が保存されるようにしました。

## 使用技術

<!-- 使用技術を入力してください -->
React

<!--
markdownの記法はこちらを参照してください！
https://docs.github.com/ja/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
-->
