import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-fcol md:flex-row gap-10 px-10">
        <ProjectCard
          src="/webauto.jpeg"
          title="Web Automation Testing"
          description="I am an expert in web automation testing with a rich background in utilizing frameworks like Katalon Studio, Selenium, Cypress, and Puppeteer to ensure flawless web application performance. My expertise encompasses crafting detailed automated test scripts, improving testing processes, and seamlessly integrating tests into CI/CD pipelines to enhance product quality and speed to market. Passionate about fostering a culture of quality, I continually upgrade my skills to stay at the forefront of technology trends, making me a pivotal asset in any web development team."
        />
        <ProjectCard
          src="/mobileauto.jfif"
          title="Mobile Automation Testing"
          description="I am a seasoned expert in mobile automation testing, specializing in leveraging tools like Appium, Espresso, and XCUITest to ensure the highest quality of mobile applications. My expertise lies in designing and executing comprehensive test strategies that cover a wide range of mobile devices and operating systems, identifying and resolving issues before they impact users. By integrating automated tests into CI/CD workflows, I contribute to faster development cycles and robust app releases. I'm dedicated to continuous learning and adopting the latest in mobile testing technologies, ensuring that my skills remain at the cutting edge and drive the development of user-centric mobile applications."
        />
        <ProjectCard
          src="/apiauto.jfif"
          title="API Automation Testing"
          description="As an API automation testing expert, I excel in designing and implementing sophisticated testing frameworks to validate RESTful and SOAP web services. Leveraging tools like Postman, RestAssured, and SoapUI, I create comprehensive test suites that ensure APIs meet functionality, reliability, performance, and security standards. My skill in integrating API tests into CI/CD pipelines accelerates development cycles and ensures high-quality software delivery. Constantly evolving with industry trends, I'm adept at scripting in various languages and fostering best practices in API testing to enhance team efficiency and application robustness."
        />
      </div>
    </div>
  );
};

export default Projects;
