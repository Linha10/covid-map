import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './city.scss';

const cities = [
    {

        id: 1,
        city: '台北市',
        totalPpl: 19997,
        ppl: 2702,

    },
    {
        id: 2,
        city: '新北市',
        totalPpl: 33839,
        ppl: 4095,
    },
    {
        id: 3,
        city: '桃園市',
        totalPpl: 12492,
        ppl: 1987,
    },
    {
        id: 4,
        city: '苗栗縣',
        totalPpl: 996,
        ppl: 55,
    },
    {
        id: 5,
        city: '基隆市',
        totalPpl: 4969,
        ppl: 605,
    },
    {
        id: 6,
        city: '彰化縣',
        totalPpl: 1043,
        ppl: 194,
    },
    {
        id: 7,
        city: '台中市',
        totalPpl: 3266,
        ppl: 586,
    },
    {
        id: 8,
        city: '宜蘭縣',
        totalPpl: 1849,
        ppl: 180,
    },
    {
        id: 9,
        city: '新竹縣',
        totalPpl: 1193,
        ppl: 162,
    },
    {
        id: 10,
        city: '花蓮縣',
        totalPpl: 2548,
        ppl: 272,
    },
    {
        id: 11,
        city: '高雄市',
        totalPpl: 2803,
        ppl: 391,
    },
    {
        id: 12,
        city: '台南市',
        totalPpl: 1253,
        ppl: 227,
    },
    {
        id: 13,
        city: '新竹市',
        totalPpl: 761,
        ppl: 107,
    },
    {
        id: 14,
        city: '屏東縣',
        totalPpl: 762,
        ppl: 118,
    },
    {
        id: 15,
        city: '南投縣',
        totalPpl: 296,
        ppl: 60,
    },
    {
        id: 16,
        city: '台東縣',
        totalPpl: 486,
        ppl: 64,
    },
    {
        id: 17,
        city: '雲林縣',
        totalPpl: 541,
        ppl: 88,
    },
    {
        id: 18,
        city: '嘉義縣',
        totalPpl: 238,
        ppl: 27,
    },
    {
        id: 19,
        city: '嘉義市',
        totalPpl: 158,
        ppl: 36,
    },
    {
        id: 20,
        city: '澎湖縣',
        totalPpl: 42,
        ppl: 9,
    },
    {
        id: 21,
        city: '連江縣',
        totalPpl: 30,
        ppl: 3,
    },
    {
        id: 22,
        city: '金門縣',
        totalPpl: 30,
        ppl: 3,
    }
];
const Cities = () => {
    return (
        <div className='container  citiesBtn'>
            {cities.map(item =>
                <button key={item.id} className="btn cityBtn">
                    {item.city} {item.totalPpl}
                    <br />
                    <span>+{item.ppl}</span>
                </button>
            )}
        </div>
    )
}
export default Cities;