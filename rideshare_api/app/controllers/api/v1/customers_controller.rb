class Api::V1::CustomersController < Api::ApplicationController
  before_action :find_customer, only: [:show,:update, :destroy]

  def index
    customers = Customer.order(created_at: :desc)
    render(json: customers)
  end

  def create
    customer = Customer.new customer_params
    
    if customer.save
        session[:customer_id] = customer.id
         render json: { id: customer.id }
      
    else
      render(
        json: { errors: customer.errors },
        status: 422
      )
    end
  end

  def show
    @customer = Customer.find(params[:id])
    render(json: @customer)
  end

  def update
    if @customer.update customer_params
      render json: {id: @customer.id}
    else
      render(
      json:{ errors: @customer.errors},
      status: 422)
    end
  end

  def destroy
    @customer.destroy
    render(json: {errors: @customer.errors}, status:200)
  end

  private
  
  def find_customer
    @customer||=Customer.find params[:id]
  end

  def customer_params
    params.permit(
      :first_name, :last_name, :email, :password, :password_confirmation, 
    :address , :destination_address, :latitude, :longitude, :phone_number)
  end
end
