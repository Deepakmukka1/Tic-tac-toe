import './App.css';
import React, { Component } from 'react'


class App extends Component {
    
    state=({
      player:"B",
      board:[" "," "," "," " ," "," "," "," "," "]

    })

    clickedsquare=(index)=>{
      let curplayer=this.state.player;
       if(curplayer==="A") curplayer="B" 
      else curplayer="A" 
      let newboard=this.state.board;
      //const boards=this.state.board
       
       let symbols = (curplayer==="A") ? "X" : "O"
       newboard[index]=symbols
       let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]
      for (let i = 0; i < wins.length; i++) {
        const [a, b, c] = wins[i];
        if (newboard[a]!==" " && newboard[a] === newboard[b] && newboard[a] === newboard[c])
        {

         alert(`Player ${curplayer} has won`)
         window.location.reload();
         alert("New Game will start in few seconds")
        
        }
      }
       
       this.setState({
        player:curplayer,
        board:newboard

       });

      
       
     // this.style.color='black'  
     
    }
   
  
  render(){
   
  return (
   <div>
   <h1 class="head"> Welcome to tic tac toe game</h1> 
  
   <div className="back-grid">
    {this.state.board.map((square,index)=>{
      return(<div onClick={()=>this.clickedsquare(index)}
        className="squares"><h3 className="symb" >{square}</h3></div>)
    })}
   </div>
 
   </div>
  );
}
}

export default App;
