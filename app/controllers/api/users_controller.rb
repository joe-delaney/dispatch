class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :redirect_if_logged_in

    def create 
        @user = User.new(user_params)
        debugger
        if @user.save 
            login_user!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :display_name, :title, :status)
    end
end
