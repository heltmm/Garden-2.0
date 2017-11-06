# Garden2.0

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Reflection

There is just so much new technology and frameworks that deciding what is the best to learn with my limited time can be overwhelming.  Then when I finally decide what technology to learn, navigating that documentation and modifying it to what I want to do can be very challenging, especially if the documentation is poorly written. On this project I will make a garden zone webpage to potential gardeners to enter their zipcode and get information about gardening in their area including hardiness zones, frosts dates, dates to start different plants, and some stretch goals involving recommended plants for their area.  I will use Angular 5 which was released two days ago along with firestore which is in beta, and bootstrap 4 beta.  Using this new technology will be a fun challenge as I have to navigate their documentation and modify my coding procedures to fit their new technologies. 

## How Day Was Spent

After researching angular 5 and firebase I updated node, npm, and angularCli to latests versions.  I used the angular cli to build a new app which now defaults to 5 unless specified.  Then I setup a firestore database and followed along with the documentation for angularfire2 to link the database to my app.  After some reasearch I found a csv file that contained all the zipcodes along with their corresponding hardiness zones.  Thinking why setup a database when you could just open the csv file and read it as this information is pretty static and wouldn't be getting updated by the user.  After attemping a few different implementations I came to the conclusion that using a database would be easier as javascript in the browerser does not allow access to local files and I would have to learn how to link the csv file to the backend.  Moving on to the implementation of the firestore database proved also to have issues as firestore has no file importation currently like firebase does.  Attemping a work around I converted the csv into an array and attempted to upload each file individually through the app.  That crashed my firestore app for close to an hour but did manage to load 16k zipcodes into the database which I was able to display rather slowly on the app.  Overall I did not accomplish as much as I would have like but I did come away with some good conclusions.  Those being:

1. Switching to Angular 5 was incredibly simple for the simple app I was buidling
2. Firestore while allowing you to search by specific parameters much better than firebase needs a lot more work done before I would recomend using it.  Mainly file imporation, and a better way of displaying the database.  Loading the database in the browser portal usually freezes it as it attempts to load the 16k entries
3.  I need to learn more about what is going on in the backend of my apps.
4.  Using a locally hosted database would have been much better, preferably one using sql and indexing as I was using large amounts of Data.
