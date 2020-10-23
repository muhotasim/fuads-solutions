import React, { Suspense, lazy } from 'react';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [

            ],
            defaultOption: "all"
        };
    }

    componentDidMount() {
        const _this = this;
        fetch(window.origin + "/projects.json").then(d => {
            return d.json()

        }).then(d => {
            _this.setState({ projects: d });
        })
    }

    render() {

        return <>
            <div>

                <section className="section" id="about" >
                    <h1 className="section-headline">ABOUT</h1>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="text-center " style={{ padding: "20%" }}>
                                    <span className="indecator-icon-holder" style={{ fontSize: "36px" }}> <i className="fa fa-fighter-jet"></i></span>
                                </div>
                                <h2>Fast</h2>
                                <p>Fast load times and lag free interaction, my highest priority.</p>
                            </div>
                            <div className="col-md-3">
                                <div className="text-center" style={{ padding: "20%" }}>
                                    <span className="indecator-icon-holder" style={{ fontSize: "36px" }}> <i className="fa fa-arrows-alt"></i></span>
                                </div>
                                <h2>Responsive</h2>
                                <p>My layouts will work on any device, big or small.</p>
                            </div>
                            <div className="col-md-3">
                                <div className="text-center" style={{ padding: "20%" }}>
                                    <span className="indecator-icon-holder" style={{ fontSize: "36px" }}> <i className="fa fa-users"></i></span>
                                </div>
                                <h2>Intuitive</h2>
                                <p>Strong preference for easy to use, intuitive UX/UI.</p>
                            </div>
                            <div className="col-md-3">
                                <div className="text-center" style={{ padding: "20%" }}>
                                    <span className="indecator-icon-holder" style={{ fontSize: "36px" }}> <i className="fa fa-table"></i></span>
                                </div>
                                <h2>Dynamic</h2>
                                <p>Websites don't have to be static, I love making pages come to life.</p>
                            </div>
                        </div>


                        <div style={{ marginTop: "10%" }}>
                            <div className="row">
                                {[{ label: "HTML", width: "90%" }, { label: "CSS", width: "90%" }, { label: "REACT", width: "90%" }, { label: "REACT NATIVE", width: "70%" },
                                { label: "JAVASCRIPT", width: "90%" }, { label: "EXPRESS", width: "70%" }, { label: "NODE JS", width: "65%" }, { label: "PHP", width: "70%" }].map(d => {
                                    return <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-2">{d.label}</div>
                                            <div className="col-md-10">
                                                <div className="progress" style={{ height: "20px" }}>
                                                    <div className="progress-bar pg-color" role="progressbar" style={{ width: d.width }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })}


                            </div>

                        </div>
                    </div>


                </section>
                <section className="section" id="portfolio">
                    <div className="container">
                        <h1 className="section-headline">Projects</h1>

                        <ul className="portfolio-menu">
                            {[{ label: "All", value: "all" }, { label: "Node js", value: "nodejs" }, { label: "PHP", value: "php" }, { label: "React", value: "react" }, { label: "React Native", value: "rn" }].map(d => {
                                return <li className="portfolio-menu-item" onClick={e => { this.setState({ defaultOption: d.value }) }}>{d.label}</li>
                            })}
                            <p className="clearfix"></p>
                        </ul>

                        <div >
                            {this.state.projects.filter(d => { return this.state.defaultOption == "all" ? true : d.val == this.state.defaultOption; }).map(d => {
                                return <div >
                                    <div className="portfolio-holder" style={{ backgroundImage: "url(" + d.img + ")", height: "300px", width: "33.33%", border: "1px solid lightgray" }}>
                                        <p className="card-info">
                                            <span style={{ display: "block" }}>{d.label}</span>
                                            <button className="btn btn-md btn-readmore">Read More</button></p>

                                    </div>
                                </div>
                            })}
                            <p className="clearfix"></p>
                        </div>
                    </div>

                </section>


                <footer>
                    <section style={{ paddingTop: "15%", paddingBottom: "15%" }} id="contact">
                        <h1 className="section-headline" style={{ color: "white" }}> Contact</h1>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <div>
                                        <div className="form-group"><input placeholder="Name" className="form-control" type="text" /></div>
                                        <div className="form-group"><input placeholder="Email" className="form-control" type="text" /></div>
                                        <div className="form-group"><textarea rows={6} placeholder="Message" className="form-control" type="text" ></textarea></div>
                                        <button className="btn btn-lg  btn-send float-right" style={{ backgroundColor: "transparent" }}>Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </footer>
                <section style={{ minHeight: "30vh", backgroundColor: "#192738", color: "deeppink", fontSize: "28px" }}>
                    <ul className="social">
                        <li> <span><i className="fa fa-facebook-square"></i></span></li>
                        <li> <span ><i className="fa fa-envelope-open"></i></span> </li>
                        <li>  <span><i className="fa fa-linkedin"></i></span> </li>
                    </ul>
                </section>
            </div>
        </>
    }
}

export default Dashboard;