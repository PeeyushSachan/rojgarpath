import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { categories, navCategories, slugify } from '@/data/jobs';
import { useSidebar } from '@/components/SidebarProvider';

const available = new Set(categories.map((c) => c.slug));

export default function CategoryNav() {
    const { category } = useParams();
    const { open, setOpen } = useSidebar();
    const activeCat = categories.find((c) => c.slug === category);
    const hamburgerLabel = activeCat ? `${activeCat.name} posts` : 'Posts';

    return (
        <nav aria-label="Job categories" className="bg-[#0d1117] text-slate-200">
            <div className="mx-auto flex w-full max-w-[90rem] items-stretch">
                {/* Left hamburger — opens the selected category's post sidebar (mobile/tablet only) */}
                {category && (
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-label={`Open ${hamburgerLabel} sidebar`}
                        aria-expanded={open}
                        className="flex h-12 shrink-0 items-center gap-1.5 border-r border-white/10 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 lg:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="hidden sm:inline">{activeCat ? activeCat.name : 'Posts'}</span>
                    </button>
                )}

                <ul className="no-scrollbar flex w-full flex-nowrap items-stretch overflow-x-auto overflow-y-hidden overscroll-x-contain whitespace-nowrap">
                    {navCategories.map((name) => {
                        const slug = slugify(name);
                        const ready = available.has(slug);
                        return (
                            <li key={name} className="shrink-0">
                                {ready ? (
                                    <NavLink
                                        to={`/jobs/${slug}`}
                                        className={({ isActive }) =>
                                            `flex h-12 items-center px-4 text-sm font-medium transition-colors ${
                                                isActive
                                                    ? 'bg-[#e07b1f] text-white'
                                                    : 'text-slate-200 hover:bg-white/10 hover:text-white'
                                            }`
                                        }
                                    >
                                        {name}
                                    </NavLink>
                                ) : (
                                    <span className="flex h-12 cursor-default items-center px-4 text-sm text-slate-400/70">
                                        {name}
                                    </span>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
