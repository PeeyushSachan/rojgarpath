import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ChevronDown, X, ShieldCheck } from 'lucide-react';
import { categories, getPosts, slugify } from '@/data/jobs';
import { organizations, states } from '@/data/governmentData';

const generalLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
];

const siteSections = [
    { to: '/', label: 'Latest Jobs' },
    { to: '/', label: 'Results' },
    { to: '/', label: 'Admit Card' },
    { to: '/', label: 'States' },
    { to: '/', label: 'Central Government' },
    { to: '/', label: 'Practice' },
    { to: '/', label: 'References' },
    { to: '/', label: 'Exercises' },
    { to: '/', label: 'Guides & Tutorials' },
];

export default function TopHeader() {
    const [query, setQuery] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const navigate = useNavigate();

    const results = query.trim().length > 1
        ? [
            ...categories.flatMap((c) => {
            const needle = query.trim().toLowerCase();
            const categoryMatch = `${c.name} ${c.tagline}`.toLowerCase().includes(needle);
            return getPosts(c)
                .filter((p) => categoryMatch || [p.title, p.overview, ...(p.eligibility || []), ...(p.syllabus || []), p.metadata?.exam, p.metadata?.organization]
                    .filter(Boolean)
                    .join(' ')
                    .toLowerCase()
                    .includes(needle))
                .map((p) => ({ label: p.title, cat: c.name, to: `/jobs/${c.slug}/${slugify(p.title)}` }));
            }),
            ...states
                .filter((state) => state.toLowerCase().includes(query.trim().toLowerCase()))
                .map((state) => ({ label: `${state} Government Jobs`, cat: 'State Government', to: '/jobs/state-government' })),
            ...organizations
                .filter((organization) => organization.name.toLowerCase().includes(query.trim().toLowerCase()))
                .map((organization) => ({ label: organization.name, cat: 'Official authority', to: '/jobs/other-government-jobs' })),
        ].filter((result, index, all) => all.findIndex((item) => item.to === result.to && item.label === result.label) === index).slice(0, 8)
        : [];

    const go = (to) => {
        setQuery('');
        setMenuOpen(false);
        setSearchOpen(false);
        navigate(to);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
            <div className="mx-auto flex h-16 w-full max-w-[90rem] items-center gap-2 px-3 sm:gap-4 sm:px-4">
                {/* 1. Logo */}
                <Link to="/" className="flex items-center gap-2 shrink-0">
                    <span className="grid h-9 w-9 place-items-center rounded-md bg-[#0b2b5b] text-white">
                        <ShieldCheck className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <span className="leading-tight">
                        <span className="block font-display text-lg font-bold text-[#0b2b5b]">RojgarPath</span>
                        <span className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-slate-500">Sarkari Naukri Guide</span>
                    </span>
                </Link>

                {/* Desktop nav links */}
                <nav className="ml-4 hidden items-center gap-1 lg:flex">
                    {generalLinks.map((l) => (
                        <Link
                            key={l.to + l.label}
                            to={l.to}
                            className="rounded px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#0b2b5b]"
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop search */}
                <div className="relative ml-auto hidden w-72 md:block">
                    <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search exams and posts"
                        aria-label="Search government jobs"
                        className="h-9 w-full rounded-md border border-slate-300 bg-slate-50 pl-9 pr-3 text-sm outline-none focus:border-[#0b2b5b] focus:bg-white"
                    />
                    {results.length > 0 && (
                        <ul className="absolute left-0 right-0 top-11 overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg">
                            {results.map((r) => (
                                <li key={r.to}>
                                    <button
                                        type="button"
                                        onClick={() => go(r.to)}
                                        className="block w-full px-3 py-2 text-left text-sm hover:bg-slate-50"
                                    >
                                        <span className="font-medium text-slate-800">{r.label}</span>
                                        <span className="ml-2 text-xs text-[#e07b1f]">{r.cat}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                    {query.trim().length > 1 && results.length === 0 && (
                        <p className="absolute left-0 right-0 top-11 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500 shadow-lg">
                            No matching post found.
                        </p>
                    )}
                </div>

                {/* Desktop Sign In */}
                <Link
                    to="/login"
                    className="hidden rounded-md bg-[#e07b1f] px-4 py-2 text-sm font-semibold text-white transition-transform hover:bg-[#c96b16] active:scale-[0.98] md:inline-block"
                >
                    Sign In
                </Link>

                {/* Mobile/tablet controls: Menu ▼, Search icon, Sign In icon */}
                {/* 3. Menu (text + dropdown arrow) */}
                <button
                    type="button"
                    onClick={() => { setMenuOpen((v) => !v); setSearchOpen(false); }}
                    aria-label="Open website menu"
                    aria-expanded={menuOpen}
                    className="ml-auto flex items-center gap-1 rounded-md px-2.5 py-2 text-sm font-semibold text-[#0b2b5b] transition-colors hover:bg-slate-100 md:ml-2 lg:hidden"
                >
                    Menu
                    <ChevronDown className={`h-4 w-4 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* 2. Search icon (always visible on mobile/tablet) */}
                <button
                    type="button"
                    onClick={() => { setSearchOpen((v) => !v); setMenuOpen(false); }}
                    aria-label="Search government jobs"
                    aria-expanded={searchOpen}
                    className="grid h-10 w-10 place-items-center rounded-md text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
                >
                    <Search className="h-5 w-5" />
                </button>

                {/* 4. Sign In (icon on mobile, hidden on md+ where text button shows) */}
                <Link
                    to="/login"
                    aria-label="Sign in"
                    className="grid h-10 w-10 place-items-center rounded-md bg-[#e07b1f] text-white transition-transform hover:bg-[#c96b16] active:scale-[0.98] md:hidden"
                >
                    <ShieldCheck className="h-5 w-5" />
                </Link>
            </div>

            {/* Mobile/tablet search panel */}
            {searchOpen && (
                <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
                    <div className="relative">
                        <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search exams and posts"
                            aria-label="Search government jobs"
                            className="h-11 w-full rounded-md border border-slate-300 bg-slate-50 pl-9 pr-9 text-sm outline-none focus:border-[#0b2b5b]"
                        />
                        <button
                            type="button"
                            onClick={() => setSearchOpen(false)}
                            aria-label="Close search"
                            className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded text-slate-500 hover:bg-slate-100"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                    {results.length > 0 && (
                        <ul className="mt-2 overflow-hidden rounded-md border border-slate-200">
                            {results.map((r) => (
                                <li key={r.to}>
                                    <button
                                        type="button"
                                        onClick={() => go(r.to)}
                                        className="block w-full px-3 py-2 text-left text-sm hover:bg-slate-50"
                                    >
                                        <span className="font-medium text-slate-800">{r.label}</span>
                                        <span className="ml-2 text-xs text-[#e07b1f]">{r.cat}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                    {query.trim().length > 1 && results.length === 0 && (
                        <p className="mt-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
                            No matching post found.
                        </p>
                    )}
                </div>
            )}

            {/* Mobile/tablet general website menu drawer */}
            {menuOpen && (
                <div className="border-t border-slate-200 bg-white md:hidden">
                    <div className="mx-auto w-full max-w-[90rem] px-4 py-3">
                        <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Quick Links</div>
                        {generalLinks.map((l) => (
                            <Link
                                key={l.to + l.label}
                                to={l.to}
                                onClick={() => setMenuOpen(false)}
                                className="block rounded px-2 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-100"
                            >
                                {l.label}
                            </Link>
                        ))}
                        <Link
                            to="/login"
                            onClick={() => setMenuOpen(false)}
                            className="block rounded px-2 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-100"
                        >
                            Login / Register
                        </Link>

                        <div className="mb-1 mt-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Sections</div>
                        {siteSections.map((l) => (
                            <Link
                                key={l.label}
                                to={l.to}
                                onClick={() => setMenuOpen(false)}
                                className="block rounded px-2 py-2.5 text-sm text-slate-700 hover:bg-slate-100"
                            >
                                {l.label}
                            </Link>
                        ))}

                        <div className="mb-1 mt-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Browse Categories</div>
                        <div className="grid grid-cols-2 gap-1 pb-2">
                            {categories.map((c) => (
                                <Link
                                    key={c.slug}
                                    to={`/jobs/${c.slug}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="rounded px-2 py-2 text-sm text-slate-700 hover:bg-slate-100"
                                >
                                    {c.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
