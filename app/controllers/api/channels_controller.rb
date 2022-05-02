class Api::ChannelsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index 
        @channels = Channel.search(params[:query])
        render :index
    end

    def create 
        @channel = Channel.new(channel_params)
        @channel.creator_id = current_user.id
        @current_user = current_user
        
        if @channel.save 
            render :show, locals: { channel: @channel, current_user: @current_user }
        else
            render json: @channel.errors.full_messages
        end
    end

    def show 
        @channel = Channel.find_by(id: params[:id])
        @current_user = current_user
        render :show, locals: { channel: @channel, current_user: @current_user }
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
