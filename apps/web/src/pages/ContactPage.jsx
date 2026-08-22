import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import SiteChrome from '@/components/SiteChrome';

export default function ContactPage() {
    const [sent, setSent] = useState(false);

    return (
        <SiteChrome>
            <Helmet>
                <title>Contact RojgarPath - Ask About Government Job Notifications</title>
                <meta
                    name="description"
                    content="Contact the RojgarPath editorial team with corrections, questions or requests about Indian government job notifications and exam information."
                />
            </Helmet>
            <div className="mx-auto grid w-full max-w-[64rem] gap-10 px-4 py-16 md:grid-cols-2">
                <div>
                    <h1 className="font-display text-4xl font-bold text-[#0b2b5b]">Contact</h1>
                    <p className="mt-4 text-[16px] leading-7 text-slate-700">
                        Found an outdated date or a missing post? Send us a note and the editorial team will review it.
                    </p>
                    <dl className="mt-8 space-y-3 text-sm">
                        <div>
                            <dt className="font-semibold text-[#0b2b5b]">Email</dt>
                            <dd className="text-slate-600">help@rojgarpath.in</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-[#0b2b5b]">Office</dt>
                            <dd className="text-slate-600">Hazratganj, Lucknow, Uttar Pradesh 226001</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-[#0b2b5b]">Response time</dt>
                            <dd className="text-slate-600">Two working days</dd>
                        </div>
                    </dl>
                </div>

                <form
                    onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-6"
                >
                    {sent ? (
                        <p className="text-sm font-medium text-[#0b2b5b]">
                            Thank you. Your message has been noted and we will reply by email.
                        </p>
                    ) : (
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                                <input id="name" required className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:border-[#0b2b5b]" />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                                <input id="email" type="email" required className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:border-[#0b2b5b]" />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="msg" className="text-sm font-medium text-slate-700">Message</label>
                                <textarea id="msg" rows={5} required className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#0b2b5b]" />
                            </div>
                            <button
                                type="submit"
                                className="h-11 w-full rounded-md bg-[#e07b1f] text-sm font-semibold text-white transition-transform hover:bg-[#c96b16] active:scale-[0.98]"
                            >
                                Send message
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </SiteChrome>
    );
}
