get '/register' do
  erb :'users/register'
end

post '/users' do
  user = User.new(params[:user])
  if user.save
    session[:user_id] = user.id
    redirect  '/'
  else
    @errors = user.errors.full_messages
    erb :'users/register'
  end
end

get '/login' do
  erb :'users/login'
end

post '/login' do
  user = User.find_by(email: params[:user][:email])
  if user && user.authenticate(params[:user][:password])
    session[:user_id] = user.id
    redirect '/'
  else
    @errors = ['Invalid username or password']
    erb :'users/login'
  end
end

get '/users/:id' do
  # binding.pry
  @user = User.find(params[:id])
  @lists = @user.lists.order('created_at desc')
  erb :'users/show'
end

get '/logout' do
  session.clear
  redirect '/'
end