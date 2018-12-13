import React, { Component } from 'react'


const SearchForm = props =>(
        <div className="row">
            <div className="col-sm-12">
                <form className="form-inline justify-content-center" >
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" name="filterText" onChange={this.updateSearch.bind(this)}/>
                </form>
            </div>
        </div>
)

export default SearchForm;