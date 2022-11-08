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
                        I am a CS Grad by degree and a Software Developer by skills. I love programming and building software solutions around AI, Machine Learning, DevOps and Web Development.
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