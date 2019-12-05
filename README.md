# README

usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|password|integer|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|
|nickname|string|null: false, foreign_key: true|

### Association
- has_many :groups, through: :group_user
  has_many :groups
- has_many :message

groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|title|string|null: false, foreign_key: true|

### Association
- has_many :users, through: :group_user
  has_meny :users
- has_many :message


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
|text|text|null: false, foreign_key: true|
|image|string|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

