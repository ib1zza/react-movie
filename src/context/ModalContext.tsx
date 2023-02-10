import React, {createContext, Dispatch, SetStateAction, useContext, useState} from "react";

interface Context {
    menu: boolean,
    modal: boolean,
    setMenu: Dispatch<SetStateAction<boolean>>,
    setModal: Dispatch<SetStateAction<boolean>>,
}
export const ModalContext = createContext<Context>({} as Context);

interface Props {
    children: React.ReactNode
}
const  ModalProvider:React.FC<Props> = ({children}) => {
    const [menu, setMenu] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);

    return (<ModalContext.Provider value={{menu, setMenu , modal ,setModal }}>
        {children}
    </ModalContext.Provider>)
}
export const useModalContext = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error(
            "useModalContext has to be used within <ModalProvider>"
        );
    }

    return context;
};


export default ModalProvider;