import React from "react";
export default function MyMilestone({
  date,
  position,
  workplace,
  description,
}) {
  return (
    <div className="milestone animated js-scroll fadeInUp">
      <span className="milestone-date">{date}</span>
      <h2>{position}</h2>
      <span className="mt-4">{workplace}</span>
      <p className="mt-4">{description}</p>
    </div>
  );
}
