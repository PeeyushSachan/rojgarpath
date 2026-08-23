import React from 'react';
import { Helmet } from 'react-helmet';
import SiteChrome from '@/components/SiteChrome';

export default function DisclaimerPage() {
    return (
        <SiteChrome>
            <Helmet>
                <title>Disclaimer - RojgarPath</title>
                <meta
                    name="description"
                    content="Disclaimer for the independent government job information published by RojgarPath."
                />
            </Helmet>
            <div className="mx-auto w-full max-w-[56rem] px-4 py-16">
                <h1 className="font-display text-4xl font-bold text-[#0b2b5b]">Disclaimer</h1>
                <div className="mt-6 space-y-5 text-[16px] leading-7 text-slate-700">
                    <p>
                        RojgarPath is an independent informational website created to help users find and understand
                        information related to government jobs, government examinations, recruitment, eligibility,
                        syllabus, selection processes, salaries, and career opportunities.
                    </p>
                    <p>
                        RojgarPath is <strong>NOT</strong> an official government website and is not affiliated with,
                        endorsed by, or officially connected to any Government of India department, State Government
                        department, Railway Recruitment Board (RRB), Staff Selection Commission (SSC), Union Public
                        Service Commission (UPSC), police recruitment board, public sector organization, or any other
                        recruiting authority unless explicitly stated.
                    </p>
                    <p>
                        The information provided on RojgarPath is intended for general informational and educational
                        purposes only. While we make reasonable efforts to research and keep the information accurate
                        and updated, recruitment rules, vacancies, eligibility criteria, age limits, exam dates, fees,
                        syllabus, selection processes, salary details, and other information may change.
                    </p>
                    <p>
                        Users should always verify important information from the official notification and official
                        website of the respective recruiting authority before applying for any examination or
                        recruitment.
                    </p>
                    <p>RojgarPath does not guarantee:</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>Selection in any government examination or recruitment.</li>
                        <li>Eligibility for any particular post.</li>
                        <li>Accuracy of future recruitment dates or vacancies.</li>
                        <li>Employment or appointment after applying for a recruitment.</li>
                        <li>That information on this website will always remain current.</li>
                    </ul>

                    <h2 className="pt-4 font-display text-2xl font-bold text-[#0b2b5b]">Official Sources</h2>
                    <p>
                        Whenever possible, RojgarPath provides links to official recruitment authorities and official
                        notifications. Users are strongly advised to read the latest official notification before
                        making any decision or submitting an application.
                    </p>

                    <h2 className="pt-4 font-display text-2xl font-bold text-[#0b2b5b]">External Links</h2>
                    <p>
                        This website may contain links to external websites, including official government websites and
                        other third-party resources. RojgarPath does not control external websites and is not
                        responsible for their content, availability, privacy policies, or changes.
                    </p>

                    <h2 className="pt-4 font-display text-2xl font-bold text-[#0b2b5b]">No Government Affiliation</h2>
                    <p>
                        The name, logo, content, design, or information presented on RojgarPath should not be
                        interpreted as representing an official government organization unless explicitly mentioned.
                    </p>

                    <h2 className="pt-4 font-display text-2xl font-bold text-[#0b2b5b]">User Responsibility</h2>
                    <p>
                        Users are responsible for verifying all recruitment-related information before applying, paying
                        application fees, submitting documents, attending examinations, or making any career-related
                        decision.
                    </p>
                    <p>
                        By using RojgarPath, you acknowledge that you understand and agree to this disclaimer.
                    </p>
                </div>
            </div>
        </SiteChrome>
    );
}
