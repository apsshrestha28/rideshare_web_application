class ApplicationController < ActionController::Base
  private

  def user_signed_in?
    current_user.present?
  end
  helper_method :user_signed_in?

  def current_user
    if session[:user_id].present?
    @current_user ||=User.find_by_id session[:user_id]
    

  elsif session[:customer_id].present?
      @current_user ||=Customer.find_by_id session[:customer_id]
    end
  end
  helper_method :current_user
end
