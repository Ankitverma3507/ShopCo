
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { FaRegUserCircle } from "react-icons/fa";

export function Navbar() {
  return (
    (<header className=" top-0 z-50 w-full  shadow-sm">
      <div className=" flex h-16 items-center justify-between ">
        <Link href="#" className="flex items-center gap-2 font-bold" prefetch={false}>
          <h1 className="font-extrabold text-2xl">SHOP.CO</h1>
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="font-medium">
                Shop
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" sideOffset={8}>
              <DropdownMenuItem>
                <Link
                  href="#"
                  className="flex w-full items-center justify-between"
                  prefetch={false}>
                  Women
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="#"
                  className="flex w-full items-center justify-between"
                  prefetch={false}>
                  Men
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="#"
                  className="flex w-full items-center justify-between"
                  prefetch={false}>
                  Kids
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="#"
                  className="flex w-full items-center justify-between"
                  prefetch={false}>
                  Accessories
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" className="font-medium">
            On Sale
          </Button>
          <Button variant="ghost" className="font-medium">
            Brands
          </Button>
          <div className="relative flex-1">
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-9 pr-9 focus:ring-primary" />
            <Button variant="ghost" className="absolute right-2 top-1/2 -translate-y-1/2">
              <SearchIcon className="h-5 w-5" />
            </Button>
          </div>
          <Button variant="ghost" className="relative">
            <ShoppingCartIcon className="h-6 w-6" />
            <span
              className="absolute -top-2 -right-2 rounded-full bg-primary px-2 text-xs font-medium text-primary-foreground">
              3
            </span>
          </Button>
          <Button variant="ghost" className="relative">
          <FaRegUserCircle className="h-6 w-6"/>
          </Button>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" className="relative">
            <SearchIcon className="h-6 w-6" />
          </Button>
          <Button variant="ghost" className="relative">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 rounded-full bg-primary px-2 text-xs font-medium text-primary-foreground">
              3
            </span>
          </Button>
          <Button variant="ghost" className="relative">
          <FaRegUserCircle className="h-6 w-6"/>
          </Button>
        </div>
        <div className="">
        <Sheet className="">
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <nav className="grid gap-2">
                <DropdownMenu>
                  <h1 className="font-extrabold text-xl">SHOP.CO</h1>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="justify-start gap-2 font-medium">
                      <ChevronRightIcon className="h-4 w-4" />
                      Shop
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>
                      <Link
                        href="#"
                        className="flex w-full items-center justify-between"
                        prefetch={false}>
                        Women
                        <ChevronRightIcon className="h-4 w-4" />
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="#"
                        className="flex w-full items-center justify-between"
                        prefetch={false}>
                        Men
                        <ChevronRightIcon className="h-4 w-4" />
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="#"
                        className="flex w-full items-center justify-between"
                        prefetch={false}>
                        Kids
                        <ChevronRightIcon className="h-4 w-4" />
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="#"
                        className="flex w-full items-center justify-between"
                        prefetch={false}>
                        Accessories
                        <ChevronRightIcon className="h-4 w-4" />
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="ghost" className="justify-start font-medium">
                  On Sale
                </Button>
                <Button variant="ghost" className="justify-start font-medium">
                  Brands
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>)
  );
}

function ChevronDownIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>)
  );
}


function ChevronRightIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function ShoppingBagIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>)
  );
}


function ShoppingCartIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path
        d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>)
  );
}
