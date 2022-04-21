class Api::SessionsController < ApplicationController
    before_action :redirect_if_logged_in, except: :destroy
end
