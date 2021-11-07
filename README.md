# Team RGCT

> This is a repo for NewHacks 2021

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
