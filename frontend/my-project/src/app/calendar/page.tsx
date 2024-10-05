"use client"

import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ICAL from 'ical.js';

const localizer = momentLocalizer(moment);

const CalendarPage: React.FC = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch the .ics file
        fetch('/path-to-your-ics-file.ics')  // Adjust the path to the actual location of your .ics file
            .then(response => response.text())
            .then(data => {
                const jcalData = ICAL.parse(data);  // Parse the .ics file
                const comp = new ICAL.Component(jcalData);
                const vevents = comp.getAllSubcomponents('vevent');

                const events = vevents.map(vevent => {
                    // Extract dtstart and dtend properties
                    const dtstart = vevent.getFirstProperty('dtstart');
                    const dtend = vevent.getFirstProperty('dtend');

                    // Check if dtstart is not null and of the right type
                    if (dtstart) {
                        const startValue = dtstart.getFirstValue();

                        // Type check to ensure that startValue is valid for the Date constructor
                        if (typeof startValue === 'string' || startValue instanceof Date) {
                            const startDate = new Date(startValue);
                            let endDate: Date;

                            const endValue = dtend ? dtend.getFirstValue() : null;
                            if (typeof endValue === 'string' || endValue instanceof Date) {
                                endDate = new Date(endValue);
                            } else {
                                endDate = startDate;  // If no valid end date, use start date
                            }

                            return {
                                title: vevent.getFirstPropertyValue('summary'),
                                start: startDate,
                                end: endDate,
                                description: vevent.getFirstPropertyValue('description'),
                            };
                        }
                    }

                    console.warn('Event missing valid dtstart');
                    return null;  // Skip events without valid dtstart
                }).filter(event => event !== null);  // Filter out null events

                setEvents(events);
            })
            .catch(err => console.error('Error fetching or parsing .ics file', err));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Calendar</h1>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    );
};

export default CalendarPage;
