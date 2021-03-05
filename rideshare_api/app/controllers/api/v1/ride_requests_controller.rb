class Api::V1::RideRequestsController < Api::ApplicationController

  def index
    ride_request = RideRequest.order(created_at: :desc)
    render(json: ride_request)
  end

  def create
    user = User.find params[:user_id]
    ride_request = RideRequest.new ride_request_params
    ride_request.user = user
    ride_request.customer = current_user

    if ride_request.save
      render json: {id: ride_request.id}
     else
       render(
         json: { errors: ride_request.errors },
         status: 422 
       )
     end
  end

  def show
    @ride_request = RideRequest.where(user_id: params[:user_id]).order(created_at: :desc)
    render(json: @ride_request)
  end

  def destroy
    @ride_request = RideRequest.find params[:id]
    @ride_request.destroy
    render(json: { status: 200 }, status: 200)
  end

  def update
    @ride_request = RideRequest.find params[:id]
     if @ride_request.update params.require(:ride_request).permit(:status)
      render json: {id: @ride_request.id}
    else
      render(
      json:{ errors: @user.errors},
      status: 422)
    end     
  end

  private
  def ride_request_params
    params.require(:ride_request).permit(:status, :ride_date, :ride_time)
  end
end
