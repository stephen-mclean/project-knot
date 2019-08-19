import React, { useMemo } from "react";
import { H6 } from "../Fonts/Fonts";

const ONE_DAY = 24 * 60 * 60 * 1000;

const Countdown = ({ fromDate, toDate, ...rest }) => {
  const daysLeft = useMemo(() => {
    return Math.round(
      Math.abs((fromDate.getTime() - toDate.getTime()) / ONE_DAY)
    );
  }, [fromDate, toDate]);

  return daysLeft && daysLeft > 0 ? (
    <H6 {...rest}>
      {daysLeft} {daysLeft > 1 ? "days" : "day"} to go!
    </H6>
  ) : null;
};

export default Countdown;
