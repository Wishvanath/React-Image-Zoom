import React, { Component } from 'react'
import './image_demo.css';
import ReactIntense from 'react-intense';
export default class ImageDemo extends Component {
    render() {
        return (
            <div>
                <h1>Click on Image and see the effect</h1>
                <div className="container image_demo">
                    <div className="col-sm-4 thumbnail">
                        <ReactIntense className="test_image" src='image/model_view_image.jpg' />
                    </div>
                    <div className="col-sm-4 thumbnail">
                        <ReactIntense className="test_image" src='image/model_view_image-2.jpg' />
                    </div>
                    <div className="col-sm-4 thumbnail">
                        <ReactIntense  className="test_image" src='image/model_view_image-3.jpg' />
                    </div>
                </div>
            </div>
        )
    }
}
