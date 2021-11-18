import React from "react";
import { Component } from "react";
import './Api.css'


export default class Api extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        fetch("http://203.88.139.169:9064/API/ECom/CategoryList",{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
            },
            
        })

            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    items: data,

                });
            })
    }
    render() {
        const { items } = this.state;

        return (
            < >
                <h1> Fetch data</h1>  {
                    items.map((item) => (
                        <div key={item.id}>

                            <div className="card w-50">
                                <div className="card-header">
                                    <div>Id:{item.id}</div>
                                    <div>NodeId: {item.node_id}</div>
                                    <div>Name: {item.name}</div>
                                </div>
                                <div className="card-body">
                                    <div>Full_Name:{item.full_name}</div>
                                    <div>Private:{(item.private)}</div>
                                    <div>Owner_login: {item.owner.login}</div>
                                </div>
                                <div className="card-footer">
                                    <div>Owner_id: {item.owner.id}</div>
                                    <div>Owner_node_Id: {item.owner.node_id}</div>
                                    <div>Avatar_Url:{item.owner.avatar_url}</div>
                                </div>
                            </div>
                            
                        </div>
                    ))
                }
            </>
        );
    }
}

