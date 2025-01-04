"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import Logo from "./Logo";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";



const services = [
  { title: "Web Development", description: "Build modern web apps", href: "/services/web" },
  { title: "Mobile Development", description: "iOS and Android apps", href: "/services/mobile" },
  { title: "UI/UX Design", description: "Crafting intuitive designs", href: "/services/design" },
  { title: "SEO Optimization", description: "Improve your search ranking", href: "/services/seo" },
];

const contact = [
  { item: "Contactez-nous", href: "/contact" },
  { item: "Rendez-vous", href: "/rdv" },
];

const Navbar = () => {
  return (
    <NavigationMenu >
       <Layout className="flex items-center justify-around">
            {/* Logo */}
            <NavigationMenuList className="flex items-center gap-8">

                <NavigationMenuItem>
                    <NavigationMenuLink href="/" >
                        <Logo />
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink
                    href="/"
                    className=""
                    >
                    Accueil
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <DropdownMenu >
                     
                        <DropdownMenuTrigger asChild className="border-green-700">
                            <Button variant="outline">
                               Services
                            </Button>
                            
                        </DropdownMenuTrigger>
                        
                        <DropdownMenuContent className=" flex flex-col gap-12 p-10 focus:rounded-3xl border-4">
                            <div className="flex gap-8">
                                <div>
                                    <DropdownMenuLabel className="text-green-700 text-xl">Lavage Extérieur</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild className=" focus:bg-green-100  focus:outline-none ">
                                        <Link href="/services/web" className="cursor-pointer ">Notre Prestation en Détail</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className=" focus:bg-green-100  focus:outline-none">
                                         <Link href="/services/mobile" className="cursor-pointer">Notre Tarification</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className=" focus:bg-green-100  focus:outline-none">
                                    <Link href="/services/design" className="cursor-pointer">Faire un Devis</Link>
                                    </DropdownMenuItem>
                                    
                                </div>
                                <div>
                                <DropdownMenuLabel className="text-green-700 text-xl"> Lavage Intérieur</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild className=" focus:bg-green-100  focus:outline-none">
                                        <Link href="/services/web" className="cursor-pointer">Notre Prestation en Détail</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className=" focus:bg-green-100  focus:outline-none">
                                         <Link href="/services/mobile" className="cursor-pointer">Notre Tarification</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className=" focus:bg-green-100  focus:outline-none" >
                                    <Link href="/services/design" className="cursor-pointer">Faire un Devis</Link>
                                    </DropdownMenuItem>
                                </div>
                               <div>
                                   <DropdownMenuLabel className="text-green-700 text-xl">Lavage Complet</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild className=" focus:bg-green-100  focus:outline-none">
                                        <Link href="/services/web" className="cursor-pointer">Notre Prestation en Détail</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className=" focus:bg-green-100  focus:outline-none">
                                         <Link href="/services/mobile" className="cursor-pointer">Notre Tarification</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className=" focus:bg-green-100  focus:outline-none">
                                    <Link href="/services/design" className="cursor-pointer">Faire un Devis</Link>
                                    </DropdownMenuItem>
                                </div>
                            </div>
                            <div className="flex gap-8">
                                    <div>
                                    <DropdownMenuLabel className="text-green-700 text-xl">Formule Sièges</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild className=" focus:bg-green-100  focus:outline-none">
                                        <Link href="/services/web " className="cursor-pointer">Notre Prestation en Détail</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className=" focus:bg-green-100  focus:outline-none">
                                         <Link href="/services/mobile" className="cursor-pointer">Notre Tarification</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className=" focus:bg-green-100  focus:outline-none">
                                    <Link href="/services/design" className="cursor-pointer">Faire un Devis</Link>
                                    </DropdownMenuItem>
                                        
                                </div>
                                <div>
                                    <DropdownMenuLabel className="text-green-700 text-xl">Formule Intégrale</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild className=" focus:bg-green-100  focus:outline-none">
                                        <Link href="/services/web" className="cursor-pointer">Notre Prestation en Détail</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className=" focus:bg-green-100  focus:outline-none">
                                         <Link href="/services/mobile" className="cursor-pointer">Notre Tarification</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className=" focus:bg-green-100  focus:outline-none">
                                    <Link href="/services/design" className="cursor-pointer">Faire un Devis</Link>
                                    </DropdownMenuItem>
                                        
                                </div>
                                <div>
                                    <DropdownMenuLabel className="text-green-700 text-xl">Services à la carte</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild className=" focus:bg-green-100  focus:outline-none">
                                        <Link href="/services/web" className="cursor-pointer">Notre Prestation en Détail</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className=" focus:bg-green-100  focus:outline-none">
                                         <Link href="/services/mobile" className="cursor-pointer">Notre Tarification</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className=" focus:bg-green-100  focus:outline-none">
                                    <Link href="/services/design" className="cursor-pointer">Faire un Devis</Link>
                                    </DropdownMenuItem>
                                        
                                </div>
                            </div>
                            
                           
                        </DropdownMenuContent>
                       
                        
                    </DropdownMenu>
                </NavigationMenuItem>

                
                <NavigationMenuItem>
                    <NavigationMenuLink
                    href="/tarifs"
                    className=""
                    >
                    Tarifs
                    </NavigationMenuLink>
                </NavigationMenuItem>

                
                <NavigationMenuItem>
                    <NavigationMenuLink
                    href="/apropos"
                    className=""
                    >
                    A propos
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                   07.71.52.69.27
                </NavigationMenuItem>
            </NavigationMenuList>
            
            

            {/* Contact Section */}
            <NavigationMenuList className="flex items-center space-x-6">
                {contact.map((x, index) => (
                    <NavigationMenuItem key={index}>
                    
                        <Button variant={"outline"}  className="hover:bg-green-100" >
                            <Link href={x.href}>{x.item}</Link>
                        </Button>
                
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>

        </Layout>
    </NavigationMenu>
  );
};

export default Navbar;