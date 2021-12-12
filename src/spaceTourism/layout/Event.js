import React, { useState } from "react";

export const useEventList = () => {
  const [showMoon, setShowMoon] = useState(false);
  const [showMars, setShowMars] = useState(true);

  const [showEuropa, setShowEuropa] = useState(false);
  const [showTitan, setShowTitan] = useState(false);

  const handleMars = () => {
    setShowMoon(false);
    setShowMars(true);
    setShowEuropa(false);
    setShowTitan(false);
  };
  const handleMoon = () => {
    setShowMoon(true);
    setShowMars(false);
    setShowEuropa(false);
    setShowTitan(false);
  };
  const handleEuropa = () => {
    setShowMoon(false);
    setShowMars(false);
    setShowEuropa(true);
    setShowTitan(false);
  };
  const handleTitan = () => {
    setShowMoon(false);
    setShowMars(false);
    setShowEuropa(false);
    setShowTitan(true);
  };
  return {
    showEuropa,
    showMars,
    showMoon,
    showTitan,
    handleEuropa,
    handleMars,
    handleMoon,
    handleTitan,
  };
};
