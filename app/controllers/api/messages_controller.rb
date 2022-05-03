class Api::MessagesController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create 
        @message = Message.new(message_params)
        @message.author_id = current_user.id 
        if @message.save 
            if params[:message][:messagable_type] == "Channel"
                @channel = Channel.find_by(id: params[:message][:messagable_id])
                ChannelsChannel.broadcast_to @channel,
                    from_template('api/channels/show', {channel: @channel})  
                render json: nil, status: :ok
            else 
                @group = GroupMessage.find_by(id: params[:message][:messagable_id])
                GroupMessagesChannel.broadcast_to @group,
                    from_template('api/group_messages/show', {group: @group, current_user: current_user})  
                render json: nil, status: :ok
            end
        else 
            render json: @message.errors.full_messages
        end
    end

    def update
        @message = Message.find_by(id: params[:message][:id])
        @current_user = current_user
        if @message.update(message_params) 
            if @message.messagable_type == "Channel"
                @channel = Channel.find_by(id: @message.messagable_id)
                ChannelsChannel.broadcast_to @channel,
                    from_template('api/channels/show', {channel: @channel})  
                render json: nil, status: :ok
            else 
                @group = GroupMessage.find_by(id: params[:message][:messagable_id])
                GroupMessagesChannel.broadcast_to @group,
                    from_template('api/group_messages/show', {group: @group, current_user: current_user})  
                render json: nil, status: :ok
            end
        else 
            render json: @message.errors.full_messages
        end
    end

    private
    def message_params
        params.require(:message).permit(:messagable_id, :messagable_type, :text, :edited)
    end
end
