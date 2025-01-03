"use client"
 
import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
 
type Checked = DropdownMenuCheckboxItemProps["checked"]



const ServicesPage = () => {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)
   
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Button variant="outline">Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Navigation</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
                <Link href="/">Accueil</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link href="/services">Services</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link href="/tarifs">Tarifs</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link href="/a-propos">À propos</Link>
            </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ServicesPage