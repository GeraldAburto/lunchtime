import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import M from 'materialize-css';

class Calendar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dates: [],
            localizer: momentLocalizer(moment)
        };
    }

    componentDidMount() {
        if(!this.props.currentUser)
            M.toast({ html: '<span>Please <a href="/login" className="btn-flat toast-action">Sign in</a> to see your history</span>' })
    }

    render() {
        let { dates, localizer } = this.state;
        return (
            <BigCalendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView='month'
                events={dates}
                style={{ height: '80vh', marginTop: '20px' }}
            />
        );
    }

}

export default Calendar;