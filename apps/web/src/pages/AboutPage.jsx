import React from 'react';
import { Helmet } from 'react-helmet';
import SiteChrome from '@/components/SiteChrome';

export default function AboutPage() {
    return (
        <SiteChrome>
            <Helmet>
                <title>About RojgarPath - Government Job Information Portal</title>
                <meta
                    name="description"
                    content="RojgarPath is an independent reference site that documents Indian government job eligibility, exam patterns, syllabus and application steps in plain language."
                />
            </Helmet>
            <div className="mx-auto w-full max-w-[56rem] px-4 py-16">
                <h1 className="font-display text-4xl font-bold text-[#0b2b5b]">About this site</h1>
                <div className="mt-6 space-y-5 text-[16px] leading-7 text-slate-700">
                    <p>
                        RojgarPath organises government job information the way a technical manual is organised: one
                        category per handbook, one page per post, and the same set of sections on every page so that
                        aspirants know exactly where to look.
                    </p>
                    <p>
                        We cover eligibility, exam pattern, syllabus, application process, important dates, salary and
                        preparation resources. Content is written from published notifications and pay commission pay
                        levels, and rewritten in simple language.
                    </p>
                    <p className="rounded-md border-l-4 border-[#e07b1f] bg-[#fdf2e3] px-4 py-3 text-[15px]">
                        This is not a government website. Always verify dates, vacancies and fees with the official
                        notification of the recruiting board before applying.
                    </p>
                </div>
            </div>
        </SiteChrome>
    );
}
