# README

usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|password|integer|null: false, foreign_key: true|
|email|integer|null: false, foreign_key: true|
|nickname|integer|null: false, foreign_key: true|

### Association
- has_many :groups, through: :group_user
- has_many :message

groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, foreign_key: true|
|title|integer|null: false, foreign_key: true|

### Association
- has_many :users, through: :group_user
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
|text|integer|null: false, foreign_key: true|
|image|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


