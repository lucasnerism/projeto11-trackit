import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './style/GlobalStyle';
import ResetStyle from './style/ResetStyle';
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import localeData from "dayjs/plugin/localeData";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.locale('pt-br');
dayjs.extend(localeData);
dayjs.extend(updateLocale);
dayjs.updateLocale("pt-br", {
  weekdays: [
    "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
  ]
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
