class Api::GroupMessagesController < ApplicationController
    def index 
        #Should render all group messages for the current user
        @group_messages = User.first.group_messages
        @current_user = User.first #current_user
        render :index
    end

    def create 

    end

    def show 

    end
end
