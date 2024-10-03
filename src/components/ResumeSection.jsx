import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const ResumeSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const resumeLink = "https://drive.google.com/file/d/1ZTov-gl7RtqngJrbkxpuFMM0JtLG6grn/view?usp=sharing"; // Define your resume link here

  return (
    <section id="resume" className="py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-semibold mb-4">Resume</h2>
          <p className="text-lg mb-4">
            You can view my detailed resume, which includes a summary of my
            education, work experience, and skills, by clicking the card below.
          </p>
        </motion.div>
        <Card resumeLink={resumeLink} /> {/* Pass resumeLink as prop */}
      </div>
    </section>
  );
};

export default ResumeSection;
