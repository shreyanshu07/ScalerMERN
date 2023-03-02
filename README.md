# Scaler Hotel Managment System
# A web app made using MongoDB , ExpressJS , ReactJS and NodeJS

Following are the functionalities

1. Book a room of particular type from startDate to endDate
2. Update the reservation details of a particular meeting including Name,E-mail,Room Type, Start Date and End Date
3. Cancel the reservation 
4. View all the current valid reservation on the admin side 

Points to note about the application :
1. During booking it checks if rooms of particular types are available or not on particular dates
2. During booking it validates email, Reservation Start date and Reservation End Date
3. During booking it calculates the price in runtime and shows the total bill for current choices
4. After succesfull booking , it fires a mail to user stating confirmation with Reservation Start Date and Reservation End Date
5. Added a update button in view page where admin can update details for a particular user.
6. After succesfull updation of details , it fires a mail to user stating confirmation with Updated Reservation Start Date and Updated Reservation End Date


Things about the application : 
1. Has 3 types of rooms , namely : Non-AC room,Single AC room and Double AC room
2. Prices of the three rooms are 50 , 80 and 100 per day respectively
3. Available rooms are 5 , 3 and 2 respectively

Here are some screenshot of the projects :

1. View Data Page
![githubScalerProject](https://user-images.githubusercontent.com/72155853/222397251-668c2943-e66a-41c7-b536-7a18250a113f.JPG)

2. Add Page
![githubScalerProjectAddPage](https://user-images.githubusercontent.com/72155853/222397784-0ff9eaee-88a3-4d56-8070-56a883073ae3.JPG)

3. Delete Page
![githubScalerProjectDeletePage](https://user-images.githubusercontent.com/72155853/222398042-bc95b42a-7927-494a-87c7-114aa7a71c8c.JPG)

4. Automated Mail
![githubScalerProjectEmailPage](https://user-images.githubusercontent.com/72155853/222398573-dc89574f-94c2-47a4-9db8-31a55d8a862d.JPG)


To have this file in your local computer , follow these steps

1. Clone the repo into your local machine
2. Go to backend folder and install all the dependencies using npm install comand
3. Go to frontend folder and install all the dependencies using npm install comand
4. Go to backend folder and run it using "npm start"
5. Go to frontend folder and run it using "npm start"

# Happy Coding :)
