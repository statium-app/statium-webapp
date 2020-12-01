import React from 'react';
import { DayCalendar } from './DayCalendar';
import Header from './Header';
import {IntlProvider} from 'react-intl'

const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
}

const App = () => {
  return (
    <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en"> 
    <Header />
    <DayCalendar />
    </IntlProvider>
  );
};

export default App;
