import React, { Component } from 'react';

class Player extends Component {

    handleForm(e){
        e.preventDefault()
        
 this.props.player(e.target.gamer.value)
    
    }

    render(){
        return  (
        <form onSubmit = {(e) => this.handleForm(e)}>
            <label>
                Player X

                <input type= 'radio' name='gamer' value ='X'/>
               
            </label> 

            <label>
                Player O

            <input type= 'radio' name='gamer' value ='O'/>
               
            </label>
            <input type= 'submit' value ='start'/>
        </form>

        )
    }
}

export default Player