import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}


type SidebarDrawerContentData = UseDisclosureReturn

const SidebarDrawerContent = createContext({} as SidebarDrawerContentData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();

  return (
    <SidebarDrawerContent.Provider value={disclosure}>
      {children}
    </SidebarDrawerContent.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContent);
