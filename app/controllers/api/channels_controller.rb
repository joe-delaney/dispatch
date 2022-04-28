class Api::ChannelsController < ApplicationController
    def index 
        @channels = Channel.search(params[:query])
        render :index
    end

    def create 

    end

    def show 
        @channel = Channel.find_by(id: params[:id])
        @current_user = current_user
        render :show
    end

    def update 

    end

    def destroy 

    end
end
