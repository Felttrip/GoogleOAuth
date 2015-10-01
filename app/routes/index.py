from app import app
from oauth2client import client
from flask import redirect, session, request

flow = client.flow_from_clientsecrets(
    'client_secrets.json',
    scope='https://www.googleapis.com/auth/plus.login',
    redirect_uri='http://127.0.0.1:5000/oauth2callback')

@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route('/api/startFlow/')
def api_flow():
    auth_uri = flow.step1_get_authorize_url()
    return auth_uri

@app.route('/oauth2callback/')
def oauthSuccess():
    auth_code = request.args.get('code')
    credentials = flow.step2_exchange(auth_code)
    session['credentials'] = credentials.to_json()
    print session['credentials']
    return redirect('/#/oauth2callback/')
