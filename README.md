# tu-frontend
Frontend for the `Transparent Account` project implementing a frontend of a transparent bank account system.  

## Frontend Tech Stack
Technologies used on frontend:
- `React.js` v. 18.2,
- `TypeScript` v. 5.2,
- `React Router` v. 6.2.

## Frontend Project Structure
We have these folders our source `/src`:  
- `/pages` Pages (3) for our SPA,
- `/components` parts to assemble our React application pages from,
- `/fetches` "API functions" for FE - wrapping Axios calls on specific backend services,
- `/ts` TypeScript interfaces used across the React application.

## Pages in our SPA
We have these 3 pages in our SPA "client-side routed" via. `React Router v6`:
- `ListingOfTransparentAccounts` (usage of `PrevAccount` comp.),
- `TransparentAccount` (usage of `PrevPayment` comp),
- `ViewPayment`.  

As previously mentioned, we have these `Components` from which we assemble pages:
- `PrevAccount` preview Account (only some information),
- `PrevPayment` preview Payment (only some information).

## Further Discussion Ideas
- Architecture appropriateness.
- ~~`Functional Components` - re: `interview` & [blogpost overview](http://blog.stkl.cz/8-react-component-overview/).~~
- ~~`Client-side routing` re: `interview` & routing //TODO add UV example.~~
- ~~`State managment`  useState vs. Redux/RTK vs. Context~~ ... mobX & Zustand.
- `Next.js`, automatic imports, SSG, etc. 

## TODO
- [ ] Components +- abstract endpoint fetches + more organizational stuff (like page/s) 
- [x] Types
- [ ] Layout in Material UI - Pages
- [ ] mby QR Payments
- [ ] CI/CD for ppf-fe (part of credentials already in place)
- [ ] Endpoint URL like endpoint = ENV|hardcoded
- [ ] Some filtering on Transactions[] like YYYYMMDD1-YYYYMMDD2, sender fulltext, etc.
- [ ] ~~responsive Menu - responsively breaking - list vs dropdown~~ NOT NEEDED

___

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
