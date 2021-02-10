package entity

// Impression : テーブル[name]のモデル
type Impression struct {
	NameID    string `gorm:"type:varchar(11);primaryKey"`
	Masculine float64
	Feminine  float64
}
