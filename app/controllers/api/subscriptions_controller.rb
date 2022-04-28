class Api::SubscriptionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create 
        @subscription  = Subscription.new(sub_params)

        if @subscription.save 
            @user = current_user
            render "api/users/show"
        else 
            render @subscription.errors.full_messages
        end
    end

    def destroy
        @subscription = Subscription.find_by_params(params[:subscription][:subscriber_id], params[:subscription][:subscribable_id], params[:subscription][:subscribable_type]).first
        @subscription.destroy
        @user = current_user
        render "api/users/show"
    end

    private
    def sub_params
        params.require(:subscription).permit(:subscriber_id, :subscribable_id, :subscribable_type)
    end
end
