class Api::V1::UsersController < Api::ApplicationController
  before_action :find_user, only: [:show,:update, :destroy]


  def index
    users = User.order(created_at: :desc)
    render(json: users)
  end

  def create
    user = User.new user_params

    if user.save  
        session[:user_id]=user.id
         render json: { id: user.id }
      
    else
      render(
        json: { errors: user.errors },
        status: 422
      )
    end
  end

  def show
    @user = User.find(params[:id])
    render(json: @user)
  end

  def update
    if @user.update user_params
      render json: {id: @user.id}
    else
      render(
      json:{ errors: @user.errors},
      status: 422)
    end
  end

  def destroy
    @user.destroy
    render(json: {errors: @user.errors}, status:200)
  end

  private
  
  def find_user
    @user||=User.find params[:id]
  end

  def user_params
    params.permit(
      :first_name, :last_name, :description, :email, :password, :password_confirmation, 
    :address , :latitude , :longitude, :driver_license_number, :phone_number)
  end
end
