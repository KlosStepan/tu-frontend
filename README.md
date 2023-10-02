# tu-frontend
Frontend for the `Transparent Account` project implementing a frontend of a transparent bank account system.  

## Frontend Tech Stack
Technologies used on frontend:
- `React.js` v. 18.2,
- `TypeScript` v. 5.2,
- `React Router` v. 6.2,
- `Redux` ft. `Redux Toolkit` v. 8.1, v. 1.9.

## Frontend Project Structure
We have these items in our [`/src`](https://github.com/KlosStepan/tu-frontend/tree/main/src) source:  
- `App.tsx` serves as main page w/ routing,
- `/pages` (total 3) pages for our SPA,
- `/components` parts to assemble our React application pages^ from,
- `/fetches` "API functions" for FE - wrapping Axios calls on specific backend services,
- `/ts` TypeScript interfaces used across the React application,
- `/redux-rtk` Redux storage and "storage API functions" w/ reducers.

## CI/CD Workflow
We currently have 1 workflow to preform autimatic deployment process.
- **Build+Push+Deploy** called [`build-push-deploy.yml`](https://github.com/KlosStepan/tu-frontend/blob/main/.github/workflows/build-push-deploy.yml) applies [`deployment.yaml`](https://github.com/KlosStepan/tu-frontend/blob/main/config/deployment.yaml) - runs manually.
## Pages in our SPA
We have these 3 pages in our SPA "client-side routed" via. `React Router v6`:
- `ListingOfAccounts` (uses `PrevAccount` component(s) ),
- `TransparentAccount` (uses `PrevTransaction` component(s) ),
- `PrevTransaction`.  

As previously mentioned, we have these `Component`s from which we assemble pages:
- `PrevAccount` preview Account (only some information) with navigate,
- `PrevTransaction` preview Payment (only some information) with navigate.

## Further Discussion Ideas
- Architecture appropriateness.
- Redux/RTK vs. useState vs. Context vs. "props drilling".
- ~~`Functional Components` - re: `interview` & [blogpost overview](http://blog.stkl.cz/8-react-component-overview/).~~
- ~~`Client-side routing` re: `interview` & routing //TODO add UV example.~~
- ~~`State managment` re: `interview` useState vs. Redux/RTK vs. Context~~ ... mobX & Zustand.
- `Next.js`, automatic imports, SSG, etc. 

## TODO
- [ ] Components +- abstract endpoint fetches + more organizational stuff (like page/s) 
- [x] Types
- [ ] Navigate via Components to other components.
- [ ] Fill 3 pages appropriately.
- [ ] Search via Material UI ft. useRef and ES6 list operation.
- [ ] Nice design using Material UI - Pages
- [ ] mby QR Payments npm package
- [x] CI/CD for ppf-fe (part of credentials already in place)
- [ ] Endpoint URL like endpoint = ENV|hardcoded
- [ ] Some filtering on Transactions[] like YYYYMMDD1-YYYYMMDD2, sender fulltext, etc.
- [ ] ~~responsive Menu - responsively breaking - list vs dropdown~~ NOT NEEDED