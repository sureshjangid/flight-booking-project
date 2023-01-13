import React, { useState } from "react";
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';

const DateRange = (props) => {
    const { onDateChange, start_date } = props;
    const [startDate, setStartDate] = useState(moment().format("DD/MM/YYYY"));
    var futureMonth = moment().add(25, 'M');

    const [maxDate, setMaxDate] = useState(moment(futureMonth).endOf('month').format("DD/MM/YYYY"));
    const handleOnApply = (event, picker) => {
        setStartDate(picker.startDate.format("DD/MM/YYYY"))
        onDateChange(picker.startDate)
    }
  
    return <DateRangePicker  onApply={handleOnApply} startDate={startDate}  initialSettings={{
        locale: { format: 'DD/MM/YYYY', separator: '-' },
        minDate:start_date ? null : startDate,
        maxDate: maxDate,
        autoApply:true,
        showDropdowns: true,
        startDate: startDate,singleDatePicker:true,autoUpdateInput:true }}>
        {
            props.children
        }
    </DateRangePicker>

}
export default DateRange