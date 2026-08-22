import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import Reveal from '@/components/Reveal';
import { categories, getPosts, slugify } from '@/data/jobs';

const ticker = [
    'RRB NTPC 2024 notification live',
    'SSC CGL Tier 2 admit card released',
    'UPSC CSE prelims answer key published',
    'Delhi Police SI physical test schedule out',
    'State Police Constable 8,200 vacancies',
];

export default function HomePage() {
    return (
        <SiteChrome>
            <Helmet>
                <title>RojgarPath - Indian Government Jobs, Exams and Syllabus Guide</title>
                <meta
                    name="description"
                    content="Sarkari Naukri reference for Indian government jobs: Police, Railway, SSC and UPSC eligibility, exam pattern, syllabus, salary, important dates and application process."
                />
            </Helmet>

            <div className="overflow-hidden border-b border-[#0b2b5b]/10 bg-[#0b2b5b] py-2 text-white">
                <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10 pr-10 motion-reduce:animate-none">
                    {[...ticker, ...ticker].map((t, i) => (
                        <span key={`${t}-${i}`} className="whitespace-nowrap text-sm">
                            <span className="mr-2 text-[#f0a04b]">/</span>
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#f7f8fa] via-white to-[#fdf2e3]">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#e07b1f]/15 blur-3xl"
                />
                <div className="mx-auto grid w-full max-w-[72rem] gap-10 px-4 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
                    <Reveal>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b8600f]">
                            Sarkari Naukri Reference
                        </p>
                        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-[#0b2b5b] sm:text-5xl lg:text-6xl">
                            Every government exam,
                            <span className="relative ml-2 inline-block">
                                documented
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-x-0 -bottom-1 h-3 -skew-x-6 bg-[#e07b1f]/35"
                                />
                            </span>
                            <br />
                            step by step.
                        </h1>
                        <p className="mt-5 max-w-[58ch] text-[16px] leading-7 text-slate-600">
                            Eligibility, exam pattern, syllabus, application process, important dates and pay level for
                            central and state government posts, written in plain language and organised like a manual.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                to="/jobs/police"
                                className="inline-flex items-center gap-2 rounded-md bg-[#0b2b5b] px-5 py-3 text-sm font-semibold text-white transition-transform hover:bg-[#0a2450] active:scale-[0.98]"
                            >
                                Start with Police jobs <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                to="/jobs/ssc"
                                className="inline-flex items-center gap-2 rounded-md border border-[#0b2b5b]/25 px-5 py-3 text-sm font-semibold text-[#0b2b5b] transition-colors hover:border-[#e07b1f] hover:text-[#b8600f]"
                            >
                                Browse SSC exams
                            </Link>
                        </div>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_18px_40px_-24px_rgba(11,43,91,0.45)]">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Most read this week
                            </p>
                            <ul className="mt-4 divide-y divide-slate-200">
                                {categories.map((c) => {
                                    const p = getPosts(c)[0];
                                    return (
                                        <li key={c.slug}>
                                            <Link
                                                to={`/jobs/${c.slug}/${slugify(p.title)}`}
                                                className="group flex items-center justify-between gap-3 py-3"
                                            >
                                                <span>
                                                    <span className="block text-sm font-semibold text-[#0b2b5b] group-hover:text-[#b8600f]">
                                                        {p.title}
                                                    </span>
                                                    <span className="block text-xs text-slate-500">{c.name}</span>
                                                </span>
                                                <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#e07b1f]" />
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="mx-auto w-full max-w-[72rem] px-4 py-16">
                <h2 className="font-display text-2xl font-bold text-[#0b2b5b] sm:text-3xl">Category handbooks</h2>
                <p className="mt-2 max-w-[56ch] text-sm text-slate-600">
                    Each handbook opens in a documentation layout with a sticky sidebar of posts inside that service.
                </p>
                <div className="mt-8 space-y-4">
                    {categories.map((c, i) => (
                        <Reveal key={c.slug} delay={i * 0.06}>
                            <Link
                                to={`/jobs/${c.slug}`}
                                className="group flex flex-col gap-3 border-t border-slate-200 py-6 sm:flex-row sm:items-center sm:gap-8"
                            >
                                <span className="w-24 shrink-0 font-mono text-xs uppercase tracking-widest text-[#e07b1f]">
                                    0{i + 1}
                                </span>
                                <span className="min-w-0 flex-1">
                                    <span className="block font-display text-xl font-bold text-[#0b2b5b] group-hover:text-[#b8600f]">
                                        {c.name} Jobs
                                    </span>
                                    <span className="mt-1 block text-sm text-slate-600">{c.tagline}</span>
                                    <span className="mt-2 block text-xs text-slate-500">
                                        {getPosts(c).map((p) => p.title).join('  |  ')}
                                    </span>
                                </span>
                                <ArrowRight className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#e07b1f]" />
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </section>
        </SiteChrome>
    );
}
