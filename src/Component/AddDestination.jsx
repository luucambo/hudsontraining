import React, { Component } from "react";


export default class AddDestination extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        id: '',
        description: '',
        cityId: ''
    });

    handleChange = (field, event) => {
        const { target: { value } } = event;
        this.setState({
            [field]: value
        });
    }

    handleAdd = () => {
        const { id, description, cityId } = this.state;
        if (cityId && description) {
            this.props.onAdd({ id, description, cityId });
            this.setState(this.getInitialState());
        } else{
            alert('Please fill info');
            return;
        }
    }

    handleCancel = () => {
        this.setState(this.getInitialState());
    }
    render() {
        return (
            <div className="ui container raised very padded segment">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="cityId">cityId</label>
                        <input className='form-control' type="text" id="cityId" value={this.state.cityId} onChange={this.handleChange.bind(this, 'cityId')} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input className='form-control' type="text" id="description" value={this.state.description} onChange={this.handleChange.bind(this, 'description')} />
                    </div>
                    <button className="ui positive button" onClick={this.handleAdd}>
                        Save
                    </button>
                </div>
            </div>
        );
    }
}