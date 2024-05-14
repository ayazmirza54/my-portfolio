import React from "react";

import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
const Tech = () => {
  return (
    <>
    
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What tech i am fimiliar with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          💻 Tech Stack
        </h2>
      </motion.div>  <h2>
    <img className="scale-150" 
        src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
        alt="HTML5"
      />{" "}
      
      <img className="scale-150" 
        src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
        alt="CSS3"
      />{" "}
      
      
      
     
     
     
      <img className="scale-150"
        src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
        alt="JavaScript"
      />{" "}

      
     
      
     
     
      
      <img className="scale-150" 
        src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
        alt="React"
      />{" "}
     
     
      
      
     
      
      
       <img className="scale-150"
        src="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white"
        alt="Shell Script"
      />{" "}
      <img className="scale-150"
        src="https://img.shields.io/badge/ansible-%231A1918.svg?style=for-the-badge&logo=ansible&logoColor=white"
        alt="Ansible"
      />{" "}
      <img className="scale-150" 
        src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
        alt="Postgres"
      />{" "}
     
     
    
    
    
      
      <img className="scale-150"
        src="https://img.shields.io/badge/Ab%20Initio-Dev-red?style=for-the-badge"
        alt="Ab Initio"
      />
      <img className="scale-150"
        src="https://img.shields.io/badge/MS%20Word-blue?style=for-the-badge"
        alt="MS Word"
      />
      <img className="scale-150"
        src="https://img.shields.io/badge/MS%20Excel-green?style=for-the-badge"
        alt="MS Excel"
      />
       <img className="scale-150"
        src="https://img.shields.io/badge/MS%20Powerpoint-orange?style=for-the-badge"
        alt="MS Powerpoint"
      />
       <img className="scale-150"
        src="https://img.shields.io/badge/Power%20BI-yellow?style=for-the-badge"
        alt="Power BI"
      />
      <img className="scale-150"
        src="https://img.shields.io/badge/Git-grey?style=for-the-badge&logo=git"
        alt="Power BI"
      />
     
      
      
      
      
    </h2>
  </>
  
  );
};

export default SectionWrapper(Tech, "");
