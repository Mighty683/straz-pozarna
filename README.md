# Straż Pożarna
 Example application created with React.
## Development
Node.js and NPM are required to run application.

First install dependencies by running in project folder:
`npm install`
then run:
'npm start'

New browser windows should appear. If it doesn't happen simply get to 'http://localhost:3000'

## Production

To run production build use command:
`npm run build`
After that build folder should be created. Now you can serve appliaction.
For example use serve or http-serve package.
If you don't have installed serve package run command:
`npm install -g serve`
then:
serve -s build
Application should be avalaible on `http://localhost:8080`
