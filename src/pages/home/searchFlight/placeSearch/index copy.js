import React, { Component } from "react";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import {SearchLocation} from '../../../../action/flightActions'

class PlaceSearch extends Component{
    state = {
        isLoading: false,
        options: [],
        selectedLoaction: null
    }
    onSelectedLocation = (selected) => {
        this.setState({ selectedLoaction: selected }, () => this.onGetWeatherFromLocation())
    }
    onGetWeatherFromLocation = async () => {
       
        const { selectedLoaction } = this.state;
        console.log("selectedLoaction", selectedLoaction)
        if (selectedLoaction && selectedLoaction.length > 0 && Object.keys(selectedLoaction).length > 0 && selectedLoaction[0].value) this.props.onUpdateLocation(selectedLoaction);
        if (selectedLoaction && selectedLoaction.length > 0 && Object.keys(selectedLoaction).length > 0 && selectedLoaction[0].value) {
            //selectedLoaction[0].value
        }
    }
    handleSearch = async (query) => {
        this.setState({ isLoading: true })

        await SearchLocation(query).then((response) => {
            const { results } = response.data;
            let optionsData = [];
            if (results && results.length > 0) {
                results.map((item) => {
                    optionsData.push({ id: item.Key, value: item.Key, label: item.LocalizedName })
                })

            }
           // this.setState({ options: optionsData, locationSearchData: results, isLoading: false })

            return response.data
        })


    };
    render(){
        const { isLoading, options, selectedLoaction } = this.state;
        const filterBy = () => true;
        return <AsyncTypeahead
        selected={selectedLoaction}
        onChange={this.onSelectedLocation}
        filterBy={filterBy}
        id="async-example"
        isLoading={isLoading}
        labelKey="label"
        minLength={3}
        onSearch={this.handleSearch}
        options={options}
        placeholder="Search for a location..."
        renderMenuItemChildren={(option, props) => <span>{option.label}</span>
        }
    />
    }
}

export default PlaceSearch