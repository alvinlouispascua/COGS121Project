# Milestone 5

## How a user can use our app to achieve their goals

Our target population are those who're suffering from the hardships of homelessness. The aim is to help them find government/locally funded health care, shelter, and food. Such government and locally-funded programs have had a standing-status for many years, but testimonies from the homeless say that these programs are usually both difficult to find as well as travel to. Users of our app would be able to solve both of these problems by syncronizing their location with the app; allowing for a list of nearby shelters, hospitals, and food banks to appear along with needed-information in respect to each location. Our app is all about convinence and ease-of-use without the clutter and confusion which is what causes fustration amongst the many homeless who're unsure about the full-functionality of modern-day technology. An example of a scenerio as described by one of our interviewee's; one day he was covered in mosquito bites and one of the bites had gotten infected. With his smart phone (which he recieved through another government-funded program) he attempted to find clinics in his area that would help him soothe the burning pain from the infected mosquito bite. After several attempts to find clinics in his area, he gave up and after several months; the infected wound became a large scar on his arm. The fustration in finding a nearby clinic is removed by using our app; as the icon would be sitting on the home-page of his smart phone waiting to be used. Once clicked on, the user would be able to click on the health care button and syncroniously use the users location to find nearby clinics in the area. This convinence removes the headache-causing process of having to search through the internet to find essential resources for survival.

## UI Screenshots

### Home Screen
![Home Screen](images/ui1.png)

### Food Banks
![Food Banks](images/Food3.png)

### Healthcare
![Healthcare](images/Health3.png)

### Shelter
![Shelter](images/Shelter3.png)

## How our UI has improved

Our user interface has improved in several ways. Firstly, the colors on the resources pages have been completely changed to match the color scheme of the home page. Second, the typography among each different resource (food banks, shelters, and healthcare) was changed to make it consistent across resources. Also, we increased the font weight on subtitles such as hours and address to differentiate them visually from the content. Also, we changed the UI's implementation and the size of each component so that it works on nearly every display size. Previously, the info icon buttons would collapse into the list item but these bugs were fixed. Also, the size of the Google Maps component now changes as the browser size changes so it never becomes too large. Finally, the marker for the Google Maps was changed from a circle to a more traditional pointer. 

## Data Display Screenshot

![Data Display](images/DataDisplay.png)


## How we implemented our data display

We implemented our data display by using Google Places API and Google Maps API to display the resource's details, including phone number, website, rating, number of ratings, and reviews, as well as the resource's geographical position in a map, respectively. We made a Google Places call for each resource, the code of which can be found in src/pages/Food.js, which returned a long json object. We filtered through this json object and selected the most pertinent information, which includes the phone number, website, rating, number of ratings, and sample reviews. We then formatted this information into a dialog with subtitles for each information and displayed it. We used the latitude and longitude from the Google Places API call to display the geographical location of the resource in a map. 

## Ambitious Data Display Ideas

More ambitious data display ideas that we have is being able to display the resources in order of those that are closest to you, and being able to display the walking distance to each resource. Also, being able to display some of the information from the Google Places API call, such as rating and distance, hovering above the marker on Google Maps would be a more intuitive interface and would be a more ambitious project. Furthermore, the travel distance can be mitigated even more by utilizing public transportation means; factoring bus routes/times would be ideal when calculating the best route a user should take. 


