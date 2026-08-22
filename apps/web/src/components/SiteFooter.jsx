import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/jobs';

export default function SiteFooter() {
    return (
        <footer className="mt-16 border-t border-slate-200 bg-slate-50">
            <div className="mx-auto grid w-full max-w-[72rem] gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <p className="font-display text-base font-bold text-[#0b2b5b]">RojgarPath</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        An independent reference for Indian government job notifications, eligibility, exam patterns and syllabus.
                    </p>
                </div>
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Categories</p>
                    <ul className="mt-3 space-y-2 text-sm">
                        {categories.map((c) => (
                            <li key={c.slug}>
                                <Link to={`/jobs/${c.slug}`} className="text-slate-600 hover:text-[#e07b1f]">
                                    {c.name} Jobs
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Site</p>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li><Link to="/about" className="text-slate-600 hover:text-[#e07b1f]">About</Link></li>
                        <li><Link to="/contact" className="text-slate-600 hover:text-[#e07b1f]">Contact</Link></li>
                        <li><Link to="/login" className="text-slate-600 hover:text-[#e07b1f]">Login / Register</Link></li>
                    </ul>
                </div>
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Contact</p>
                    <p className="mt-3 text-sm text-slate-600">help@rojgarpath.in</p>
                    <p className="text-sm text-slate-600">Lucknow, Uttar Pradesh</p>
                </div>
            </div>
            <div className="border-t border-slate-200 px-4 py-5 text-center text-xs text-slate-500">
                Copyright {new Date().getFullYear()} RojgarPath. Always confirm details with the official notification.
            </div>
        </footer>
    );
}
