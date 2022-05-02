class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login_user!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        current_user = nil
    end

    def redirect_if_logged_in
        redirect_to root_url if logged_in?
    end

    def redirect_if_not_logged_in
        redirect_to new_session_url unless logged_in?
    end

    def from_template(template, locals = {})
        JSON.parse(self.class.render(:json, template: template, locals: locals))
    end
end
