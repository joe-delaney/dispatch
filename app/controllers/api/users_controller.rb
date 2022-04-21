class Api::UsersController < ApplicationController
    before_action :redirect_if_logged_in
end
