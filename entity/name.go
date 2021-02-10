package entity

// Name : テーブル[name]のモデル
type Name struct {
	NameID string `gorm:"type:varchar(11);primaryKey"`
	Name   string `gorm:"type:varchar(32)"`
}
