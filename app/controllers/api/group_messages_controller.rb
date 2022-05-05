class Api::GroupMessagesController < ApplicationController
    def index 
        #Should render all group messages for the current user
        @group_messages = current_user.group_messages
        @current_user = current_user
        render :index
    end

    def create 
        @group_message = GroupMessage.new()
        if @group_message.save 
            #Loop through the userIds and subscribe them to this dm
            #Once done, render show and receive group info
            render :show, locals: { group: @group_message, current_user: current_user }
        else
            render json: @group_message.errors.full_messages
        end
    end

    def show 
        @group_message = GroupMessage.find_by(id: params[:id])
        render :show, locals: { group: @group_message, current_user: current_user }
    end
end
