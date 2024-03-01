import Link from "next/link";
import Drawer from "../drawer/Drawer";
import { NavItem, navigation } from "./data";

interface DrawerProps {
  showDrawer: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: string;
}

interface MobileMenuItemProps {
  navItem: NavItem;
  showDrawer: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: string;
}

const MobileMenuItem = ({
  navItem,
  showDrawer,
  setShowDrawer,
  currentPage,
}: MobileMenuItemProps) => {
  return (
    <div className="border-b py-2">
      <Link
        onClick={() => setShowDrawer(!showDrawer)}
        href={navItem.href}
        className={`block px-4 py-2 text-lg font-semibold decoration-2 underline-offset-[6px] transition-all duration-200 hover:underline ${
          currentPage === navItem.href ? "underline" : ""
        }`}
      >
        {navItem.label}
      </Link>
    </div>
  );
};

const MobileMenuDrawer = ({ showDrawer, setShowDrawer, currentPage }: DrawerProps) => {
  return (
    <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer}>
      <nav className="border-t">
        {navigation.map((navItem) => (
          <MobileMenuItem
            showDrawer={showDrawer}
            setShowDrawer={setShowDrawer}
            key={navItem.label}
            navItem={navItem}
            currentPage={currentPage}
          />
        ))}
      </nav>
    </Drawer>
  );
};

export default MobileMenuDrawer;
