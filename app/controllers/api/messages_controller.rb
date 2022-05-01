class Api::MessagesController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create 
        @message = Message.new(message_params)
        @message.author_id = current_user.id 
        @current_user = current_user
        if @message.save 
            if params[:message][:messagable_type] == "Channel"
                @channel = Channel.find_by(id: params[:message][:messagable_id])
                ChannelsChannel.broadcast_to(@channel, @message)
                render "api/channels/show"
            else 
                render json: ["Insert Message Group Here"]
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
                render "api/channels/show"
            else 
                render json: ["Insert Message Group Here"]
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
