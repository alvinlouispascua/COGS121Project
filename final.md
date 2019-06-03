# Final.md

## Egbert Doan

• Paper prototyping   
• User interviews  
• Front-end development & UI Skeleton     
• Demo video

## Jonathan Kiger

• Paper prototyping  
• Back-end development  
• Source code organization  
• Google Maps API, Google Places API  

## Alvin Pascua

• Milestone organization  
• Storyboarding  
• User interface design  
• Collecting homeless resource data  

## Marc Raphael

• Storyboarding  
• User interface design  
• Front-end development  
• Milestone writing

## List of source code files (in production branch)

• **src/pages/Home.js**  
Home page of the website, implements ability to navigate to shelter, healthcare, and foodbank pages. Uses React.js and Material-UI for styling. 

• **src/pages/Food.js**     
Lists several food banks in San Diego, as well as their hours and their addresses. Implements Google Maps API with the ability to click on food banks to show them centered on the map and Google Places API, with the ability to get more information about each food bank, including phone number, website, ratings, and reviews. 

• **src/pages/Shelter.js**    
Lists several homeless shelters in San Diego, as well as their hours and their addresses. Implements Google Maps API with the ability to click on food banks to show them centered on the map and Google Places API, with the ability to get more information about each homeless shelter, including phone number, website, ratings, and reviews. 

• **src/pages/Health.js**    
Lists several homeless-friendly healthcare clinics in San Diego, as well as their hours and their addresses. Implements Google Maps API with the ability to click on food banks to show them centered on the map and Google Places API, with the ability to get more information about each clinic, including phone number, website, ratings, and reviews. 

• **src/pages/firebase.js**    
Initializes firebase for the app, creating the appropriate config file to interact with our database 

• **src/components/GoogleMaps.js**    
Initializes the Google Maps API, sets the size of the Google Maps component, and implements the ability to recenter the component using latitude and longitude data. 

• **src/App.js**    
The main app javascript component, creates Home, Food, Shelter, and Health routes for the app (we used React.js). 

## Link to Google Slides presentation 
https://docs.google.com/presentation/d/1-AK5muAv1G4qHCY3pkXveSfgPcenN5OC4Zgu1mQm6FU/edit?usp=sharing

## Link to Demo Video
https://www.youtube.com/watch?v=jv9uPLEcFAU






