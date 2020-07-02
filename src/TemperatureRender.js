import React from "react";

function TemperatureRender(props) {
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
            <option value="fahrenheit">Fahrenheit</option>
            <option value="celsius">Celsius</option>
            <option value="kelvin">Kelvin</option>
          </select>
        </label>
        &nbsp;&nbsp;
        <button className="button">Convert</button>
      </form>

      <h4>Fahrenheit: {props.data.fahrenheit}</h4>
      <h4>Celcius: {props.data.celcius}</h4>
      <h4>Kelvin: {props.data.kelvin}</h4>
    </div>
  );
}

export default TemperatureRender;
