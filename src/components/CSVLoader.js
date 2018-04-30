import React from 'react';
import CSVReader from 'react-csv-reader';
import './csvLoader.css';


class CSVLoader extends React.Component {


render() {
  return (
    <div className = "csvLoaderContainer">

      <CSVReader
         cssClass="react-csv-input"
         label="select a .csv file "
         onFileLoaded={this.props.PassDataToDataJS}
       />
    </div>
  )}}
  export default CSVLoader;
