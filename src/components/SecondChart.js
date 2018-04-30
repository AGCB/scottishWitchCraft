import React from 'react';
import './SecondChart.css'

class SecondChart extends React.Component {

  render() {
    let ady = 400-this.props.AnimalDevil;
    let by = 400-this.props.Baby;
    let cdy = 400-this.props.ChildDevil;
    let fy = 400-this.props.Fairy;
    let my = 400-this.props.Male;
    let ffy = 400-this.props.FemaleFairy;
    let gy = 400-this.props.Ghost;
    let hdy = 400-this.props.HumanDevil;
    let sy = 400-this.props.Spirit;
    let mfy = 400-this.props.MaleFairy;
    return (
      <div>
        <h1>Second Chart. </h1>
        <p>For the second chart I'm going to try to take the data and just turn it into a raw svg</p>

        <svg width="400" height="400">
            <rect x="0" y={ady}   width="40" height={this.props.AnimalDevil} />
            <rect x="40" y={by}   width="40" height={this.props.Baby} />
            <rect x="80" y={cdy}   width="40" height={this.props.ChildDevil} />
            <rect x="120" y={fy}   width="40" height={this.props.Fairy} />
            <rect x="160" y={my}   width="40" height={this.props.Male} />
            <rect x="200" y={ffy}   width="40" height={this.props.FemaleFairy} />
            <rect x="240" y={gy}   width="40" height={this.props.Ghost} />
            <rect x="280" y={hdy}   width="40" height={this.props.HumanDevil} />
            <rect x="320" y={sy}   width="40" height={this.props.Spirit} />
            <rect x="360" y={mfy}   width="40" height={this.props.MaleFairy} />

            <text x="5"  y={this.props.AnimalDevil+250}> AnimalDevil</text>
            <text x="165"  y={this.props.AnimalDevil+40}>Male</text>
            <text x="325"  y={this.props.Spirit+350}>Spirit</text>
            <text x="125"  y={this.props.Fairy+250}>Fairy</text>
            <text x="205"  y={this.props.FemaleFairy+250}>Fem.Fairy</text>
            <text x="245" y={this.props.Ghost+350}>Ghost</text>
            <text x="365" y={this.props.MaleFairy+350}>M.Fairy</text>

        </svg>
        <p>It's quite obvious that more often than not, the devil is a male.</p>
      </div>
    )
  }
}

export default SecondChart;
