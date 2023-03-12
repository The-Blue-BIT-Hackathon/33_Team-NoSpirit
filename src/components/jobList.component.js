import React, { Component } from "react";

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

export default class Job extends Component {
    render() {
        return (
            <div style={{marginInline:"200px"}}>
                
                <div class="card" style={{ marginBlock: "10px" }}>
                    <div class="card-header" style={{ fontSize: "30px" }}>
                        TCS, Pune
                    </div>
                    <div class="card-body" >
                        <h5 class="card-title" style={{ fontSize: "25px" }}>Job Title: Senior Devloper </h5>
                        <div class="card-text">Required Skills:Django,API</div>
                        <div class="card-text">Experience:18Months+</div>
                        <a href="#" class="btn btn-success" style={{ margin: "10px" }}>Apply</a>
                    </div>
                </div>
                <div class="card" style={{ marginBlock: "10px" }}>
                    <div class="card-header" style={{ fontSize: "30px" }}>
                        Cognizant, Pune
                    </div>
                    <div class="card-body" >
                        <h5 class="card-title" style={{ fontSize: "25px" }}>Job Title: Junior Devloper </h5>
                        <div class="card-text">Required Skills:MERN</div>
                        <div class="card-text">Experience:6Months+</div>
                        <a href="#" class="btn btn-success" style={{ margin: "10px" }}>Apply</a>
                    </div>
                </div>
            </div>

        );
    }
}