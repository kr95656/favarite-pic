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
https://gyazo.com/25b72416a5bd4141f2bcf3b22d79a5df

- トップページ投稿一覧  
https://gyazo.com/2c3768a25d43b1fd2011774871cedebe

- コメント機能  
https://gyazo.com/44bd283e1f6c7710511026a34f14333

- インクリメンタルサーチ機能  
https://gyazo.com/2066310facef463a33ff8e9139f828e7

- ユーザーの投稿した写真一覧ページ  
https://gyazo.com/d5a2131318b05c0730dbd0e1d1f19ca7

- カテゴリー毎に投稿された写真一覧ページ  
cap カテゴリー  
https://gyazo.com/2b60cffb7843a9da69bda1a265a2f0b3  

&nbsp; &ensp; 　…other カテゴリー  
&nbsp; &ensp; 　https://gyazo.com/193b892db2e4907edcc755407c8f9f3d


## 使用言語

バックエンド
Ruby -v 2.5.1
Ruby on Rails -v 5.2.3

フロントエンド
Haml
scss
JavaScript
jQuery

データベース
MySQL2 -v 5.6


## 使用技術

- CI/CDパイプラインの構築にcircleciを使用。
→CI/CDの使用により、テストを自動化することで品質を高め、その後のデプロイ作業も自動化することで
よりアジャイルな開発ができるようになる。
この一連の流れを経験したくて、導入しました。

- 開発環境、本番環境でDockerを使用。
→以下のメリットがあり、dockerを扱う企業さんが多いことから自身でもdockerを導入してみました。  
・複数人で開発する際に、環境の統一化によりエラーを減少させる。  
・開発と同一の環境でテストできる。  
・開発に使用したコンテナをCIでテスト、デプロイできる。  


## 開発環境

ローカル、本番環境でDockerを使用。


## 課題や今後実装したい機能

- デプロイ先をherokuからawsに変更
- フォロー機能
- like機能


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
