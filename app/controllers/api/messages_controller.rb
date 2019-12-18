class Api::MessagesController < ApplicationController
  def index
    @group = Group.find(params[:group_id]) 
    last_message_id = params[:id].to_i
    @messages = @group.messages.includes(:user).where('id > ?', params[:last_id]) 
  end
end

#3行目今いるグループの情報をパラムスの値を元にDBから取得。
#4行目グループが所有しているメッセージの中から、params[:last_id]よりも大きいidがないかMessageから検索して、@messagesに代入。