import React from 'react';
import { Helmet } from 'react-helmet';
import SiteChrome from '@/components/SiteChrome';

export default function LoginPage() {
    return (
        <SiteChrome>
            <Helmet>
                <title>Login or Register - RojgarPath Government Job Alerts</title>
                <meta
                    name="description"
                    content="Sign in to RojgarPath to bookmark government job posts and follow exam notifications for Police, Railway, SSC and UPSC recruitment."
                />
            </Helmet>
            <div className="mx-auto w-full max-w-[26rem] px-4 py-20">
                <h1 className="font-display text-3xl font-bold text-[#0b2b5b]">Member area</h1>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                    Accounts are not active yet. Once enabled, members will be able to bookmark posts and follow
                    notification updates by category.
                </p>
                <div className="mt-8 space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-6 opacity-90">
                    <div className="grid gap-2">
                        <label htmlFor="lemail" className="text-sm font-medium text-slate-700">Email</label>
                        <input id="lemail" disabled placeholder="you@example.com" className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-500" />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="lpass" className="text-sm font-medium text-slate-700">Password</label>
                        <input id="lpass" type="password" disabled placeholder="Coming soon" className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-500" />
                    </div>
                    <button type="button" disabled className="h-11 w-full cursor-not-allowed rounded-md bg-[#0b2b5b]/40 text-sm font-semibold text-white">
                        Login (coming soon)
                    </button>
                </div>
            </div>
        </SiteChrome>
    );
}
