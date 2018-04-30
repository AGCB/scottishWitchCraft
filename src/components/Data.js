import React from 'react';
import './data.css';
import FirstChart from './FirstChart';
import CSVLoader from './CSVLoader';
import SecondChart from './SecondChart';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.PassDataToDataJS = this.PassDataToDataJS.bind(this);
    this.state = {
      data: [[''],],
      status: {},
      devilType: 0,
    }
  }

    runAccusedRef = data => {
      //on Column 23 of this data, we get the Marital Status of the accused.
      let status = {
        Married: 1,
        Widowed: 0,
        Single: 0,
        IrregularUnion: 0,
        Unknown:0,
      };
      //and here we build up that object so that we have total occurences
      //of each marital status.
      this.state.data.forEach(x=>{
        if (x[23] === 'Married') {
          status.Married++
        }
        else if (x[23] === 'Single') {
          status.Single++;
        }
        else if (x[23] === 'Widowed') {
          status.Widowed++;
        }
        else if (x[23] === 'Irregular union') {
          status.IrregularUnion++;
        }
        else {status.Unknown++;}
      });
      this.setState(prev => ({
        status: status,
      }));
      // console.log(this.state.status, 'here is status')
      // console.log('-----')
      // console.log(this.state.data[0][0], 'here is data')
      // console.log('-----')
    }

    runDevil = data => {
      let devilType = {
        AnimalDevil: 1,
        Baby: 0,
        ChildDevil: 0,
        Fairy: 0,
        Female: 0,
        FemaleFairy: 0,
        Ghost: 0,
        HumanDevil: 0,
        InanimateObjectDevil: 0,
        InsectDevil: 0,
        Male: 0,
        MaleFairy: 0,
        Other: 0,
        Spirit: 0,
        Unspecified: 0,
      }
      this.state.data.forEach(x => {

        if (x[4] === 'Male') {
          devilType.Male++
        }
        else if (x[4] === 'Female') {
          devilType.Female++;
        }
        else if (x[4] === 'Child Devil') {
          devilType.ChildDevil++;
        }
        else if (x[4] === 'Animal Devil') {
          devilType.AnimalDevil++;
        }
        else if (x[4] === 'Unspecified Devil') {
          devilType.Unspecified++;
        }
        else if (x[4] === 'Spirit') {
          devilType.Spirit++;
        }
        else if (x[4] === 'Baby') {
          devilType.Baby++;
        }
        else if (x[4] === 'Fairy') {
          devilType.Fairy++;
        }
        else if (x[4] === 'Male Fairy') {
          devilType.MaleFairy++;
        }
        else if (x[4] === 'Ghost') {
          devilType.Ghost++;
        }
        else if (x[4] === 'Insect Devil') {
          devilType.InsectDevil++;
        }
        else if (x[4] === 'Inanimate Object Devil') {
          devilType.InanimateObjectDevil++;
        }
        else if (x[4] === 'Human Devil') {
          devilType.HumanDevil++;
        }
        else if (x[4] === 'Female Fairy') {
          devilType.FemaleFairy++;
        }
      });
      this.setState(prev => ({
        devilType: devilType,
      }));
    }

    PassDataToDataJS = data => {
      this.setState(prev => ({
        data: data,
      }))

      if (data[0][0] === 'AccusedRef') {
        this.runAccusedRef(data);
      }
      if (data[0][0] === 'DevilRef') {
        this.runDevil(data);
      }
      else {
        let tableName = data[0][0].slice(0,data[0][0].length-3)
        console.log('here is our data set tableName', tableName)
      }
}

  render() {
    return (
      <div className="dataContainer">
        <h3>Datas</h3>
        <p style={{"maxWidth":"330px","marginLeft":"30%"}}>Uber's react-vis lib has a line chart component shown below with data being injected after you choose an input file
        Only if pick correctly will the data inject.</p>
        <FirstChart MarriedCount={this.state.status.Married}
                    SingleCount={this.state.status.Single}
                    IrregularCount={this.state.status.IrregularUnion}
                    WidowedCount={this.state.status.Widowed}
                    UnknownCount={this.state.status.Unknown}/>
        <p>Married, Single, Widowed, and Unknown layed out on a chart from left to right. </p>
        <CSVLoader PassDataToDataJS={this.PassDataToDataJS}/>
        <ul className="listItems">
          <li>what a terrible use for a line chart?!</li>
          <li>If you chose Accused.csv for the above file...</li>
          <li>There were MUCH more undefined marital status' than defined. </li>
          <li>Of the people we did have marital status for, most were married</li>
          <li>Is this a sign of men getting rid of wives?</li>
          <li>or is it to be expected because of unusually high marriage rates of the time?</li>
        </ul>
        <SecondChart AnimalDevil={this.state.devilType.AnimalDevil}
                     Baby={this.state.devilType.Baby}
                     ChildDevil={this.state.devilType.ChildDevil}
                     Fairy={this.state.devilType.Fairy}
                     FemaleFairy={this.state.devilType.FemaleFairy}
                     Ghost={this.state.devilType.Ghost}
                     HumanDevil={this.state.devilType.HumanDevil}
                     InanimateObjectDevil={this.state.devilType.InanimateObjectDevil}
                     Male={this.state.devilType.Male}
                     MaleFairy={this.state.devilType.MaleFairy}
                     Spirit={this.state.devilType.Spirit}

                        />
        <CSVLoader PassDataToDataJS={this.PassDataToDataJS}/>
      </div>
    )
  }

};

export default Data;
