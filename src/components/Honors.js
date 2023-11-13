import HonorCard from "./HonorCard.js"
import hr from "../assets/curve-hr.svg"

export default function Honors() {
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Honors & Awards & Grades</h1>
            <p className="font-light text-gray-400">Here are some of my honors and awards and Grades</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard
                    name="Best Paper Award"
                    issued="ICIOT'23"
                    desc="Wrote a paper along with my team under Dr.Madhumitha K and presented it and received Best Paper Award in ICIOT'23."
                    link="https://drive.google.com/file/d/1yGGr71dDrTxKGFcdkh0zZWP-JkqmorM3/view?usp=sharing"
                    linkText="Certificate"
                />
                <HonorCard
                    name={<span>3<sup>rd</sup> prize in Technical Abstract contest</span>}
                    issued="IEI-INSTITUTION OF ENGINEERS"
                    desc="Won the third prize in Technical Abstract Contest organized by IEI. Our abstract was related to NLP."
                    link="https://drive.google.com/file/d/1WgUVzFaakMefg2K2CmfSp4trItw8runx/view?usp=sharing"
                    linkText="Certificate"
                />
                <HonorCard
                    name="Web Development Internship"
                    issued="Zero Meat"
                    desc="I worked as a web dev intern at a DPIIT recognized startup and created a responsive website for it which improved in brand name and helped in receiving 10 lakhs+ in funding."
                    link="https://drive.google.com/file/d/1Cp7K8D9EsYaOtPKtURpr_9WdU_UTX_Pu/view?usp=drive_link"
                    linkText="Experience Certificate"
                />
                <HonorCard
                    name="Grades"
                    issued="SRMIST"
                    desc="SEM 1: 9.64 SEM 2: 9.67"
                    link="https://drive.google.com/drive/folders/1LO2DJ9DB7RowAfyHzCpvm82oBxXn4g19?usp=drive_link"
                    linkText="View transcript"
                />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
