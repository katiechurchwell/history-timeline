import "../App.css";
import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

function Timeline({ timelineData }) {
  console.log(timelineData);

  return (
    <>
      {timelineData.map(({ id, value, index }) => (

        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {id}
            {value}
          </TimelineContent>
        </TimelineItem>
      ))}
    </>
  );
}

export default Timeline;
