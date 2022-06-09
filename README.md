# Project-Spotlight
<img width="60%" height="20%" alt="project spotlight logo" src="https://user-images.githubusercontent.com/92189031/169386257-d1b60103-aff4-4eb2-8b00-54a4f811c129.png">

Project Spotlight is a **crime tracking and visualization application** that allows the public to search Chicago city crime data by offense and location. The primary intended use of this project is to provide an avenue for those who wish to find the safest streets to commute through, live in, or visit. Our data, which is updated daily, can additionally be used for research, personal, or educational purposes!

*All data is provided by the City of Chicago and published at:
https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-present-Dashboard/5cd6-ry5g*

### Project Spotlight is built using React, TypeScript, JavaScript, Node.js, Express.
#### To start this application, run the following commands in the terminal:
1. $ npm install (Some users may encounter an error. If this is the case, run **$ npm install –force**)
2. Procure an API token for [firebase](https://firebase.google.com/) and from [geoapify](https://www.geoapify.com/)
3. place tokens in a file named firebase-config and in geocode-config, respectively
3. $ npm run start
4. (in a new terminal) $ npm run dev

### App Functionality
Project Spotlight allows users to search Chicago crimes by type of crime and date range. In addition, users have the option to filter based on specific crime types, location, and radius

<img src="https://github.com/Mountain-Everest/project-spotlight/blob/main/gifs/app.gif" width="60%" height="60%" />

### Limitations
Each filter is limited by the capabilities of The City of Chicago's API. Users can click a question mark to obtain a better understanding of each limitation.

<img src="https://github.com/Mountain-Everest/project-spotlight/blob/main/gifs/limitations.gif" width="60%" height="60%" />

### Footer
Users are able to download the search results as CSV files, visit the City of Chicago raw crime data, and visit the LinkedIn page of each contributor.

<img src="https://github.com/Mountain-Everest/project-spotlight/blob/main/gifs/footer.gif" width="60%" height="60%" />

### Contributors
- Anisah Majeed { [Github](https://github.com/yellowstrings) || [LinkedIn](https://www.linkedin.com/in/yellowstrings/) }
- Charles Wilshire { [Github](https://github.com/clwilshire) || [LinkedIn](https://www.linkedin.com/in/charles-wilshire/) }
- Teresa Gobble { [Github](https://github.com/TeresaGobble) || [LinkedIn](https://www.linkedin.com/in/teresa-gobble/) }
