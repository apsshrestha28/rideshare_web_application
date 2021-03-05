class AddDestinationAddressToCustomers < ActiveRecord::Migration[6.0]
  def change
    add_column :customers, :destination_address, :string
  end
end
