import React, { createContext, useContext, useMemo, useState } from 'react';

const SidebarCtx = createContext({ open: false, setOpen: () => {} });

export function SidebarProvider({ children }) {
    const [open, setOpen] = useState(false);
    const value = useMemo(() => ({ open, setOpen }), [open]);
    return <SidebarCtx.Provider value={value}>{children}</SidebarCtx.Provider>;
}

export function useSidebar() {
    return useContext(SidebarCtx);
}
