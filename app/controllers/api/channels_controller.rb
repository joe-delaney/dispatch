class Api::ChannelsController < ApplicationController
    def index 
        @channels = Channel.search(params[:query])
        render :index
    end

    def create 

    end

    def show 

    end

    def update 

    end

    def destroy 

    end
end
