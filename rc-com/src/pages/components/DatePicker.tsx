import 'rc-calendar/assets/index.css';
import React, { useState } from 'react';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import DPicker from 'rc-calendar/lib/Picker';

import moment from 'moment';

const format = 'YYYY-MM-DD';

const fullFormat = 'YYYY-MM-DD dddd';

const now = moment();

const Picker2: React.FC<any> = (props) => {
  const [hoverValue, setHoverValue] = useState({ hoverValue: [] })
  const onHoverChange = (hoverValue: any) => {
    setHoverValue({ hoverValue });
  }
  const calendar = (
    <RangeCalendar
      hoverValue={hoverValue}
      onHoverChange={onHoverChange}
      type={props.type}
      defaultValue={now}
      format={format}
      onChange={props.onChange}
      disabledDate={props.disabledDate}
    />);
  return (
    <DPicker
      open={props.open}
      onOpenChange={props.onOpenChange}
      calendar={calendar}
      value={props.value}
    >
      {
        () => {
          return (
            <span>
              <input
                placeholder="请选择日期"
                style={{ width: 250 }}
                readOnly
                value={props.showValue && props.showValue.format(fullFormat) || ''}
              />
            </span>
          );
        }
      }
    </DPicker>)
}

const DatePicker2: React.FC<any> = () => {
  return (
    <div style={{ width: 240, margin: 20 }}>
      <p>
        开始时间：
        <Picker2
          onOpenChange={this.onStartOpenChange}
          type="start"
          showValue={state.startValue}
          open={this.state.startOpen}
          value={[state.startValue, state.endValue]}
          onChange={this.onStartChange}
        />
      </p>

      <p>
        结束时间：
        <Picker2
          onOpenChange={this.onEndOpenChange}
          open={this.state.endOpen}
          type="end"
          showValue={state.endValue}
          disabledDate={this.disabledStartDate}
          value={[state.startValue, state.endValue]}
          onChange={this.onEndChange}
        />
      </p>
    </div>);
}

class DatePicker extends React.Component {
  state = {
    startValue: null,
    endValue: null,
    startOpen: false,
    endOpen: false,
  };

  onStartOpenChange = (startOpen) => {
    this.setState({
      startOpen,
    });
  }

  onEndOpenChange = (endOpen) => {
    this.setState({
      endOpen,
    });
  }

  onStartChange = (value) => {
    this.setState({
      startValue: value[0],
      startOpen: false,
      endOpen: true,
    });
  }

  onEndChange = (value) => {
    this.setState({
      endValue: value[1],
    });
  }

  disabledStartDate = (endValue) => {
    if (!endValue) {
      return false;
    }
    const startValue = this.state.startValue;
    if (!startValue) {
      return false;
    }
    return endValue.diff(startValue, 'days') < 0;
  }

  render () {
    const state = this.state;
    return (
      <div style={{ width: 240, margin: 20 }}>
        <p>
          开始时间：
          <Picker2
            onOpenChange={this.onStartOpenChange}
            type="start"
            showValue={state.startValue}
            open={this.state.startOpen}
            value={[state.startValue, state.endValue]}
            onChange={this.onStartChange}
          />
        </p>

        <p>
          结束时间：
          <Picker2
            onOpenChange={this.onEndOpenChange}
            open={this.state.endOpen}
            type="end"
            showValue={state.endValue}
            disabledDate={this.disabledStartDate}
            value={[state.startValue, state.endValue]}
            onChange={this.onEndChange}
          />
        </p>
      </div>);
  }
}

export default DatePicker;
