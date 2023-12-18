import CertCard from "./CertCard.js"
import ProjectCard from "./ProjectCard.js"
import hr from "../assets/curve-hr.svg"
import google from "../assets/certs/google.jpg"
import oracle from "../assets/certs/oracle.jpg"
import nvidia from "../assets/certs/nvidia.jpg"
import pizza from "../assets/certs/pizza.jpg"
import avex from "../assets/avex website.jpg"
import zeromeat from "../assets/certs/zeromeat.jpg"
import badgeboard from "../assets/badgeboard.jpg"
export default function Certs() {
  return (
    <div className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Certifications</h1>
      <p className="font-light text-gray-400">Here are some of my Certifications</p>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        <CertCard name="Bootcamp Btech Academy Cloud Engineer" img={oracle} issued="oracle" date="Sep 2022" />
        <CertCard name="Google GenAI Foundation" img={google} issued="Google" date="Jun 2022" />
        <CertCard name="Fundamentals of Deep Learning" img={nvidia} issued="NVIDIA" date="Nov 2022" />
      </div>

      <h1 className="text-2xl font-bold mt-8">Projects</h1>
      <p className="font-light text-gray-400">Here are some of my Projects</p>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        <ProjectCard name="Pizza Management System in C" img={pizza} issued="P Karthik Manikantan" date="Nov 2022" link="https://github.com/Manikantan-S/PPS-MINI-PROJECT"/>
        <ProjectCard name="Avex Website" img={avex} issued="P Karthik Manikantan" date="Nov 2023" link="https://avex-website-updated.vercel.app" />
        <ProjectCard name="zeromeat website" img={zeromeat} issued="P Karthik Manikantan" date="Oct 2023" link="https://zero-meat.vercel.app" />
      </div>
      <h1 className="text-2xl font-bold mt-8">BadgeBoard</h1>
      <p className="font-light text-gray-400">Here are some of my Badges which I recieved from Github and Hacktoberfest and HackerRank</p>
      <img
        src={badgeboard}
        className="w-full mt-8 rounded-lg transform animate__animated animate__flipInX" // Apply rounded-lg for rounded edges
        alt="BadgeBoard"
        style={{ imageRendering: "pixelated" }} // Improve image clarity
      />
      <img src={hr} className="w-full mt-8" alt="hr" />
    </div>
  );
}
