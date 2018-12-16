import React, { Component } from 'react'

export default class Stats extends Component {
 
  render() {
    const stats = this.props.stats;
    const stat = Object.keys(stats).map(stat => { 
        let value  = Math.floor(stats[stat]/200*100)
        let bg = ''
        if(value > 100){value = 100}
        if(value < 25){
            bg = 'bg-danger'
        }else if(value < 50){
            bg = 'bg-warning'
        }else if(value < 75){
            bg = 'bg-success'
        }else if ( bg <= 100){
            bg = 'bg-info'
        }

        return ( 
        <div key={stat}> <span>{stat}: {stats[stat]}</span>
            <div className="progress">
                <div className={`progress-bar ${bg}`} role="progressbar" style={{width: `${value}%`}} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
     )})
    return (
        <div className="col-xs-10 col-sm-6">
            {stat}
        </div>
    )
  }
}
