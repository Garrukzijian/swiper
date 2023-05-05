import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ConfigProvider} from 'antd';
import enUS from 'antd/lib/locale/en_US';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ConfigProvider locale={enUS}>
        <App/>
    </ConfigProvider>
);

