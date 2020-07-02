import React from "react";
import TemperatureRender from "./TemperatureRender";

class Temperature extends React.Component {
  constructor() {
    super();

    this.state = {
      fahrenheit: 0,
      celcius: 0,
      kelvin: 0,
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

    if (this.state.unit === "fahrenheit") {
      const fahrenheit = this.state.number;
      this.setState({ fahrenheit: fahrenheit });

      const celcius = ((this.state.number - 32) * 5) / 9;
      this.setState({ celcius: celcius });

      var x = 459.67;
      var y = parseInt(this.state.number);
      x += y;
      const kelvin = (x * 5) / 9;
      this.setState({ kelvin: kelvin });
    } else if (this.state.unit === "celsius") {
      const fahrenheit = this.state.number * 1.8 + 32;
      this.setState({ fahrenheit: fahrenheit });

      const celcius = this.state.number;
      this.setState({ celcius: celcius });

      x = 273.15;
      y = parseInt(this.state.number);
      x += y;
      const kelvin = x;
      this.setState({ kelvin: kelvin });
    } else if (this.state.unit === "kelvin") {
      const fahrenheit = ((parseInt(this.state.number) - 273.15) * 9) / 5 + 32;
      this.setState({ fahrenheit: fahrenheit });

      const celcius = this.state.number - 273.15;
      this.setState({ celcius: celcius });

      const kelvin = this.state.number;
      this.setState({ kelvin: kelvin });
    }
  }

  render() {
    return (
      <TemperatureRender
        data={this.state}
        handleChangeInput={this.handleChangeInput}
        handleChangeSelect={this.handleChangeSelect}
        convert={this.convert}
      />
    );
  }
}

export default Temperature;
