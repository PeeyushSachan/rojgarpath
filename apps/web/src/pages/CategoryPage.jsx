import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ChevronDown, ChevronRight, Search, X } from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import { useSidebar } from '@/components/SidebarProvider';
import { findPost, getCategory, getPosts, slugify } from '@/data/jobs';

function Section({ id, title, children }) {
    return (
        <section id={id} className="scroll-mt-32 border-t border-slate-200 pt-8">
            <h2 className="font-display text-xl font-bold text-[#0b2b5b] sm:text-2xl">
                <span className="mr-2 inline-block h-4 w-1.5 translate-y-px bg-[#e07b1f]" />
                {title}
            </h2>
            <div className="mt-4">{children}</div>
        </section>
    );
}

function Bullets({ items }) {
    return (
        <ul className="space-y-2">
            {items.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-slate-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e07b1f]" />
                    <span>{t}</span>
                </li>
            ))}
        </ul>
    );
}

export default function CategoryPage() {
    const { category, post: postSlug } = useParams();
    const cat = getCategory(category);
    const { open, setOpen } = useSidebar();
    const [filter, setFilter] = useState('');
    const [collapsed, setCollapsed] = useState({});

    // Close the sidebar drawer whenever the category changes.
    useEffect(() => {
        setOpen(false);
    }, [category, setOpen]);

    const post = useMemo(() => {
        if (!cat) return null;
        return (postSlug && findPost(cat, postSlug)) || getPosts(cat)[0];
    }, [cat, postSlug]);

    if (!cat) return <Navigate to="/" replace />;

    const q = filter.trim().toLowerCase();

    return (
        <SiteChrome>
            <Helmet>
                <title>{`${post.title} - ${cat.name} Government Jobs | RojgarPath`}</title>
                <meta
                    name="description"
                    content={`${post.title}: eligibility, exam pattern, syllabus, salary, important dates and application process for ${cat.name} government jobs in India.`}
                />
            </Helmet>

            <div className="mx-auto flex w-full max-w-[90rem] gap-0 px-0 lg:px-4">
                {open && (
                    <button
                        type="button"
                        aria-label="Close sidebar"
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 z-40 bg-slate-900/50 lg:hidden"
                    />
                )}

                <aside
                    className={`fixed inset-y-0 left-0 z-50 w-[19rem] max-w-[85vw] overflow-y-auto border-r border-slate-200 bg-slate-50 px-4 py-5 transition-transform lg:sticky lg:top-28 lg:z-0 lg:h-[calc(100vh-7rem)] lg:translate-x-0 lg:bg-transparent ${
                        open ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="mb-4 flex items-center justify-between">
                        <p className="font-display text-sm font-bold uppercase tracking-wider text-[#0b2b5b]">
                            {cat.name} Tutorial
                        </p>
                        <button type="button" onClick={() => setOpen(false)} className="lg:hidden" aria-label="Close">
                            <X className="h-5 w-5 text-slate-600" />
                        </button>
                    </div>

                    <div className="relative mb-4">
                        <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <input
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            placeholder="Filter posts"
                            aria-label="Filter posts in sidebar"
                            className="h-11 w-full rounded-md border border-slate-300 bg-white pl-9 pr-3 text-sm outline-none focus:border-[#0b2b5b]"
                        />
                    </div>

                    {cat.groups.map((g) => {
                        const items = g.posts.filter((p) => (p.searchText || p.title).toLowerCase().includes(q));
                        if (items.length === 0) return null;
                        const isClosed = collapsed[g.name];
                        return (
                            <div key={g.name} className="mb-3">
                                <button
                                    type="button"
                                    onClick={() => setCollapsed((c) => ({ ...c, [g.name]: !c[g.name] }))}
                                    className="flex w-full items-center justify-between rounded-md bg-[#0b2b5b] px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-white"
                                >
                                    {g.name}
                                    {isClosed ? <ChevronRight className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                </button>
                                {!isClosed && (
                                    <ul className="mt-1 border-l border-slate-200 pl-2">
                                        {items.map((p) => {
                                            const active = p.title === post.title;
                                            return (
                                                <li key={p.title}>
                                                    <Link
                                                        to={`/jobs/${cat.slug}/${slugify(p.title)}`}
                                                        onClick={() => setOpen(false)}
                                                        className={`block rounded px-3 py-2.5 text-sm ${
                                                            active
                                                                ? 'bg-[#e07b1f]/15 font-semibold text-[#b8600f]'
                                                                : 'text-slate-700 hover:bg-slate-200/60'
                                                        }`}
                                                    >
                                                        {p.title}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </div>
                        );
                    })}
                    {q && cat.groups.every((g) => g.posts.every((p) => !(p.searchText || p.title).toLowerCase().includes(q))) && (
                        <p className="px-1 text-sm text-slate-500">No post matches &quot;{filter}&quot;.</p>
                    )}
                </aside>

                <article className="min-w-0 flex-1 px-4 py-8 lg:px-10">
                    <nav className="mb-3 text-xs text-slate-500">
                        <Link to="/" className="hover:text-[#e07b1f]">Home</Link>
                        <span className="mx-2">/</span>
                        <Link to={`/jobs/${cat.slug}`} className="hover:text-[#e07b1f]">{cat.name}</Link>
                        <span className="mx-2">/</span>
                        <span className="text-slate-700">{post.title}</span>
                    </nav>

                    <h1 className="font-display text-3xl font-bold leading-tight text-[#0b2b5b] sm:text-4xl">
                        {post.title}
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">{cat.tagline}</p>

                    {post.metadata && (
                        <div className="mt-6 grid gap-3 border-y border-slate-200 py-4 text-sm sm:grid-cols-2">
                            <p><span className="font-semibold text-[#0b2b5b]">Exam:</span> {post.metadata.exam}</p>
                            <p><span className="font-semibold text-[#0b2b5b]">Authority:</span> {post.metadata.recruitmentAuthority}</p>
                            <p><span className="font-semibold text-[#0b2b5b]">Job profile:</span> {post.metadata.jobProfile}</p>
                            <p><span className="font-semibold text-[#0b2b5b]">Career:</span> {post.metadata.careerGrowth}</p>
                            <p className="sm:col-span-2 text-slate-600">{post.metadata.currentRecruitment}</p>
                            <p className="sm:col-span-2">
                                <a href={post.metadata.source} target="_blank" rel="noreferrer" className="font-semibold text-[#b8600f] hover:text-[#0b2b5b]">
                                    Verify details on the official authority website
                                </a>
                            </p>
                        </div>
                    )}

                    <div className="mt-6 space-y-10 pb-6">
                        <Section id="overview" title="Job Overview">
                            <p className="max-w-[62ch] text-[15px] leading-7 text-slate-700">{post.overview}</p>
                        </Section>

                        <Section id="eligibility" title="Eligibility Criteria">
                            <Bullets items={post.eligibility} />
                        </Section>

                        <Section id="pattern" title="Exam Pattern">
                            <div className="overflow-x-auto rounded-md border border-slate-200">
                                <table className="w-full min-w-[34rem] text-left text-sm">
                                    <thead className="bg-[#0b2b5b] text-white">
                                        <tr>
                                            <th className="px-4 py-3 font-semibold">Stage</th>
                                            <th className="px-4 py-3 font-semibold">Component</th>
                                            <th className="px-4 py-3 font-semibold">Marks / Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {post.pattern.map((row) => (
                                            <tr key={row[0] + row[1]} className="border-t border-slate-200 odd:bg-slate-50/70">
                                                <td className="px-4 py-3 font-medium text-[#0b2b5b]">{row[0]}</td>
                                                <td className="px-4 py-3 text-slate-700">{row[1]}</td>
                                                <td className="px-4 py-3 text-slate-700">{row[2]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Section>

                        <Section id="syllabus" title="Syllabus">
                            <Bullets items={post.syllabus} />
                        </Section>

                        <Section id="apply" title="Application Process">
                            <ol className="space-y-3">
                                {post.process.map((step, i) => (
                                    <li key={step} className="flex gap-3 text-[15px] leading-relaxed text-slate-700">
                                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#0b2b5b] text-xs font-semibold text-white">
                                            {i + 1}
                                        </span>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </Section>

                        <Section id="dates" title="Important Dates">
                            <ul className="divide-y divide-slate-200 rounded-md border border-slate-200">
                                {post.dates.map((d) => (
                                    <li key={d[0]} className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-sm">
                                        <span className="text-slate-700">{d[0]}</span>
                                        <span className="font-semibold text-[#b8600f]">{d[1]}</span>
                                    </li>
                                ))}
                            </ul>
                        </Section>

                        <Section id="salary" title="Salary and Benefits">
                            <Bullets items={post.salary} />
                        </Section>

                        <Section id="resources" title="Previous Year Papers and Resources">
                            <ul className="grid gap-3 sm:grid-cols-2">
                                {post.resources.map((r) => (
                                    <li
                                        key={r}
                                        className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                                    >
                                        {r}
                                    </li>
                                ))}
                            </ul>
                        </Section>

                        <Section id="related" title="Related Posts in this Category">
                            <div className="flex flex-wrap gap-2">
                                {getPosts(cat)
                                    .filter((p) => p.title !== post.title)
                                    .map((p) => (
                                        <Link
                                            key={p.title}
                                            to={`/jobs/${cat.slug}/${slugify(p.title)}`}
                                            className="rounded-md border border-[#0b2b5b]/20 bg-white px-3 py-2 text-sm font-medium text-[#0b2b5b] transition-colors hover:border-[#e07b1f] hover:text-[#b8600f]"
                                        >
                                            {p.title}
                                        </Link>
                                    ))}
                            </div>
                        </Section>
                    </div>
                </article>
            </div>
        </SiteChrome>
    );
}
