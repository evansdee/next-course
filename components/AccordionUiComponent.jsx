"use client"
import { createContext } from "react";


const AccordianContext = createContext()
export default function AccordionUiComponent({children}) {

    
  return (
    <AccordianContext.Provider>
        {children}
    </AccordianContext.Provider>
  );
}
