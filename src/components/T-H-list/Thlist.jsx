// ARSEN`S ROUTE
import { useState } from "react";
import "../../pages/ToursPage/Tours.css";
import { Switch } from "antd";
import { tours } from "../../pages/ToursPage/Array";

const s5 = '/stars5.svg'
const s4 = '/stars4.svg'
const s3 = '/stars3.svg'
const s2 = '/stars2.svg'
const s1 = '/stars1.svg'

const places = tours.map((tour) => tour.title)

const options = [s5, s4, s3, s2, s1];

const Thlist = () => {
    const [value, setValue] = useState(1500);
    const [selected, setSelected] = useState(null);


    const min = 1000;
    const max = 5000;

    const percent = (value - min) / (max - min);
    const trackHeight = 4 + percent * 6;
    const thumbSize = 14 + percent * 12;

    return (
        <div className="w-[287px] flex flex-col">
            <div className="lg:hidden w-full h-[1px] bg-[#E6E8EC] mt-[15px] mb-[35px]"></div>
            <div className="price-range w-[287px] mt-[10px] lg:mb-[48px] mx-auto text-[#111] lg:border-b-[1px] lg:border-b-[#E6E8EC] lg:pb-[28px]">
                <label className="font-[700] mb-[15px] block" htmlFor="range">PRICE RANGE</label>
                <input
                    type="range"
                    id="range"
                    min={min}
                    max={max}
                    step="100"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    style={{
                        height: trackHeight + "px",
                        background: `linear-gradient(to right, black ${percent * 100}%, #ddd ${percent * 100}%)`
                    }} />
                <div className="flex justify-between mt-[15px] text-[14px]">
                    <span className="font-bold">${min}</span>
                    <span className="text-[green] font-bold text-[16px]">${value}</span>
                    <span className="font-bold">${max}</span>
                </div>
                <style>
                    {`
          #range::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: ${thumbSize}px;
            height: ${thumbSize}px;
            border: 3px solid white;
            background: black;
            border-radius: 50%;
            cursor: pointer;
          }
          #range::-moz-range-thumb {
            width: ${thumbSize}px;
            height: ${thumbSize}px;
            background: black;
            border-radius: 50%;
            cursor: pointer;
          }
        `}
                </style>
            </div>
            <div className="hidden lg:block">
                <p className="font-[700] text-[#141416] uppercase pb-[24px]">Places</p>
                <div className="flex flex-col gap-[8px]">
                    {places.map((item, i) => <h1 className="place font-[500]" key={i}>{item}</h1>)}
                </div>
            </div>
            <div className="flex justify-between items-center my-[40px] lg:my-[48px] lg:py-[48px] lg:border-y-[1px] lg:border-y-[#E6E8EC]">
                <p className="font-[700] text-[#141416] uppercase">Favorite</p>
                <Switch defaultChecked onChange={(checked) => console.log(checked)} />
            </div>
            <div className="border-b-[1px] border-b-[#E6E8EC] pb-[48px]">
                <p className="font-[700] text-[#141416] uppercase pb-[24px]">Review Score</p>
                <div className="flex flex-col gap-[22px] lg:gap-[8px]">
                    {options.map((item, i) => (
                        <label key={i} className="flex items-center gap-[12px] cursor-pointer">
                            <input
                                className="w-[24px] h-[24px] cursor-pointer"
                                type="radio"
                                name="rating"
                                value={i}
                                checked={selected === i}
                                onChange={() => setSelected(i)}
                            />
                            <img src={item} alt={`Option ${i + 1}`} />
                        </label>
                    ))}
                </div>
            </div>
            <button className="py-[16px] mt-[30px] px-[24px] w-full rounded-[90px] border-[#E6E8EC] border-[2px] text-[16px] text-[#23262F] font-[700]">Reset filter</button>
        </div>
    );
}

export default Thlist;