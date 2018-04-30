import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';
import './FirstChart.css';

class FirstChart extends React.Component {

render(){
  return (
    <div>
      <ul>
        <li>{this.props.MarriedCount}--were married</li>
        <li>{this.props.SingleCount}--were single</li>
        <li>{this.props.IrregularCount}--were marked as being in an Irregular Union</li>
        <li>{this.props.WidowedCount}--were widowed</li>
        <li>{this.props.UnknownCount}--had an Unknown Marital Status</li>
      </ul>
      <XYPlot
  width={300}
  height={300}>
  <HorizontalGridLines />
  <LineSeries
    data={[
      {x: 2, y: this.props.MarriedCount},
      {x: 3, y: this.props.SingleCount},
      {x: 4, y: this.props.IrregularCount},
      {x: 5, y: this.props.WidowedCount},
      //the next line gets wrapped in parseInt since react-vis
      //was giving me a rangeNull error. I'm pretty sure it
      //has to do with a float/int mixup.
      {x: 6, y: parseInt(this.props.UnknownCount)},
    ]}/>
  <XAxis  />
  <YAxis />
</XYPlot>
    </div>
  )
}
}

export default FirstChart;
