First I had to create a project in the google developers console.
From there I needed to generate a client id and a client secret.
I placed this client id and secret in a config for use later.
Because this exploration is going to focus on OAuth I used [Yeoman](http://yeoman.io/) to scaffold out a flask angular app.

used pip to install the oauth2client library
encountered issues with `InvalidClientSecretsError: Missing property "redirect_uris" in a client type of "web".`
Regenerated my client_secrets.json because it was missing the redirect_uris parameter, this seem to fix the issue.
Utilizing the oauth2client library i was able to complete the 2 stage "flow" process to redirect the user to the
user to the google oauth page. The token that is returned is used to identify the authed user.
This token is then used to pull the display name of the user.
I practice this token would be stored to identify the user for future interactions, but in my implementation I just keep
the token as session data.

Resources
https://developers.google.com/+/domains/profiles
https://developers.google.com/identity/sign-in/web/people
https://developers.google.com/apis-explorer/
https://developers.google.com/api-client-library/python/auth/web-app
