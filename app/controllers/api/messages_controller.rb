class Api::MessagesController < ApplicationController

    private
    def message_params
        params.require(:message).permit(:messagable_id, :messagable_type, :text)
    end
end
