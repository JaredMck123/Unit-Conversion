import React from "react";

function WeightRender(props) {
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
            <option value="kilogram">Kilogram</option>
            <option value="gram">Gram</option>
            <option value="milligram">Milligram</option>
            <option value="ton">Ton</option>
            <option value="pound">Pound</option>
            <option value="ounce">Ounce</option>
          </select>
        </label>
        &nbsp;&nbsp;
        <button className="button">Convert</button>
      </form>

      <h4>Kilogram: {props.data.kilogram}</h4>
      <h4>Gram: {props.data.gram}</h4>
      <h4>Milligram: {props.data.milligram}</h4>
      <h4>Ton: {props.data.ton}</h4>
      <h4>Pound: {props.data.pound}</h4>
      <h4>Ounce: {props.data.ounce}</h4>
    </div>
  );
}
export default WeightRender;
