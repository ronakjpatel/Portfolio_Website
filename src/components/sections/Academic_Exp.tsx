import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { academic_exp } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TAcademicExperience } from "../../types";
import { config } from "../../constants/config";

const ExperienceCard: React.FC<TAcademicExperience> = (academic_exp) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={academic_exp.date}
      iconStyle={{ background: academic_exp.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={academic_exp.icon}
            alt={academic_exp.universityName}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{academic_exp.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {academic_exp.universityName}
              </p>
        
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {academic_exp.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const AExperience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.academic_experience} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {academic_exp.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(AExperience, "academic_exp");
