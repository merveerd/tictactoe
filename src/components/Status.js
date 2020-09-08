import React, { Component } from 'react';
import Player from './choosePlayer';

class Status extends Component{

    handleSetPlayer(e){
        this.props.setPlayer(e)
    }

    handleReset(){
        this.props.reset()
    }
    renderHTML(){ // burda parameter olarak props vermedik ama yine de calisti? referans: https://www.youtube.com/watch?v=dGcsHMXbSOA 30.13sn
        if(this.props.winner){
          return (<h2>Winner is {this.props.winner}</h2>)
            }
    else{
        return this.props.player ? 
        <h2>Next player is {this.props.player}</h2>: 
        <Player player = {(e) => this.handleSetPlayer(e)} /> // tag icerisinde ternary i uygulayamiyoruz. JSX icinde js kullanacaksak suslu parantez icinde kullanmaliyiz.    
       }
    }
    
    render(){ // jsx asagisi returnden sonra, o yuzden tag icinde olmali.
    return (<span>{this.renderHTML()}</span> )
    }
}

export default Status