First I had to create a project in the google developers console.
From there I needed to generate a client id and a client secret.
I placed this client id and secret in a config for use later.
Because this exploration is going to focus on OAuth I used [Yeoman](http://yeoman.io/) to scaffold out a flask angular app.

used pip to install the oauth2client library
encountered issues with `InvalidClientSecretsError: Missing property "redirect_uris" in a client type of "web".`
Regenerated my client_secrets.json because it was missing the redirect_uris parameter, this seem to fix the issue.
