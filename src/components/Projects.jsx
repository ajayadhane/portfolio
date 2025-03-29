import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const timelineData = [
  {
    title: "Embel Website",
    description: `Independently designed and developed the complete UI for Embel 
    Technologies, creating a modern, responsive corporate website from scratch. 
    Enhanced brand presence with a sleek, intuitive design while optimizing 
    performance for lightning-fast speed, seamless navigation, and cross-browser 
    compatibility, ensuring a visually engaging user experience.`,
    icon: "🎨",
    className: "bg-color-1",
  },
  {
    title: "SS Restaurant Management System",
    description: `Played a pivotal role in designing, developing, and optimizing 
    this project. Built a comprehensive platform to streamline restaurant operations,
    including order management, billing, and inventory tracking. Designed a highly
    responsive UI and an intuitive analytics dashboard to enhance sales 
    performance and operational efficiency`,
    icon: "🖥️",
    className: "bg-color-2",
  },
  {
    title: "Faceless Loan",
    description: `Led the frontend architecture and implementation of the Faceless
    Loan Project, developing a seamless, paperless loan application system with 
    real-time updates. Engineered a dynamic EMI calculator using React hooks for
    precise financial planning. Designed a highly responsive and intuitive UI,
    enhancing the borrower experience and accessibility.`,
    icon: "🏢",
    className: "bg-color-3",
  },
  {
    title: "MK_Blackhat",
    description: `Developed a Dubai-based smart laundry management system,
    streamlining order processing, tracking, and payments. Designed a responsive 
    and intuitive UI for seamless customer interactions. Integrated real-time order
    updates, automated scheduling, and secure payment gateways, enhancing 
    operational efficiency and user convenience.`,
    icon: "🗂️",
    className: "bg-color-4",
  },
  {
    title: "Bill Soft",
    description: `Designed a smart billing solution tailored for small retail shops,
    ensuring quick and accurate invoice generation. Developed a user-friendly 
    interface for seamless product management, sales tracking, and automated tax 
    calculations`,
    icon: "📊",
    className: "bg-color-5",
  },
  {
    title: "Asset Tracking",
    description: `Smart asset tracking system designed for malls to monitor 
    clothing and other retail items efficiently. Developed a responsive,
    intuitive UI for real-time inventory tracking, movement monitoring, and
    asset management. Integrated dynamic dashboards and data visualization to
    enhance operational insights and efficiency.`,
    icon: "📜",
    className: "bg-color-6",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <div className={`content ${item.className}`}>
              <span className="icon">{item.icon}</span>
              <h4 className="Tm_title">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
