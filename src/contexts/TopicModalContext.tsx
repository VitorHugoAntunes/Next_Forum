import { ReactNode, useState } from "react";
import { createContext } from "react";

interface TopicModalContextType {
    isModalOpen: boolean;
    changeModalStatus: () => void;
}

interface TopicModalProviderProps {
    children: ReactNode,
}

export const TopicModalContext = createContext({} as TopicModalContextType)

export function TopicModalProvider({ children }: TopicModalProviderProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    function changeModalStatus() {
        isModalOpen === true ? setIsModalOpen(false) : setIsModalOpen(true);
    }

    return (
        <TopicModalContext.Provider value={{
            isModalOpen,
            changeModalStatus
        }}>
            {children}
        </TopicModalContext.Provider>
    )
}