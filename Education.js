import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="10th"
            subTitle="ST.XAVIERS HIGH SCHOOL HANSOL (2020)"
            result="70%"
            des="I have completed my 10th from st.xaviers high school hansol ahemdabad , and i studied in gujarat board that is gseb in english medium ."
          />
          <ResumeCard
            title="12 th"
            subTitle="ST.XAVIERS HIGH SCHOOL HANSOL (2022)"
            result="75%"
            des="I have completed my 12th from st.xaviers high school hansol ahemdabad , and i studied in gujarat board that is gseb in english medium ."
          />
          <ResumeCard
            title="B.COM "
            subTitle="ASIA PACTIFIC INSTITUTE OF MANAGEMENT (2022 - CURRENT PURSUING)"
            result="70%"
            des="Currently i am pursuing bcom from asia pacific institute of management "
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="SALES & MARKETING"
            subTitle="V.R WEALTH CREATORS (2022)"
            result="AHMEDABAD"
            des="I worked in marketing and sales department in this company for 6 months."
          />
          <ResumeCard
            title="Frontend Developer Internship"
            subTitle=" Octanet service pvt lmt (2024)"
            result="AHMEDABAD"
            des="I completed my 1 month of training and internship in the company Octanet service pvt lmt."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Fresher"
            result="AHMEDABAD"
            des="I have completed my frontend dev and looking for a job and learning backend devlopment."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education