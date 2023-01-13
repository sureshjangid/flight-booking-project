import React, { Component } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import './search.css'
import { SearchLocation } from '../../../../action/flightActions'


class PlaceSearch extends Component {
    state = {
        items: [],
        completeData: []
    }

    // note: the id field is mandatory

    handleOnSearch = async (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        var self = this
        await SearchLocation(string).then((response) => {
            const { data } = response.data;
            console.log("data", data)
            var searchData = []
            if (data && data.length > 0) {

                const result = data.map((item) => {
                    searchData.push({ id: item.id, name: `${item.name} (${item.iata_code})`, description: item.name,data:item })
                })
                console.log("dat 1aaa", searchData)
                self.setState({ items: searchData, completeData: data })
            }
            return response.data

        })
        console.log(string, results)
    }

    handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

    handleOnSelect = (item) =>this.props.onSearchUpdate(item)
   

    handleOnFocus = () => {
        console.log('Focused')
    }
    render() {
        const { items, completeData } = this.state;
        const { value,placeholder } = this.props;
        return (
            <ReactSearchAutocomplete
                items={items}
                onSearch={this.handleOnSearch}
                onHover={this.handleOnHover}
                onSelect={this.handleOnSelect}
                onFocus={this.handleOnFocus}
                autoFocus
                inputSearchString={value}
                showItemsOnFocus={false}
                className="form-control"
                showIcon={false}
                placeholder={placeholder}
                showClear={false}

            />

        )
    }
}

export default PlaceSearch