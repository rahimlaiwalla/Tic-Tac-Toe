import React from 'react';
import { throws } from 'assert';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            board: [['', '', ''],
                    ['', '', ''],
                    ['', '', '']],
            letter: 'X',
            comment: '',
            move: 0
            
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.checkForWin = this.checkForWin.bind(this);
        this.checkForTie = this.checkForTie.bind(this);
    }

    handleSubmit(event, i, j) {
        var copyBoard = this.state.board.slice();
        if(copyBoard[i][j] === ''){
            copyBoard[i][j] = this.state.letter;
            this.setState({board: copyBoard});
            if(this.state.letter === 'X'){
                this.setState({letter: 'O'})
            } else {
                this.setState({letter: 'X'})
            }
            
        }
        this.state.move++
        console.log(this.state.move)
        
        this.checkForTie();
        this.checkForWin();
        event.preventDefault();
    }

    handleReset(event){
        this.setState({board: [['', '', ''],
                               ['', '', ''],
                               ['', '', '']]})
        this.setState({letter: 'X'})
        this.setState({comment: ''})
        this.setState({move: 0})

        event.preventDefault();
    }

    checkForWin(){
        for( var i = 0; i<this.state.board.length; i++ ) {
            
            if(((this.state.board[i][0] === this.state.board[i][1]) && (this.state.board[i][1] === this.state.board[i][2])) && this.state.board[i][0] === 'X'){
                this.setState({comment: 'X wins!'})
            } else if (((this.state.board[i][0] === this.state.board[i][1]) && (this.state.board[i][1] === this.state.board[i][2])) && this.state.board[i][0] === 'O'){
                this.setState({comment: 'O wins!'})
            }

            
        }


        if((this.state.board[0][0] === this.state.board[1][1]) && (this.state.board[1][1] === this.state.board[2][2]) && this.state.board[0][0] === 'X'){
            this.setState({comment: 'X wins'})
        } else if((this.state.board[0][0] === this.state.board[1][1]) && (this.state.board[1][1] === this.state.board[2][2]) && this.state.board[0][0] === 'O'){
            this.setState({comment: 'O wins'})
        }

        if((this.state.board[0][2] === this.state.board[1][1]) && (this.state.board[1][1] === this.state.board[2][0]) && this.state.board[0][2] === 'X'){
            this.setState({comment: 'X wins'})
        } else if((this.state.board[0][2] === this.state.board[1][1]) && (this.state.board[1][1] === this.state.board[2][0]) && this.state.board[0][2] === 'O'){
            this.setState({comment: 'O wins'})
        }

        for( var i = 0; i<this.state.board.length; i++ ) {
            for(var j = 0; j<this.state.board[i].length; j++){
                if((this.state.board[i][j] === this.state.board[i+1][j]) && (this.state.board[i+1][j] === this.state.board[i+2][j]) && this.state.board[i+2][j] === 'X') {
                    this.setState({comment: 'X wins!'})
                }
                if((this.state.board[i][j] === this.state.board[i+1][j]) && (this.state.board[i+1][j] === this.state.board[i+2][j]) && this.state.board[i+2][j] === 'O') {
                    this.setState({comment: 'O wins!'})
                }
            }
        }

    }

    checkForTie(){
        if(this.state.move === 9 && this.state.comment === ''){
            this.setState({comment: 'Tie Game'})
        }
    }

    render() {
        return (
          <div>
            <h1 className='title'>{'Tic-Tac-Toe'}</h1>
            <div className='winner'>{this.state.comment}</div>
            <table className='table'>
                <tr className='row'>
                    <td className='square'>
                        <button className='button' onClick={() => this.handleSubmit(event, 0, 0)}>{this.state.board[0][0]}</button>
                    </td>
                    <td className='square'>
                        <button className='button' onClick={() => this.handleSubmit(event, 0, 1)}>{this.state.board[0][1]}</button>
                    </td>
                    <td className='square'>
                        <button className='button' onClick={() => this.handleSubmit(event, 0, 2)}>{this.state.board[0][2]}</button>
                    </td>
                </tr>
                <tr className='row'>
                    <td className='square'>
                        <button className='button' onClick={() => this.handleSubmit(event, 1, 0)}>{this.state.board[1][0]}</button>
                    </td>
                    <td className='square'>
                        <button className='button' onClick={() => this.handleSubmit(event, 1, 1)}>{this.state.board[1][1]}</button>
                    </td>
                    <td className='square'>
                        <button className='button' onClick={() => this.handleSubmit(event, 1, 2)}>{this.state.board[1][2]}</button>
                    </td>
                </tr>
                <tr className='row'>
                    <td className='square'>
                        <button className='button' onClick={() => this.handleSubmit(event, 2, 0)}>{this.state.board[2][0]}</button>
                    </td>
                    <td className='square'>
                        <button className='button' onClick={() => this.handleSubmit(event, 2, 1)}>{this.state.board[2][1]}</button>
                    </td>
                    <td className='square'>
                        <button className='button' onClick={() => this.handleSubmit(event, 2, 2)}>{this.state.board[2][2]}</button>
                    </td>
                </tr>
            </table>
            <div>
                <button onClick={this.handleReset}>{'Reset Table'}</button>
            </div>
          </div>
        )
    }
}

export default App;