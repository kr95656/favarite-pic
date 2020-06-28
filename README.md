# README

## アプリ名  

FASHION PIC POST
  
  
## 概要  
  
- お気に入りのファッション写真を投稿し、他ユーザーは投稿写真にコメントできます。  
  
- タグ毎にファッション写真の閲覧ができます。  
  
- 写真を検索できます。  
    
    
## アプリの構成    
    
![](.drawio.svg)  
  
  
## 本番環境  
  
- デプロイ先 → heroku  
- アプリ url → https://sheltered-bayou-43086.herokuapp.com/  
- テストログイン（TEST Log in からログインできます) → https://sheltered-bayou-43086.herokuapp.com/users/sign_in  
  
  
## 制作背景

スクールで学んだRailsの基礎知識の定着が浅いと感じて、
下記を意識して個人アプリを作成しました！

- モデル間のアソシエーション  
- device導入によるユーザー管理機能  
- 7つのアクション+searchアクション  
- Ajaxによるコメント機能の非同期通信  
- インクリメンタルサーチ機能  


## DEMO

- トップページheader部分  
![image](https://user-images.githubusercontent.com/64628395/85689490-a2ae2100-b70d-11ea-8999-92aca55dffbb.png)
  
- トップページ投稿一覧  
![image](https://user-images.githubusercontent.com/64628395/85689999-1819f180-b70e-11ea-9024-1df327268b37.png)  
  
- コメント機能    
![demo](https://gyazo.com/4f9a6e156081104a3461b0f6f511633b/raw)  
  
- インクリメンタルサーチ機能   
![demo](https://gyazo.com/e93447197e4692fe1e0f8c1174b344b6/raw)  
  
- ユーザーの投稿した写真一覧ページ    
![image](https://user-images.githubusercontent.com/64628395/85699039-266c0b80-b716-11ea-87f5-689216e37ce0.png)  
   
- カテゴリー毎に投稿された写真一覧ページ  
cap カテゴリー  
![image](https://user-images.githubusercontent.com/64628395/85699342-66cb8980-b716-11ea-8466-46e232b039db.png)
  
&emsp; &nbsp; …other カテゴリー
&emsp; &nbsp; ![image](https://user-images.githubusercontent.com/64628395/85699599-a1352680-b716-11ea-9335-c79fbf80f448.png)  


## 使用言語

- バックエンド  
Ruby -v 2.5.1  
Ruby on Rails -v 5.2.3  

- フロントエンド  
Haml  
scss  
JavaScript  
jQuery  

- データベース  
MySQL2 -v 5.6  


## 使用技術

- CI/CDパイプラインの構築にcircleciを使用。  
→ CI/CDの使用により、テストを自動化することで品質を高め、その後のデプロイ作業も自動化することで
よりアジャイルな開発ができるようになります。この一連の流れを経験したくて、導入しました。

- 開発環境、本番環境でDockerを使用。  
→ 以下のメリットがあり、dockerを扱う企業さんが多いことから自身でもdockerを導入してみました。  
・複数人で開発する際に、環境の統一化によりエラーを減少させる点。  
・開発と同一の環境でテストできる点。  
・開発に使用したコンテナをCIでテスト、デプロイできる点。  
  
- viewへのレスポンシブ対応。  
→ 各デバイス(スマホ、タブレット、PC)のサイズ毎にレスポンジブを対応させました。  
![demo](https://gyazo.com/5877c777634f8760f8ef86df80fba296/raw)  
・スマホサイズ（width 320px~767px）  
・タブレットサイズ（width 767px ~ 1023px）  
・PCサイズ（width 1023px ~ )  


## 開発環境

ローカル、本番環境でDockerを使用。


## 課題や今後実装したい機能

- デプロイ先をherokuからawsに変更  
→ 通信速度が遅く、これを解決するにはTokyoリージョンが使えようになるHeroku Private Spacesを利用することが望ましいと考えました。しかし、個人で契約するには少々手間がかかるとのことで、Tokyoリージョンが使えるawsへの変更を検討しています。
- フォロー機能  
→ twitterで取り入れられている技術を習得することで新たな学びになると思い、実装する予定です。
- like機能  
→ twitterで取り入れられている技術を習得することで新たな学びになると思い、実装する予定です。


## DB設計

### itemsテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|length: 32|
|title|text|null: false|
|image|text|null: false|
|user_id|integer|null: false, foreign_key: true|

#### Association

-has_many :item_tags, dependent: :destroy  
-has_many :tags, through: :item_tags, dependent: :destroy  
-has_many :comments, dependent: :destroy  
-belongs_to :user  


### commentsテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|item_id|integer|null: false, foreign_key: true|

#### Association

-belongs_to :user  
-belongs_to :item  


### item_tagsテーブル

|Column|Type|Options|
|------|----|-------|
|item_id|integer|foreign_key: true|
|tag_id|integer|foreign_key: true|

#### Association

-belongs_to :item  
-belongs_to :tag  


### tagsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

#### Association

-has_many :item_tags, dependent: :destroy  
-has_many :items, through: :item_tags, dependent: :destroy  


### usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false, unique: true|
|encrypted_password|string|null: false|
|username|string|null: false, unique: true|
|reset_password_token|string|unique: true|
|encrypted_password|string|null: false|
|group_id|integer|null: false, foreign_key: true|

#### Association

-has_many :items, dependent: :destroy  
-has_many :comments, dependent: :destroy  
