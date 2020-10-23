import React, { Suspense, lazy } from 'react';
import { connect } from "react-redux";
import { Route, BrowserRouter, Switch } from "react-router-dom";
const Dashboard = lazy(() => import("./Dashboard"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Portfolio = lazy(() => import("./Portfolio"));
const Navigation = lazy(() => import("../general/UI/Navigation"));
import menus from "../utils/menus";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {

        window.addEventListener("scroll", (e) => {
            let topNavBar = document.getElementById("top-nav-bar");
            if (window.scrollY > window.visualViewport.height) {
                topNavBar.classList.add("nav-sticky");
            } else {
                topNavBar.classList.remove("nav-sticky");
            }

        })
    }
    componentWillUnmount() {
        window.removeEventListener("scroll");
    }

    render() {
        return (<>
            <div>
                <section className="cover-holder-container" id="home" >
                    <main className="cover-holder">
                        <div className="cover">
                            <h1 className="cover-text">
                                <span className="cover-text-headline" >Hello, I'm <span className="title-name">Mohotasim Fuad</span>.</span>
                                <span className="cover-text-headline">I'm full-stack web developer</span>
                                {/* <button className="btn btn-lg btn-view-my-work">View my work </button> */}
                            </h1>
                        </div>
                    </main>
                </section>
                <Suspense fallback={<span>Loading...</span>}>
                    <BrowserRouter >
                        <Switch>
                            <div >
                                <Navigation menus={menus} />
                                <div >
                                    <Route exact component={Dashboard} path="/" />

                                </div>
                            </div>
                        </Switch>
                    </BrowserRouter>
                </Suspense>
            </div>
        </>);
    }
};

const mapStateToProps = (state) => {
    return {
        appStore: state.appStore
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
