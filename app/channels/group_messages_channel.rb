class GroupMessagesChannel < ApplicationCable::Channel
  def subscribed
    @group = GroupMessage.find_by(id: params[:id])
    stream_for @group
  end
end