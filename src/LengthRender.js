import React from "react";
import "./index.css";

function LengthRender(props) {
  return (
    <div className="length">
      <br />
      <form onSubmit={props.convert}>
        <input
          type="text"
          placeholder="Enter Value"
          value={props.data.number}
          name="number"
          onChange={props.handleChangeInput}
        />
        &nbsp;&nbsp;
        <label>
          <select onChange={props.handleChangeSelect} value={props.data.unit}>
            <option>--Choose Unit--</option>
            <option value="meter">Meter</option>
            <option value="kilometer">Kilometer</option>
            <option value="centimeter">Centimeter</option>
            <option value="millimeter">Millimeter</option>
            <option value="inch">Inch</option>
            <option value="foot">Foot</option>
            <option value="yard">Yard</option>
            <option value="mile">Mile</option>
          </select>
        </label>
        &nbsp;&nbsp;
        <button className="button">Convert</button>
      </form>

      <h4>Meter: {props.data.meter}</h4>
      <h4>Kilometer: {props.data.kilometer}</h4>
      <h4>Centimeter: {props.data.centimeter}</h4>
      <h4>Millimeter: {props.data.millimeter}</h4>
      <h4>Inch: {props.data.inch}</h4>
      <h4>Foot: {props.data.foot}</h4>
      <h4>Yard: {props.data.yard}</h4>
      <h4>Mile: {props.data.mile}</h4>
    </div>
  );
}

export default LengthRender;
