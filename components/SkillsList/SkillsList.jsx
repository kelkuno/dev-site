"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./SkillsList.module.css";

const SkillsList = () => {
  const skills = [
    "Web Development",
    "Web Design",
    "Motion Design",
    "Graphic Design",
    "Email Development",
    "Digital Production",
  ];
  const [currentSkill, setCurrentSkill] = useState(0);

  const swapSkill = () => {
    setCurrentSkill((prevIndex) => (prevIndex + 1) % skills.length);
  };

  return (
    <div className={styles["skill-swap-container"]}>
      <h4 className={styles["hire-me"]}>Hire me for:</h4>

      <h3 className="skill-swap">{skills[currentSkill]}</h3>
      <div onClick={swapSkill} className={styles["skill-swap-btn"]}>
        <Image
          src="/images/arrow-next.svg"
          alt="Next"
          width={48}
          height={80}
          priority
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default SkillsList;
