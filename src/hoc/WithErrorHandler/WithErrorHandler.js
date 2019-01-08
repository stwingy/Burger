import React, { Component } from 'react'

import Modal from '../../components/UI/Modal/Modal'
import AuxF from '../AuxF/AuxF'


const withErrorHandler = (WrappedComponent,axios) => {
    
    return class extends Component{
        state={
            error:null
        }
        componentWillMount(){
this.reqI=axios.interceptors.request.use((req)=>{
    this.setState({error:null})
    return req
})
this.resI=axios.interceptors.response.use(res=>res,(error)=>{
    this.setState({error:error})
})
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqI)
            axios.interceptors.response.eject(this.resI)
        }

        errorConfirmedHandler =()=>{
            this.setState({error:null})
        }
        render(){
            return (
                <AuxF>
                    <Modal 
                    show ={this.state.error}
                    modalClosed= {this.errorConfirmedHandler}
                    >{this.state.error? this.state.error.message : null}
                    </Modal>
     <WrappedComponent {...this.props}/>
                </AuxF>
               
              )

        }
        
    }
  
}

export default withErrorHandler
