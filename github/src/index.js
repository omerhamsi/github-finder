import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/style.css'
import { BrowserRouter, Route, Switch ,NavLink} from 'react-router-dom'
// const Homepage = () => {
//     return (
//         <React.Fragment>
//             <NavLink exact to="/" activeClassName="active">Home</NavLink>
//             <NavLink to="/contact" activeClassName="active">contact</NavLink>
//             <NavLink to="/products" activeClassName="active">product</NavLink>

//         </React.Fragment>
//         // <React.Fragment>
//         //     <Link to="/">Home|</Link>
//         //     <Link to="/contact">Contact</Link>
//         //     <Link to="/product">Product</Link>
//         // </React.Fragment>
//     );
// }
// const Productspage = () => {
//     return (
//         <React.Fragment>
//             <NavLink exact to="/" activeClassName="active">Home</NavLink>
//             <NavLink to="/contact" activeClassName="active">contact</NavLink>
//             <NavLink to="/products" activeClassName="active">product</NavLink>

//         </React.Fragment>
//         // <React.Fragment>
//         //     <Link to="/">Home|</Link>
//         //     <Link to="/contact">Contact</Link>
//         //     <Link to="/product">Product</Link>
//         // </React.Fragment>
//     );
// }
// const Contactpage = () => {
//     return (
//         <React.Fragment>
//             <NavLink exact to="/" activeClassName="active">Home</NavLink>
//             <NavLink to="/contact" activeClassName="active">contact</NavLink>
//             <NavLink to="/products" activeClassName="active">product</NavLink>

//         </React.Fragment>
//         // <React.Fragment>
//         //     <Link to="/">Home|</Link>
//         //     <Link to="/contact">Contact</Link>
//         //     <Link to="/product">Product</Link>
//         // </React.Fragment>
//     )
// }
// const NotFound = () => {
//     return (
//         <React.Fragment>
//             <NavLink exact to="/" activeClassName="active">Home</NavLink>
//             <NavLink to="/contact" activeClassName="active">contact</NavLink>
//             <NavLink to="/products" activeClassName="active">product</NavLink>

//         </React.Fragment>
//         // <React.Fragment>
//         //     <Link to="/">Home|</Link>
//         //     <Link to="/contact">Contact</Link>
//         //     <Link to="/product">Product</Link>
//         // </React.Fragment>
//     );
// }
// const routes = (
//     <BrowserRouter>
//         <Switch>
//             <Route exact path="/" component={Homepage} />
//             <Route path="/contact" component={Contactpage} />
//             <Route path="/product" component={Productspage} />
//             <Route component={NotFound} />
//         </Switch>

//     </BrowserRouter>
// )
ReactDom.render(<App/>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

