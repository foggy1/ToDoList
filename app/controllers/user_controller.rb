get '/users/new' do
  erb :'users/new'
end

post '/users' do
  @user = User.new(params[:user])
  if @user.save
    redirect '/'
  else
    @errors = @user.errors.full_messages.uniq
    erb :'users/new'
  end
end

get '/users/:id' do
  @user = User.find_by(id: params[:id])
  @lists = @user.todo_lists
  erb :'users/show'
end