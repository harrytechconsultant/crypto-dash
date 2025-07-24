import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "./mode-toggle";

export function NavBar() {
  return (
    <nav className="flex h-[73px] items-center justify-between px-6">
        <h1 className="text-lg font-bold">Crypto Dash</h1>
        <div className="flex items-center justify-between gap-4 w-[30%]">
            <div className="relative">
                <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-primary" />
                <Input type="search" placeholder="Coin Name..." className="p1-8 border-none shadow-none w-[300px]"/>
            </div>
        <ModeToggle />
        </div>
    </nav>
  );
}
