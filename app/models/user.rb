class User < ApplicationRecord
    validates :email, :display_name, :password_digest, :session_token, presence:true
    validates :email, :session_token, uniqueness:true
    validates :password, length: {minimum: 6, allow_nil:true}

    before_validation :ensure_session_token

    has_many :created_channels,
        foreign_key: :creator_id,
        class_name: :Channel,
        dependent: :destroy

    has_many :subscriptions, 
        foreign_key: :subscriber_id,
        class_name: :Subscription,
        dependent: :destroy
    
    has_many :subscribed_channels,
        through: :subscriptions,
        source: :subscribable,
        source_type: :Channel

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)

        if @user && @user.is_password?(password)
            @user   
        else  
            nil
        end
    end

    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end

    def generate_session_token
        SecureRandom.urlsafe_base64
    end

    def password
        @password
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

    def self.search(query, current_user_id) 
        users = User.where("users.display_name ILIKE '#{query}%' AND users.id != '#{current_user_id}'")
        users
    end
end
