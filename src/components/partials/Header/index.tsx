import { Drawer } from "@/components/ui/Drawer";
import useScreenSize from "@/hooks/ui/useScreenSize";
import { Earth, Menu, UserCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Logo = () => {
  return (
    <a href="https://www.autodesk.com" className="flex items-center space-x-3">
      <div className="size-6 rounded">
        <img
          className="size-full object-contain"
          src="/logo.svg"
          alt="Autodesk Logo"
        />
      </div>
      <span className="text-lg font-black">AUTODESK</span>
    </a>
  );
};

const Header = () => {
  const items = [
    {
      name: "Products",
      href: "https://www.autodesk.com/products",
    },
    {
      name: "Support",
      href: "https://www.autodesk.com/support",
    },
    {
      name: "Learn",
      href: "https://www.autodesk.com/learn",
    },
    {
      name: "Community",
      href: "https://www.autodesk.com/community",
    },
    {
      name: "Education",
      href: "https://www.autodesk.com/education/home",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const { width } = useScreenSize();

  useEffect(() => {
    if (width >= 1024) {
      setIsOpen(false);
    }
  }, [width]);

  return (
    <div>
      <header className="dark bg-background text-foreground flex h-16 items-center border-b px-6">
        <div className="container mx-auto flex h-full items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="lg:hidden">
              <Menu />
            </button>
            <div className="bg-muted-foreground w-[1px] self-stretch lg:hidden" />
            <div>
              <Logo />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Earth />
              <span className="leading-0">US</span>
            </div>
            <div className="bg-muted-foreground w-[1px] self-stretch" />
            <a
              href="https://signin.autodesk.com/?flowId=gpJGMqNFAX"
              className="flex items-center gap-1"
            >
              <UserCircle />
              <span className="leading-0">Sign in</span>
            </a>
          </div>
        </div>
      </header>
      <nav className="dark bg-card text-card-foreground hidden border-t lg:block">
        <div className="container flex items-center">
          <ul className="flex items-center">
            {items.map((item) => (
              <li key={item.name}>
                <a
                  className="hover:bg-muted/25 inline-block p-4 py-2"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="lg:hidden">
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <Drawer.Header className="h-20 p-0">
            <div className="flex h-full items-center justify-between px-6">
              <div>
                <Logo />
              </div>
              <Drawer.Close />
            </div>
          </Drawer.Header>
          <Drawer.Body className="p-0">
            <ul className="flex flex-col">
              {items.map((item) => (
                <li key={item.name}>
                  <a
                    className="hover:bg-muted/25 block w-full px-6 py-4"
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </Drawer.Body>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
