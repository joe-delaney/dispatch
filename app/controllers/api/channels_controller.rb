class Api::ChannelsController < ApplicationController
    def index 
        @channels = Channel.all
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
