class Api::GroupMessagesController < ApplicationController
    skip_before_action :verify_authenticity_token
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
            params[:userIds].each do |user_id|
                Subscription.create!(subscriber_id: user_id, subscribable_id: @group_message.id, subscribable_type: "GroupMessage")
            end
            #Subscribe the current user
            Subscription.create!(subscriber_id: current_user.id, subscribable_id: @group_message.id, subscribable_type: "GroupMessage")
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
