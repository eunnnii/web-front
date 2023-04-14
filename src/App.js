import React from 'react';
import { CssBaseline ,createTheme} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appbar from './components/Appbar';
import MainPage from './pages/Mainpage';


import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      // 전체 테마 메인색상 설정
      main: 'rgb(246,231,110)'
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#a8c4f9'
    }
  },
  typography: {
    fontFamily: [
      // '-apple-system',
      'AppleSDGothicNeo'
    ].join(','),
    h6: {
      fontFamily: 'SangSangShinb'
    }
  }
});

/*
App
**********************************************************************************
전체 App의 route를 설정하는 컴포넌트 입니다.
**********************************************************************************
1. AdminNotice, AdminAlarm, AdminSuggest, NoticeWrite, AdminCbt 페이지가 위치합니다.
**********************************************************************************
*/

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* PC 화면 */}
        <Router>
          <Appbar />
          <Routes>
            <Route exact path="/" Component={MainPage}/>

          </Routes>
        </Router>


    </ThemeProvider>
  );
}
