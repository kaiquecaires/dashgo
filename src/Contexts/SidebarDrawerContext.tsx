import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}


type SidebarDrawerContentData = UseDisclosureReturn

const SidebarDrawerContent = createContext({} as SidebarDrawerContentData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContent.Provider value={disclosure}>
      {children}
    </SidebarDrawerContent.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContent);
