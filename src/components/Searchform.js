import React, { Component } from 'react';

const API_KEY = '446457c6';

class Searchform extends Component {
    state = { 
        inputMovie: ''
     }

     _handleChange = (e)=>{
        this.setState({ inputMovie: e.target.value })
     }

     _handleSubmir = (e)=>{
         e.preventDefault();
         fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.inputMovie}
         `)
         .then(res => res.json() )
         .then( results => {
             const { Search, totalResults} = results;
             this.props.onResults(Search)
             console.log(results, totalResults)
         } )
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