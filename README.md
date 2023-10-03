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
- `/redux-rtk` Redux `store` and "stwe orage API functions" w/ reducers.

## CI/CD Workflow
We currently have 1 workflow to preform autimatic deployment process.
- **Build+Push+Deploy** called [`build-push-deploy.yml`](https://github.com/KlosStepan/tu-frontend/blob/main/.github/workflows/build-push-deploy.yml) applies [`deployment.yaml`](https://github.com/KlosStepan/tu-frontend/blob/main/config/deployment.yaml) - runs manually.
## Pages in our SPA
We have these 3 pages in our SPA "client-side routed" via. `React Router v6`:
- `Accounts` (uses `PrevAccount` component(s), navigates `v`),
- `TransparentAccount` (uses `PrevTransaction` component(s) navigates `v`),
- `Transaction`.  

As previously mentioned, we have these `Component`s from which we assemble pages:
- `PrevAccount` preview `Account` (only some information) with navigate,
- `PrevTransaction` preview `Transaction` (only some information) with navigate.

## Further Discussion Ideas
- Architecture appropriateness.
- Redux/RTK vs. useState vs. Context vs. "props drilling" appropriateness.
- ~~`Functional Components` - re: `interview` & [blogpost overview](http://blog.stkl.cz/8-react-component-overview/).~~
- ~~`Client-side routing` re: `interview` & routing //re: UV Apache example.~~
- ~~`State managment` re: `interview` useState vs. Redux/RTK vs. Context~~ ... mobX & Zustand.
- `Next.js`, automatic imports, SSG, etc. 

## TODO
- [x] Components +- abstract endpoint fetches + more organizational stuff (like page/s) 
- [x] Types
- [x] Navigate via Components to other components.
- [x] Fill 3 pages appropriately.
- [ ] ~~Search via Material UI ft. useRef and ES6 list operation.~~ please see [SwimmPair Filtering](http://swimmpair.stkl.cz/lide.php)
- [ ] ~~Nice design using Material UI - Pages~~ please see [SwimmPair Layouts/Responsiveness on mobile](http://swimmpair.stkl.cz/index.php)
- [ ] mby QR Payments npm package via Rust - Vanity item
- [x] CI/CD for [ppf-fe.stkl.cz](http://ppf-fe.stkl.cz). 
- [ ] Endpoint URL like endpoint = ENV|hardcoded **!TODO**
- [ ] ~~Some filtering on Transactions[] like YYYYMMDD1-YYYYMMDD2, sender fulltext, etc.~~ please see [SwimmPair (old data, v0.90) filtering by years](http://swimmpair090.stkl.cz/clovek.php?id=21)
- [ ] ~~responsive Menu - responsively breaking - list vs dropdown~~ NOT NEEDED