import React, { Component } from 'react'

const url ="http://yaman.omranhallak.com.tr/api/"

export default class Api extends Component {
constructor(props){
    super(props)
    this.state={
    products:''        
    }
}
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
    componentDidMount(){
        fetch(url, {
            Method: 'Get'})
            .then((res)=>res.json())
            .then((post =>{
                this.setState({products:post})
            }))
    }
}
