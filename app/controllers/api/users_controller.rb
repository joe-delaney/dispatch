class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :redirect_if_logged_in, only: :create

    def create 
        @user = User.new(user_params)
        if @user.save 
            login_user!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def index 
        @current_user_id = current_user.id
        @users = User.search(params[:query], @current_user_id)
        render :index
    end

    def show 
        @user = User.find(params[:id])
        @current_user_id = current_user.id
        render :show
    end

    def update 
        @user = User.find(params[:id])
        if @user.update(user_params)
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
