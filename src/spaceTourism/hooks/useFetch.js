import { useState } from "react";

export const useFetch = () => {
    const [mar, setMar] = useState({});
    const [moon, setMoon] = useState({});
    const [europa, setEuropa] = useState({});
    const [titan, setTitan] = useState({});

    const fetchMoon = async() => {
        const res = await fetch("data.json");
        const marDetail = await res.json();
        console.log(marDetail.destinations[0]);
        setMoon(marDetail.destinations[0]);
    };
    const fetchMar = async() => {
        const res = await fetch("data.json");
        const moonDetail = await res.json();
        console.log(moonDetail.destinations[1]);
        setMar(moonDetail.destinations[1]);
    };
    const fetchEuropa = async() => {
        const res = await fetch("data.json");
        const europaDetail = await res.json();
        console.log(europaDetail.destinations[2]);
        setEuropa(europaDetail.destinations[2]);
    };
    const fetchTitan = async() => {
        const res = await fetch("data.json");
        const titanDetail = await res.json();
        console.log(titanDetail.destinations[3]);
        setTitan(titanDetail.destinations[3]);
    };
    return { mar, moon, europa, titan, fetchMar, fetchMoon, fetchEuropa, fetchTitan };
};