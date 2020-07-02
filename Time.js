import React from "react";
import TimeRender from "./TimeRender";

class Time extends React.Component {
  constructor() {
    super();

    this.state = {
      second: 0,
      millisecond: 0,
      minute: 0,
      hour: 0,
      day: 0,
      week: 0,
      month: 0,
      year: 0,
      number: 0,
      unit: "",
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.convert = this.convert.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChangeInput(event) {
    const { name, value } = event.target;

    return this.setState({ [name]: value });
  }

  handleChangeSelect(event) {
    return this.setState({ unit: event.target.value });
  }

  convert(event) {
    event.preventDefault();

    if (this.state.unit === "second") {
      const second = this.state.number;
      this.setState({ second: second });

      const millisecond = this.state.number * 1000;
      this.setState({ millisecond: millisecond });

      const minute = this.state.number * 0.0166;
      this.setState({ minute: minute });

      const hour = this.state.number * 0.000277;
      this.setState({ hour: hour });

      const day = this.state.number * 0.00001157;
      this.setState({ day: day });

      const week = this.state.number * 0.000001653;
      this.setState({ week: week });

      const month = this.state.number * 0.00000038025;
      this.setState({ month: month });

      const year = this.state.number * 0.000000031688;
      this.setState({ year: year });
    } else if (this.state.unit === "millisecond") {
      const second = this.state.number * 0.001;
      this.setState({ second: second });

      const millisecond = this.state.number;
      this.setState({ millisecond: millisecond });

      const minute = this.state.number * 0.0000166;
      this.setState({ minute: minute });

      const hour = this.state.number * 0.000000277;
      this.setState({ hour: hour });

      const day = this.state.number * 0.00000001157;
      this.setState({ day: day });

      const week = this.state.number * 0.000000001653;
      this.setState({ week: week });

      const month = this.state.number * 0.00000000038025;
      this.setState({ month: month });

      const year = this.state.number * 0.000000000031688;
      this.setState({ year: year });
    } else if (this.state.unit === "minute") {
      const second = this.state.number * 60;
      this.setState({ second: second });

      const millisecond = this.state.number * 60000;
      this.setState({ millisecond: millisecond });

      const minute = this.state.number;
      this.setState({ minute: minute });

      const hour = this.state.number * 0.0166;
      this.setState({ hour: hour });

      const day = this.state.number * 0.000694;
      this.setState({ day: day });

      const week = this.state.number * 0.0000992;
      this.setState({ week: week });

      const month = this.state.number * 0.0000228;
      this.setState({ month: month });

      const year = this.state.number * 0.0000019013;
      this.setState({ year: year });
    } else if (this.state.unit === "hour") {
      const second = this.state.number * 3600;
      this.setState({ second: second });

      const millisecond = this.state.number * 3600000;
      this.setState({ millisecond: millisecond });

      const minute = this.state.number * 60;
      this.setState({ minute: minute });

      const hour = this.state.number;
      this.setState({ hour: hour });

      const day = this.state.number * 0.0416;
      this.setState({ day: day });

      const week = this.state.number * 0.005952;
      this.setState({ week: week });

      const month = this.state.number * 0.001368;
      this.setState({ month: month });

      const year = this.state.number * 0.00011407;
      this.setState({ year: year });
    } else if (this.state.unit === "day") {
      const second = this.state.number * 86400;
      this.setState({ second: second });

      const millisecond = this.state.number * 86400000;
      this.setState({ millisecond: millisecond });

      const minute = this.state.number * 1440;
      this.setState({ minute: minute });

      const hour = this.state.number * 24;
      this.setState({ hour: hour });

      const day = this.state.number;
      this.setState({ day: day });

      const week = this.state.number * 0.14285;
      this.setState({ week: week });

      const month = this.state.number * 0.03285;
      this.setState({ month: month });

      const year = this.state.number * 0.002737;
      this.setState({ year: year });
    } else if (this.state.unit === "week") {
      const second = this.state.number * 604800;
      this.setState({ second: second });

      const millisecond = this.state.number * 604800000;
      this.setState({ millisecond: millisecond });

      const minute = this.state.number * 10080;
      this.setState({ minute: minute });

      const hour = this.state.number * 168;
      this.setState({ hour: hour });

      const day = this.state.number * 7;
      this.setState({ day: day });

      const week = this.state.number;
      this.setState({ week: week });

      const month = this.state.number * 0.229979;
      this.setState({ month: month });

      const year = this.state.number * 0.0191649;
      this.setState({ year: year });
    } else if (this.state.unit === "month") {
      const second = this.state.number * 2629800;
      this.setState({ second: second });

      const millisecond = this.state.number * 2629800000;
      this.setState({ millisecond: millisecond });

      const minute = this.state.number * 43830;
      this.setState({ minute: minute });

      const hour = this.state.number * 730.5;
      this.setState({ hour: hour });

      const day = this.state.number * 30.4375;
      this.setState({ day: day });

      const week = this.state.number * 4.3482;
      this.setState({ week: week });

      const month = this.state.number;
      this.setState({ month: month });

      const year = this.state.number * 0.08333;
      this.setState({ year: year });
    } else if (this.state.unit === "year") {
      const second = this.state.number * 31557600;
      this.setState({ second: second });

      const millisecond = this.state.number * 31557600000;
      this.setState({ millisecond: millisecond });

      const minute = this.state.number * 525960;
      this.setState({ minute: minute });

      const hour = this.state.number * 8766;
      this.setState({ hour: hour });

      const day = this.state.number * 365.25;
      this.setState({ day: day });

      const week = this.state.number * 52.17857;
      this.setState({ week: week });

      const month = this.state.number * 12;
      this.setState({ month: month });

      const year = this.state.number;
      this.setState({ year: year });
    }
  }

  render() {
    return (
      <TimeRender
        data={this.state}
        handleChangeInput={this.handleChangeInput}
        handleChangeSelect={this.handleChangeSelect}
        convert={this.convert}
      />
    );
  }
}
export default Time;
