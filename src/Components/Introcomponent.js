import React, { Component } from "react";
import "../css/intro.css";


class Intro extends Component{

    render(){

        return(
        <section >
        <div class="jumbotron .jumbotron-fluid jumbobg" id="home" >
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 padding" name="home">
                        <h2>Hello, I am <br></br></h2>
                        <h1 className="i-name"><b>Rajat Keshri</b></h1>
                        <div className="i-title">
                            <div className="i-wrapper">
                                <div className="i-skills"> Software Engineer</div>
                                <div className="i-skills"> Full-Stack Web Developer</div>
                                <div className="i-skills"> Machine Learning Enthusiast</div>
                                <div className="i-skills"> Firmware Developer</div>
                            </div>
                        </div>
                        <p className="justify">
                        I am an Engineer and an enthusiastic AI/ML developer. I am proficient in developing automation software and applications using C, C++ and Python. I am also a web designer and full stack developer, having proficiency in using Django, React and NodeJS, with use case experience in MongoDB, MySQL and firebase database services. 
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <div className="card cardborder w-100 cardstyling text-center ">
                            <div className="card-body">
                                <img class="img-fluid mg-fluid mx-auto d-block circle-img rounded-circle" src="images/rajat1.png" alt="Chania"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </section>
        );
    }
}

export default Intro;