import { createContext, useContext, useState } from "react";

interface IntitalContext {
    openAlert : boolean;
    message : string;
    func : (()=> void) | null
}

type ContextProps  = [IntitalContext, React.Dispatch<React.SetStateAction<IntitalContext>>]

const AlertContext = createContext<ContextProps | null>(null);

AlertContext.displayName = "AlertBoxContext";

const intitalState = {
    openAlert : false,
    message: "",
    func : null
}

export function AlertContextProvider({ children } : { children : React.ReactNode | React.ReactNode[]}) : JSX.Element {
    const [state, setState] = useState<IntitalContext>(intitalState);
    return <AlertContext.Provider value={[state, setState]}>{children}</AlertContext.Provider>;
}


// eslint-disable-next-line react-refresh/only-export-components
export function useAlertContext() : ContextProps {
    const context = useContext(AlertContext);
    if (context == null) {
        throw new Error("App Should be wrapped around alert context provider");
    }

    return context
}