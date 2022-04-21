class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :redirect_if_logged_in, except: :destroy

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil? 
            render json: ['invalid credentials'], status: 401
        else 
            login_user!(@user)
            render 'api/users/show'
        end
    end

    def destroy 
        logout!
        render json: {message: 'Logout successful.'}
    end
end
