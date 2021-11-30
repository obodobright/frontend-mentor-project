import { useState } from "react";

export const useFetchCrew = () => {
    const [crew1, setCrew1] = useState({});
    const [crew2, setCrew2] = useState({});
    const [crew3, setCrew3] = useState({});
    const [crew4, setCrew4] = useState({});

    const myCrew1 = async() => {
        const res = await fetch("data.json");
        const cl = await res.json();
        console.log(cl.crew[0]);
        setCrew1(cl.crew[0]);
    };
    const myCrew2 = async() => {
        const res = await fetch("data.json");
        const cl = await res.json();
        console.log(cl.crew[1]);
        setCrew2(cl.crew[1]);
    };
    const myCrew3 = async() => {
        const res = await fetch("data.json");
        const cl = await res.json();
        console.log(cl.crew[2]);
        setCrew3(cl.crew[2]);
    };
    const myCrew4 = async() => {
        const res = await fetch("data.json");
        const cl = await res.json();
        console.log(cl.crew[3]);
        setCrew4(cl.crew[3]);
    };
    return { crew1, crew2, crew3, crew4, myCrew1, myCrew2, myCrew3, myCrew4 };
};