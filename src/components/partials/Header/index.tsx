const Header = () => {
  return (
    <div>
      <header className="dark bg-background text-foreground fixed top-0 right-0 left-0 z-50 border-b px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="https://www.autodesk.com"
            className="flex items-center space-x-3"
          >
            <div className="size-8 rounded">
              <img
                className="size-full object-contain"
                src="/logo.svg"
                alt="Autodesk Logo"
              />
            </div>
            <span className="text-xl font-bold">AUTODESK</span>
          </a>

          <nav className="hidden space-x-8 md:flex">
            <a
              href="https://www.autodesk.com/products"
              className="transition-colors hover:text-gray-300"
            >
              Products
            </a>
            <a
              href="https://www.autodesk.com/community"
              className="transition-colors hover:text-gray-300"
            >
              Community
            </a>
            <a
              href="https://www.autodesk.com/support"
              className="transition-colors hover:text-gray-300"
            >
              Support
            </a>
            <a
              href="https://www.autodesk.com/products/civil-3d/overview"
              className="transition-colors hover:text-gray-300"
            >
              Buy
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
