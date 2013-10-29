class Event < ActiveRecord::Base

  validates :title, presence: true
  validates :starts_at, presence: true
  validates :ends_at, presence: true

end
