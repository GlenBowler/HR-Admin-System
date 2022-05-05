# HR-Admin-System 

### Table of Content
* Description
* Installation
* Users 
* How it work

## Description
An HR program where we got 3 types of users namely (admin, manager, employee). Each user got access to certain routes and no one routes is the same as the other user. As a admin you will be able to see all the data from your system, will be able any staff member or department. Activate and deactivate their status, add staff member or department. Will also be able to search for a certain employee as well as filter through them. As a manager you will see all the employee under your command and will be able to edit anyone of them including yourself. As a normal staff member (employee) you will be able to only see and edit your data.


# Instalation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Users

Like mentioned there is 3 types of users:

## Admin
There is only one admin user availible. His details is as follow:

<img width="635" alt="Screenshot 2022-05-05 at 15 52 46" src="https://user-images.githubusercontent.com/79621348/166938571-1824988f-80f1-4bc6-b8ea-3756780762e7.png">

## Managers:
On the release of this program there is 3 managers. There details is as follow:

<img width="608" alt="Screenshot 2022-05-05 at 15 55 17" src="https://user-images.githubusercontent.com/79621348/166939207-473fee9c-818f-4e90-b029-16c0cddebbaf.png">
<img width="647" alt="Screenshot 2022-05-05 at 15 55 42" src="https://user-images.githubusercontent.com/79621348/166939218-0d0e11ce-1fe6-4885-aff2-1ab53c5a899c.png">
<img width="620" alt="Screenshot 2022-05-05 at 15 57 46" src="https://user-images.githubusercontent.com/79621348/166939382-b227e4c1-4025-45c4-af8c-a171c4003a1e.png">

## Employees:
On the release of this program there is 11 users (this include admin, managers and normal employee). Some of their details will be displayed below:

<img width="607" alt="Screenshot 2022-05-05 at 15 59 39" src="https://user-images.githubusercontent.com/79621348/166940133-8ba73178-3ae5-4072-9f02-904d01afcc88.png">
<img width="608" alt="Screenshot 2022-05-05 at 16 00 00" src="https://user-images.githubusercontent.com/79621348/166940150-4b28d230-b976-41a6-bf30-d9c49f036628.png">
<img width="602" alt="Screenshot 2022-05-05 at 16 00 22" src="https://user-images.githubusercontent.com/79621348/166940152-9e76425a-3970-4861-9f50-61a0b64c0c6d.png">

# How it work: 

## Sign in:

Once you run the program you will be greeted with the login screen. Since this is an HR Admin System user cannot register and only be added by admin. 
Please select one of the user details from User tab. 

If you select to log in as Admin you will use the admin email adress as well as the the following password = TestPass1234.

If you select to log in as Manager or normal employee you will use one of their email adress and the following password = Password123#

<img width="1374" alt="Screenshot 2022-05-05 at 15 22 42" src="https://user-images.githubusercontent.com/79621348/166932259-3a298caa-cc70-449a-89e7-8a074e7cdc85.png">


## Main menu:

Admin menu:

In the admin main tab you can use filter to filter certain out certain users, search for certain user, sort table by clicking on table header. At the bottom of the table got pagination to show how much users you want on one table.

<img width="1376" alt="Screenshot 2022-05-05 at 15 31 41" src="https://user-images.githubusercontent.com/79621348/166935447-7c8284af-68ef-4842-9dd3-ec92077f90b7.png">

If you select on the hamburger sign top left you will get a drop down list for admin that will look as follow.

<img width="334" alt="Screenshot 2022-05-05 at 15 37 33" src="https://user-images.githubusercontent.com/79621348/166935396-70e3513b-e545-409c-a803-0f7690e0d9a0.png">

Each of theese options will take yout to new page if selected.

Manager & Employee menu:

Manager and employee looks exactly the same the only difference is the amount of data that will be displayed to user. Manager will see his details as well as all the users under him. The employee will only see his/her details.

<img width="1381" alt="Screenshot 2022-05-05 at 15 49 09" src="https://user-images.githubusercontent.com/79621348/166937725-9ea426e6-5a9a-480e-9f1e-e356b7cd67e2.png">

If you select on the hamburger sign top left you will get a drop down list for managers/employee that will look as follow.

<img width="321" alt="Screenshot 2022-05-05 at 15 49 34" src="https://user-images.githubusercontent.com/79621348/166937831-75482ff1-6c10-4484-8a19-4c293365778f.png">



