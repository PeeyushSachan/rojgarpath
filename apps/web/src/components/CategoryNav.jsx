import React, { useRef } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { categories, navCategories, slugify } from '@/data/jobs';
import { useSidebar } from '@/components/SidebarProvider';

const available = new Set(categories.map((c) => c.slug));

export default function CategoryNav() {
    const categoryNavRef = useRef(null);
    const dragRef = useRef({ active: false, dragged: false, pointerId: null, startX: 0, lastX: 0 });
    const { category } = useParams();
    const { open, setOpen } = useSidebar();
    const activeCat = categories.find((c) => c.slug === category);
    const hamburgerLabel = activeCat ? `${activeCat.name} posts` : 'Posts';

    const stopDragging = (event) => {
        const drag = dragRef.current;
        if (event?.pointerType && event.pointerType !== 'mouse') return;
        if (drag.pointerId !== null && categoryNavRef.current?.hasPointerCapture(drag.pointerId)) {
            categoryNavRef.current.releasePointerCapture(drag.pointerId);
        }
        drag.active = false;
        drag.pointerId = null;
        if (drag.dragged) {
            setTimeout(() => {
                if (!dragRef.current.active) dragRef.current.dragged = false;
            }, 0);
        }
    };

    const handlePointerDown = (event) => {
        if (event.pointerType !== 'mouse') return;
        dragRef.current = {
            active: true,
            dragged: false,
            pointerId: event.pointerId,
            startX: event.clientX,
            lastX: event.clientX,
        };
        window.addEventListener('pointerup', stopDragging, { once: true });
        window.addEventListener('pointercancel', stopDragging, { once: true });
    };

    const handlePointerMove = (event) => {
        const drag = dragRef.current;
        if (!drag.active || drag.pointerId !== event.pointerId) return;
        const movement = event.clientX - drag.startX;
        if (!drag.dragged && Math.abs(movement) < 8) return;
        if (!drag.dragged) {
            drag.dragged = true;
            categoryNavRef.current?.setPointerCapture(event.pointerId);
        }
        event.preventDefault();
        categoryNavRef.current.scrollLeft -= event.clientX - drag.lastX;
        drag.lastX = event.clientX;
    };

    const handleClick = (event) => {
        if (!dragRef.current.dragged) return;
        event.preventDefault();
        event.stopPropagation();
        dragRef.current.dragged = false;
    };

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

                <ul
                    ref={categoryNavRef}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={stopDragging}
                    onPointerCancel={stopDragging}
                    onClick={handleClick}
                    className="no-scrollbar flex w-full flex-nowrap items-stretch overflow-x-auto overflow-y-hidden overscroll-x-contain whitespace-nowrap cursor-grab active:cursor-grabbing active:select-none"
                >
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
