class CreateRideRequests < ActiveRecord::Migration[6.0]
  def change
    create_table :ride_requests do |t|
      t.string :status
      t.date :ride_date
      t.time :ride_time
      t.references :user, null: false, foreign_key: true
      t.references :customer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
