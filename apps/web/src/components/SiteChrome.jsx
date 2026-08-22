import React from 'react';
import TopHeader from '@/components/TopHeader';
import CategoryNav from '@/components/CategoryNav';
import SiteFooter from '@/components/SiteFooter';

export default function SiteChrome({ children, footer = true }) {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <TopHeader />
            <CategoryNav />
            <main className="flex-1">{children}</main>
            {footer && <SiteFooter />}
        </div>
    );
}
