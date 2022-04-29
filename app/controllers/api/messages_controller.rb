class Api::MessagesController < ApplicationController

    def create 
        @message = Message.new(message_params)
        @message.author_id = current_user.id 
        if @message.save 
            if(params[:subscribable_type] === "Channel") {
                render "api/channels/show"
            } else {
                render json: ["Insert Message Group Here"]
            }
        else 
            render json: @message.errors.full_messages
        end
    end

    def update

    end

    private
    def message_params
        params.require(:message).permit(:messagable_id, :messagable_type, :text)
    end
end
