import React from "react";
import { Component } from "react";


export default class App extends Component {


    constructor(props) {
        super(props);

        this.state = {
            items: []

        };
    }


    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({catid:2,pickupid:0,PageIndex:1,PageLength:1})
        };
        const api = "http://203.88.139.169:9064/API/ECom/ProductListByCategoryWithPaginationForHS";
        fetch(api,requestOptions)
            .then((response) => response.json())
            .then((data) => {
                    
                this.setState({
                    items: data

                });
            })
    }
    render() {
        const { items } = this.state;


        return (
            <div>
                <h1>Fetch Data</h1> {
                    items.map((item) => (
                        <div key={item.data} >
                            <div>
                                StatusCode: {item.StatusCode}
                            </div>
                            <div>
                                Message:{item.Message}
                            </div>
                            <div>
                                Data_TotalRecord: {item.Data.TotalRecord}
                            </div>
                            <div>
                                Data_Products:{item.Products}
                            </div>

                        </div>
                    ))
                }
            </div>
        );
    }
}

