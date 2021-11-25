# Team RGCT

> This is a repo for NewHacks 2021 
> [Devpost](https://devpost.com/software/rgct)

## The Project
Our team has chosen the theme "health" among three.

Aiming to help people keep track of their diet, specifically their calorie intake, we created a calorie tracker mobile app where
users can input the ingredients in their meal, and the app calculates the total calorie intake.

## Database
For the nutrition values of different foods and ingredients, we used [this](https://www.canada.ca/en/health-canada/services/food-nutrition/healthy-eating/nutrient-data/canadian-nutrient-file-2015-download-files.html) 
database from [canada.ca](https://www.canada.ca/en/health-canada/services/food-nutrition/healthy-eating/nutrient-data/canadian-nutrient-file-2015-download-files.html),
titled **_Canadian Nutrient File (CNF)_**, published in 2015. We extracted data and imported it to our database. All
data is credited to the Canadian Nutrient File Team and Health Canada.

## Development
We chose to develop the app with a Python (django-rest-framework) backend, an SQLite3 database, a React-Native frontend, and deploy the app with Expo.
We have chosen this approach as it is cross-platform, such the app can support both iOS and Android.

### Backend
The backend made use of the django-rest-framework. It also made use of the [drf-yasg](https://github.com/axnsan12/drf-yasg) package to generate
a Swagger and ReDoc API documentation.

The backend is currently not hosted on any platform, as it is not by any means sophisticated. However, it will be hosted on [fill in url] during the judging period
of NewHacks 2021. 

There are currently 2 accounts in the database. Below are the credentials:

/| user | administration
--- | --- | ---
username | gl | admin
password | g12345 | admin

### Front-end
We chose to use React Native for the front end as it has a large community, and that it integrates well. It is also 
cross-platform which is a huge plus for us.

We used Expo for showing a live application while developing.

## Development Requirements
To continue developing the application, some tools are to be installed.

### Frontend codebase
 A developer would need some tools that are available for free on Windows, MacOS and Linus.
 1) Download npm and node.js
 2) Install and add nodejs/node_modules/npm/bin to PATH (this can be omitted)
 3) Clone repository and change directories to front-end
 4) Run `npm install -g expo-cli` to install expo build services to emulate and test the application on your mobile device or emulator
 5) Run `npm install` to install all project dependencies
 6) Run `expo start` to commence app deployment on localhost network
 7) Download Expo app on your mobile device and scan the QR code to open the app on your mobile device, or run it on your emulator by choosing the corresponding option given

 ### Backend codebase
 1) Download and install Python (versions 3.7 or after)
 2) Change directories to nutritionCalculator-DjangoHappinessApp-Django
 3) Run `pip install -r requirements.txt` to install all packages used in the project
 4) Run `python manage.py makemigrations` and `python manage.py migrate` if this is the first time running the code
 5) Run `python manage.py runserver` to run the Django server on your local network localhost

## Further Developments
Due to the nature of a hackathon, we were not able to implement all the features we envisioned. There are a few things that can be added in the future to further develop the application.

### Autocompletion when searching
While most ingredients are included, there are a lot of different varients of the same ingredient. To facilitate an easier and smoother experience for users, autocompletion of the search bar is to be implemented should there are further developments to the application.

### Showing user history
There is such functionality implemented in the backend Django API, however due to time constraint, and being unfamiliar with JavaScript, we were not able to finish implementing a front-end for such functionality. It is to be implemented if there is further development.

### Bug fixes
During the hackathon, there were bugs that were found and that we did not have sufficient time to fix, where we resorted to quick fixes for judging and demo pruposes. These bugs are to be fixed first thing if we started further developing of the app.
