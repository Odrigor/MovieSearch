import React, { Component } from 'react';

class Searchform extends Component {
    state = { 
        inputMovie: ''
     }

     _handleChange = (e)=>{
        this.setState({ inputMovie: e.target.value })
     }

     _handleSubmir = (e)=>{
         e.preventDefault();
         alert(this.state.inputMovie)
     }

    render() { 
        return (
            <form onSubmit={this._handleSubmir}>
                <div className="field has-addons">
                <div className="control">
                <input className="input" type="text" placeholder="Movie Respository" onChange={this._handleChange} />
                </div>
                <div className="control">
                    <button className="button is-info">
                        Search
                    </button>
                </div>
                </div>
            </form>

        );
    }
}
 
export default Searchform;