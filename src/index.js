import ReactDOM from 'react-dom/client';

import './styles/main.scss';
import App from './App';
import MeetupContextProvider from './store/meetup-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MeetupContextProvider>
        <App />
    </MeetupContextProvider>
);
