# Straż Pożarna
https://github.com/Mighty683/straz-pozarna/
Example application created with React. Main purpose of application is to calculate arrival time of fire brigade and highlight cities in danger.

## Development
Node.js and NPM are required to run application.

First install dependencies by running in project folder:
`npm install`
then run:
`npm start`

New browser windows should appear. If it doesn't happen simply go to `http://localhost:3000`

Example JSON required by application:
```json
{
  "miasta" : [
    {"nazwa" : "A", "ma_jednostke" : true },
    {"nazwa" : "B","ma_jednostke" : false},
    {"nazwa" : "C","ma_jednostke" : false},
    {"nazwa" : "D","ma_jednostke" : false },
    {"nazwa" : "E", "ma_jednostke" : false },
    {"nazwa" : "F", "ma_jednostke" : true },
    {"nazwa" : "G", "ma_jednostke" : false },
    {"nazwa" : "H", "ma_jednostke" : false }

  ],
  "drogi" : [
    {"miasta" : ["A", "B"],"czas_przejazdu" : 10},
    {"miasta" : ["A", "C"],"czas_przejazdu" : 11},
    {"miasta" : ["A", "E"],"czas_przejazdu" : 10},
    {"miasta" : ["B", "C"],"czas_przejazdu" : 8},
    {"miasta" : ["B", "D"],"czas_przejazdu" : 4},
    {"miasta" : ["C", "D"],"czas_przejazdu" : 5},
    {"miasta" : ["C", "E"],"czas_przejazdu" : 8},
    {"miasta" : ["D", "E"],"czas_przejazdu" : 2},
    {"miasta" : ["E", "F"],"czas_przejazdu" : 5}
  ],
  "max_czas_przejazdu" : 10
}
```

## Production

To run production build use command:
`npm run build`

After that build folder should be created. Now you can serve application.

For example use serve or http-serve package.

If you don't have installed serve package run command:
`npm install -g serve`
then:
serve -s build

Application should be available on `http://localhost:8080`
