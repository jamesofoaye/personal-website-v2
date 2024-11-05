"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { type ColorModeProviderProps } from "./color-mode"
import { systemTheme } from "@/app/chakra-config"

export function Provider({ children }: ColorModeProviderProps) {
  return (
    <ChakraProvider value={systemTheme}>
      {children}
      {/* 
      Dark mode is not supported yet
      <ColorModeProvider {...props} />  
      */}
    </ChakraProvider>
  )
}
