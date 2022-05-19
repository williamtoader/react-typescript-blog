import React from "react";
import {createContext, useContext} from "react";

export const DepsContext = createContext({});

export function useDeps(): any {
    return useContext(DepsContext);
}

export function DepsProvider({children, ...services}) {
    return (
        <DepsContext.Provider value={services}>
            {children}
        </DepsContext.Provider>
    )
}