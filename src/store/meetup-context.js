import { createContext, useState } from 'react';

export const MeetupContext = createContext({
    meetups: [],
    addMeetup: (meetupData) => { },
    removeMeetup: (meetupId) => { },
    updateMeetup: (meetupId, meetupData) => { }
});

function MeetupContextProvider({ children }) {
    const [meetups, setMeetups] = useState([]);

    function addMeetup(meetupData) {
        setMeetups((prevMeetups) => {
            return [...prevMeetups, meetupData];
        });
    }

    function removeMeetup(meetupId) {
        setMeetups((prevMeetups) => {
            return prevMeetups.filter((meetup) => meetup.id !== meetupId);
        });
    }

    function updateMeetup(meetupId, meetupData) {
        setMeetups((prevMeetups) => {
            const meetupIndex = prevMeetups.findIndex((meetup) => meetup.id === meetupId);
            const updatedMeetup = { ...prevMeetups[meetupIndex], ...meetupData };
            const updatedMeetups = [...prevMeetups];
            updatedMeetups[meetupIndex] = updatedMeetup;
            return updatedMeetups;
        });
    }

    const context = {
        meetups,
        addMeetup,
        removeMeetup,
        updateMeetup
    };

    return <MeetupContext.Provider value={context}>{children}</MeetupContext.Provider>
}

export default MeetupContextProvider;