import React from "react";

function TimeRender(props) {
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
            <option value="second">Second</option>
            <option value="millisecond">Millisecond</option>
            <option value="minute">Minute</option>
            <option value="hour">Hour</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </label>
        &nbsp;&nbsp;
        <button className="button">Convert</button>
      </form>

      <h4>Second: {props.data.second}</h4>
      <h4>Millisecond: {props.data.millisecond}</h4>
      <h4>Minute: {props.data.minute}</h4>
      <h4>Hour: {props.data.hour}</h4>
      <h4>Day: {props.data.day}</h4>
      <h4>Week: {props.data.week}</h4>
      <h4>Month: {props.data.month}</h4>
      <h4>Year: {props.data.year}</h4>
    </div>
  );
}
export default TimeRender;
