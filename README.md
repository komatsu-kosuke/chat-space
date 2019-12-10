# README

usersテーブル

|Column|Type|Options|
|------|----|-------|
|password|integer|null: false
|email|string|null: false
|nickname|string|null: false

### Association
- has_many :groups, through: :group_users
  has_many :group_users
- has_many :messages

groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false

### Association
- has_many :users, through: :group_users
  has_meny :group_users
- has_many :messages


groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|text|text|
|image|string|

### Association
- belongs_to :group
- belongs_to :user

