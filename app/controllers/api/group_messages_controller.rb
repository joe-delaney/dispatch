class Api::GroupMessagesController < ApplicationController
    def index 
        #Should render all group messages for the current user
        @group_messages = current_user.group_messages
        @current_user = current_user
        render :index
    end

    def create 

    end

    def show 
        @group_message = GroupMessage.find_by(id: params[:id])
        render :show, locals: { group: @group_message, current_user: current_user }
    end
end
