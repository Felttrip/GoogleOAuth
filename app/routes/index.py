from app import app
from oauth2client import client

@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route('/api/startFlow')
def root():
    flow = client.flow_from_clientsecrets(
        'client_secrets.json',
        scope='https://www.googleapis.com/auth/plus.login',
        redirect_uri='http://127.0.0.1:9000/oauth2callback')
    auth_uri = flow.step1_get_authorize_url()
    return auth_uri
