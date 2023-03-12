import React, { Component } from "react";
import { Link } from "react-router-dom";

// const Ajob = Component(
//     <div class="card">
//         <div class="card-header">
//             At Cognizant
//         </div>
//         <div class="card-body">
//             <h5 class="card-title">Need a Junior Devloper</h5>
//             <p class="card-text">Required Skills: MERN, Bootstrap, Java</p>
//             <a href="#" class="btn btn-primary">Apply</a>
//         </div>
//     </div>
// )


    const myImageStyle = { width: '50%', height: '50%' };


export default class Res extends Component {
    render() {
        return (
            <div style={{ marginInline: "200px" }}>

                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card">
                            <img src={require('./img/job.png')} style={myImageStyle} class="card-img-top" alt="img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Resource1</h5>
                                    <Link  type="button" class="btn btn-outline-primary" style={{fontSize:"1em"}}>Link</Link>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={require('./img/job.png')} style={myImageStyle} class="card-img-top" alt="img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Resource2</h5>
                                    <Link  type="button" class="btn btn-outline-primary" style={{fontSize:"1em"}}>Link</Link>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={require('./img/job.png')} style={myImageStyle} class="card-img-top" alt="img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Resource3</h5>
                                    <Link  type="button" class="btn btn-outline-primary" style={{fontSize:"1em"}}>Link</Link>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={require('./img/job.png')} style={myImageStyle} class="card-img-top" alt="img"/>
                                <div class="card-body">
                                    <h5 class="card-title">Resource5</h5>
                                    <Link  type="button" class="btn btn-outline-primary" style={{fontSize:"1em"}}>Link</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}