import { ShoppingCart, User, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold flex items-center justify-center gap-2">
          <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAllBMVEVHcEz////////////////////////9/f7///////////////////////////////8AAAADBQX29vb/owD/+vG2trbZ2dmZmZn/26n/8d3v7+//9eb/yHpISUn/1Zr/48GmpqY+Pz8jIyP/rxb/u0oxMjJsbW3j4+PAwcH/6Mj/wGHMzMx7fHxfYGDFxcX/tC0NDg6Li4slqlgLAAAAD3RSTlMAooK1rWYj+jfodsRYfMGCSs7OAAABRElEQVQokW2T2XqDIBCFSZsE0w1EUEFi3Jfsff+XK6ttUubG4fzMcZxvBABEa4j+BVxHQMXbH4UQ8nvaqLqFpFOmgqWLTwReXSayPTaxr3z1Cvh7Z4tijO/MSTvgEmb0vsFxjGtf6qH2rFMi9po+w0vTxJN6XkMQkXEkUIgwRCJl2XBpgvB07m27AZjW5huHc6hSdYnv1SjSABRa+1biKQCZ1q4qyXSSPsJKaxVCY28sHqF5Vc9Og24X+1LfkBX97KdHyKyKh6rBOINPQ5guevRMIFYziCinFvKSmuESuySQINolyZEbSMvW4iXoTA8dd7Z525a8cBdowfP2WEp1tGsyH5Okk/lBRS6Vp+T5rNdkba/nCrtoZY6Q9lmByLXND6W83W6dLOfCKlCt9Wbn26BFsbxZmX7old++vP/7H+DX5xaAHw4uN1n/ebb2AAAAAElFTkSuQmCC"
          alt="logo"
          height={25}
          width={25}
          />
            amazon
          </Link>
          <nav>
            <ul className="flex space-x-2 sm:space-x-4">
              <li>
                <Link href="/account" className="flex items-center">
                  <User className="mr-1" />
                  <span className="hidden sm:block">Account</span>
                </Link>
              </li>
              <li>
                <Link href="/orders" className="flex items-center">
                  <Package className="mr-1" />
                  <span className="hidden sm:block">Orders</span>
                </Link>
              </li>
              <li>
                <Link href="/cart" className="flex items-center">
                  <ShoppingCart className="mr-1" />
                  <span className="hidden sm:block">Cart</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4 mt-2">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/deals" className="hover:underline">
            Deals
          </Link>
          <Link href="/service" className="hover:underline">
            Service
          </Link>
          <Link href="/registry" className="hover:underline">
            Registry
          </Link>
          <Link href="/sell" className="hover:underline">
            Sell
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
