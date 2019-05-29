# Milestone 5

## How a user can use our app to achieve their goals

A user in our target population, the homeless of San Diego, would use our app by first going to a public library and accessing the website on a computer. Then, the user would select whether they were looking for food banks, healthcare, or shelter. They would then browse through the list of resources that interest them. They would click the info button to learn more about a specific resource. They could read the rating and the review listed, and potentially visit the listed website of the resource. They would click on a resource to see its position on a map, and after accessing all of this information, they would decide which resource they wanted to go to, and travel there. 

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


