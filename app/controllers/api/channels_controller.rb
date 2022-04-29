class Api::ChannelsController < ApplicationController
    def index 
        @channels = Channel.search(params[:query])
        render :index
    end

    def create 
        @channel = Channel.new(channel_params)

        if @channel.save 
            
        else
            render json: @channel.errors.full_messages
        end
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

    private
    def channel_params 
        params.require(:channel).permit(:name, :topic, :description)
    end
end
