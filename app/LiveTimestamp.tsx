"use client";
import TimeAgo from "react-timeago";

type LiveTimeStamp = {
  time: string;
};

const LiveTimestamp = ({ time }: LiveTimeStamp) => {
  return <TimeAgo date={time} />;
};

export default LiveTimestamp;
