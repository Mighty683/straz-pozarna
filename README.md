# Straż Pożarna
Example application created with React.

## Development
Node.js and NPM are required to run application.

First install dependencies by running in project folder:
`npm install`
then run:
`npm start`

New browser windows should appear. If it doesn't happen simply get to `http://localhost:3000`

Example JSON required by application:
```json
{"miasta" : [ { "nazwa" : "A", "ma_jednostke" : false }, { "nazwa" : "B","ma_jednostke" : true},{"nazwa" : "C","ma_jednostke" : false},{"nazwa" : "D","ma_jednostke" : false }, { "nazwa" : "E", "ma_jednostke" : true }],"drogi" : [{"miasta" : ["A", "B"],"czas_przejazdu" : 20},{"miasta" : ["A", "C"],"czas_przejazdu" : 3},{"miasta" : ["A", "D"],"czas_przejazdu" : 4},{"miasta" : ["A", "E"],"czas_przejazdu" : 11}],"max_czas_przejazdu" : 10}
```

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
