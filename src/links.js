import React from "react";
import "./App.css";

export default function Links(){
    return(
        <div className="links"> 
            <h3>Research</h3>
            <h3 className="just">About
                    <div className="links--below">
                        <h4 className="me"><a href="#">Background</a>
                            <div className="links--below2">
                                <h4><a href="#">Admin 1</a></h4>
                                <h4><a href="#">Admin 2</a></h4>
                                <h4><a href="#">Admin 3</a></h4>
                                <h4><a href="#">Admin 4</a></h4>
                            </div>
                        </h4>
                        <h4><a href="#">History</a></h4>
                    </div> 
            </h3>
            <h3>Directions</h3>
            <h3 className="just">Contacts
                <div className="links--below">
                        <h4 className="me"><a href="#" target="_blank">Admin</a>
                            <div className="links--below2">
                                <h4><a href="#">Admin 1</a></h4>
                                <h4><a href="#">Admin 2</a></h4>
                                <h4><a href="#">Admin 3</a></h4>
                                <h4><a href="#">Admin 4</a></h4>
                            </div>
                        </h4>
                        <h4><a href="#" target="_blank">Supervisor</a></h4>
                        <h4><a href="#" target="_blank">Worker</a></h4>
                        <h4><a href="#" target="_blank">Trainee</a></h4>
                </div>
            </h3>
            <h3>Price</h3>
            <h3 className="just">Blog
                <div className="links--below">
                    <h4><a href="#" target="_blank">Comments</a></h4>
                    <h4><a href="#" target="_blank">Simple Blogs</a></h4>
                    <h4><a href="#" target="_blank">Tweak</a></h4>
                </div>
            </h3>
            <h3>Duration</h3>
        </div>
    );
}