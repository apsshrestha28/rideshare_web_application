class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :description
      t.string :email, index: {unique: true}
      t.string :password_digest
      t.string :address
      t.string :phone_number
      t.string :driver_license_number

      t.timestamps
    end
  end
end
