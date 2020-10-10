import React, { Component } from 'react';

export default class MultipleImageUploadComponent extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)
        this.state = {
            file: [null],
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
    }

    uploadMultipleFiles(e) {
        this.fileObj = [];
        this.fileArray = [];
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.props.parentCallback(this.fileArray); //send image data to cretemodalconten
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
                </div>
            </form >
        )
    }
}