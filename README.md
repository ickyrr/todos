# UPDATES
-----------------

- users can sign up (with validation)
- users can sign in but without form validation
- organized files
- removed autopublish and insecure
- applied Meteor.publish
- created addTodo method for access to server

- added msavin:mongol package
- can now add, delete, and update todos, and tasks


# TODO(s)
-------------------

- apply access to tasks
- design
- create other necessary functions like deleting and editing

## File Structure

- lib/                      # common code like collections and utilities
- lib/methods.js            # Meteor.methods definitions
- lib/constants.js          # constants used in the rest of the code

- client/compatibility      # legacy libraries that expect to be global
- client/lib/               # code for the client to be loaded first
- client/lib/helpers.js     # useful helpers for your client code
- client/body.html          # content that goes in the <body> of your HTML
- client/head.html          # content fsome CSS code
- client/<feature>.html     # HTML templates related to a certain feature
- client/<feature>.js       # JavaScript code related to a certain featureor <head> of your HTML: <meta> tags, etc
- client/style.css          #

- server/lib/permissions.js # sensitive permissions code used by your server
- server/publications.js    # Meteor.publish definitions

- public/favicon.ico        # app icon

- settings.json             # configuration data to be passed to meteor --settings
- mobile-config.js          # define icons and metadata for Android/iOS
