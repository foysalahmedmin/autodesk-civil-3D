"use client";

import useScrollPosition from "@/hooks/ui/useScrollPosition";
import { useVisibleSection } from "@/hooks/utils/useVisibleSection";
import { cn } from "@/lib/utils";
import { Download, PhoneCall } from "lucide-react";

const subMenuItems = [
  {
    label: "Overview",
    href: "#overview-panel",
    value: "overview-panel",
  },
  {
    label: "Benefits",
    href: "#benefits-panel",
    value: "benefits-panel",
  },
  {
    label: "Project types",
    href: "#project-types-panel",
    value: "project-types-panel",
  },
  {
    label: "Capabilities",
    href: "#capabilities-panel",
    value: "capabilities-panel",
  },
  {
    label: "Customer stories",
    href: "#customer-stories-panel",
    value: "customer-stories-panel",
  },
  {
    label: "Extensions",
    href: "#extensions-panel",
    value: "extensions-panel",
  },
  {
    label: "Resources",
    href: "#resources-panel",
    value: "resources-panel",
  },
  {
    label: "Software bundle",
    href: "#upsell-collection",
    value: "upsell-collection",
  },
];

const Header2 = ({
  heroHeight,
  setShowModal,
}: {
  heroHeight: number;
  setShowModal: (value: boolean) => void;
}) => {
  const { scrollTop } = useScrollPosition();
  const isTopShow = scrollTop > heroHeight;

  // collect all IDs from subMenuItems for observer
  const ids = subMenuItems.map((item) => item.value);
  const { visibleSection } = useVisibleSection(ids);

  return (
    <header className="sticky top-0 z-50">
      {/* Top header (logo + CTA) */}
      <div
        className={cn(
          "h-0 overflow-hidden border-b transition-all duration-300",
          { "h-16": isTopShow },
        )}
      >
        <div className="container flex items-center justify-between overflow-hidden">
          <div className="flex items-center gap-2">
            <img className="h-10" src="/civil-logo.png" alt="" />
            Civil 3D
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <PhoneCall />
              <span className="leading-0">Contact Sales</span>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="border-foreground text-foreground flex h-10 cursor-pointer items-center gap-2 rounded border bg-transparent px-6 hover:outline-1 hover:outline-purple-900"
            >
              <Download />
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-card text-card-foreground hidden border-b lg:block">
        <div className="container flex items-center">
          <ul className="flex items-center">
            {subMenuItems.map((item) => (
              <li key={item.value}>
                <a
                  className={cn(
                    "hover:bg-muted/25 inline-block border-b-2 border-transparent p-4 py-2 transition-colors",
                    visibleSection === item.value
                      ? "border-primary text-primary font-medium"
                      : "text-muted-foreground",
                  )}
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header2;
