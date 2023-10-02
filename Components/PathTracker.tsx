import { TrackProps } from "@/types";
import React from "react";

const PathTracker = ({ path }: TrackProps) => {
  return (
    <p className="text-[#999] text-base  font-medium p-4">
      Home / <span className="text-black">{path}</span>
    </p>
  );
};

export default PathTracker;
