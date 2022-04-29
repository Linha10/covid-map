import React from "react";
import data from '../covidData.json';
import './getCov.scss';

const GetCov = () => {
    console.log('Data', data)
    return (
        <div className="container">
            {
                data.map(item =>
                    <div className="allType">
                        <div>總確診數<span>{item.totalGot}</span></div>
                        <div>總死亡數<span>{item.death}</span></div>
                        <div>送驗中<span>{item.waiting}</span></div>
                        <div>已排除<span>{item.not}</span></div>
                        <div>昨日確診<span>{item.lastDay}</span></div>
                        <div>昨日排除<span>{item.lastDayNot}</span></div>
                        <div>昨日送驗<span>{item.lastSend}</span></div>
                    </div>
                )
            }
        </div>
    )
}
export default GetCov;