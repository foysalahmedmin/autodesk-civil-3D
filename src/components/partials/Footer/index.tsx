import { ExternalLink } from "lucide-react";
import React from "react";

const SocialMediaIcon: React.FC<{ platform: string; href: string }> = ({
  platform,
  href,
}) => {
  const icons: Record<string, React.ReactNode> = {
    facebook: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    instagram: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM15.156 19.833H8.844c-2.196 0-3.977-1.781-3.977-3.977V8.144c0-2.196 1.781-3.977 3.977-3.977h6.312c2.196 0 3.977 1.781 3.977 3.977v7.712c0 2.196-1.781 3.977-3.977 3.977z" />
      </svg>
    ),
    twitter: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    linkedin: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    youtube: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  };

  return (
    <a
      href={href}
      className="text-muted-foreground hover:text-foreground hover:bg-accent/25 rounded-full p-2 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={platform}
    >
      {icons?.[platform]}
    </a>
  );
};

const Footer = () => {
  const autodeskLinks = [
    { text: "Company overview", url: "https://www.autodesk.com/company" },
    { text: "Careers", url: "https://www.autodesk.com/careers/overview" },
    {
      text: "Investor relations",
      url: "https://investors.autodesk.com/",
      external: true,
    },
    {
      text: "Autodesk Trust Center",
      url: "https://www.autodesk.com/trust/overview",
    },
    { text: "Newsroom", url: "https://adsknews.autodesk.com/", external: true },
    {
      text: "Global Belonging at Autodesk",
      url: "https://www.autodesk.com/company/global-belonging",
    },
    { text: "LA28 Games", url: "https://www.autodesk.com/la28-games" },
  ];

  const moreLinks = [
    {
      text: "Autodesk Foundation",
      url: "https://www.autodesk.org/",
      external: true,
    },
    {
      text: "Sustainability",
      url: "https://www.autodesk.com/sustainability/overview",
    },
    { text: "Contact us", url: "https://www.autodesk.com/company/contact-us" },
    {
      text: "Students and educators",
      url: "https://www.autodesk.com/education/home",
    },
    {
      text: "Affiliate program",
      url: "https://www.autodesk.com/affiliate-program/overview",
    },
    {
      text: "Autodesk Research",
      url: "https://www.research.autodesk.com/",
      external: true,
    },
    {
      text: "Design & Make with Autodesk",
      url: "https://www.autodesk.com/design-make",
    },
  ];

  const howToBuyLinks: { text: string; url: string; external?: boolean }[] = [
    { text: "View all products", url: "https://www.autodesk.com/products" },
    {
      text: "Buying with Autodesk",
      url: "https://www.autodesk.com/buying/overview",
    },
    { text: "Renewal options", url: "https://www.autodesk.com/buying/renewal" },
    {
      text: "Find a partner",
      url: "https://www.autodesk.com/support/partners",
    },
    {
      text: "Sales and refunds",
      url: "https://www.autodesk.com/customer/help",
    },
    {
      text: "Choose your subscription plan",
      url: "https://www.autodesk.com/buying/plans",
    },
    {
      text: "Pay as you go with Flex",
      url: "https://www.autodesk.com/buying/flex",
    },
  ];

  const supportLinks = [
    { text: "Manage your account", url: "https://manage.autodesk.com" },
    {
      text: "Download and install software",
      url: "https://manage.autodesk.com/products",
    },
    {
      text: "Autodesk Product Status",
      url: "https://health.autodesk.com/",
      external: true,
    },
    { text: "Autodesk Community", url: "https://forums.autodesk.com/" },
    {
      text: "Education support",
      url: "https://www.autodesk.com/education/support",
    },
    { text: "Contact support", url: "https://www.autodesk.com/support" },
  ];

  return (
    <footer className="bg-background border-border border-t">
      {/* Main Footer Content */}
      <div className="container px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Autodesk Section */}
          <div>
            <h3 className="text-foreground mb-6 text-lg font-semibold">
              Autodesk
            </h3>
            <ul className="space-y-3">
              {autodeskLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
                  >
                    <span>{link.text}</span>
                    {link.external && <ExternalLink size={14} />}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="mt-8 flex items-center gap-2">
              <SocialMediaIcon
                platform="facebook"
                href="https://www.autodesk.com/social-media"
              />
              <SocialMediaIcon
                platform="instagram"
                href="https://www.autodesk.com/social-media"
              />
              <SocialMediaIcon
                platform="twitter"
                href="https://www.autodesk.com/social-media"
              />
              <SocialMediaIcon
                platform="linkedin"
                href="https://www.autodesk.com/social-media"
              />
              <SocialMediaIcon
                platform="youtube"
                href="https://www.autodesk.com/social-media"
              />
            </div>
          </div>

          {/* More Links Section */}
          <div>
            <h3 className="text-foreground mb-6 text-lg font-semibold">More</h3>
            <ul className="space-y-3">
              {moreLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
                  >
                    <span>{link.text}</span>
                    {link.external && <ExternalLink size={14} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* How to buy Section */}
          <div>
            <h3 className="text-foreground mb-6 text-lg font-semibold">
              How to buy
            </h3>
            <ul className="space-y-3">
              {howToBuyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target={link?.external ? "_blank" : undefined}
                    rel={link?.external ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
                  >
                    <span>{link.text}</span>
                    {link?.external && <ExternalLink size={14} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-foreground mb-6 text-lg font-semibold">
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
                  >
                    <span>{link.text}</span>
                    {link.external && <ExternalLink size={14} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Footer */}
      <div className="border-border bg-muted/50 border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="text-muted-foreground text-xs">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href="https://www.autodesk.com/company/legal-notices-trademarks/privacy-statement"
                className="hover:text-foreground transition-colors"
              >
                Privacy
              </a>
              <span>|</span>
              <a
                href="https://www.autodesk.com/company/legal-notices-trademarks/ccpa-do-not-sell"
                className="hover:text-foreground transition-colors"
              >
                Do not sell or share my personal information
              </a>
              <span>|</span>
              <button className="hover:text-foreground transition-colors">
                Cookie preferences
              </button>
              <span>|</span>
              <a
                href="https://www.autodesk.com/genuine/report-piracy"
                className="hover:text-foreground transition-colors"
              >
                Report noncompliance
              </a>
              <span>|</span>
              <a
                href="https://www.autodesk.com/company/terms-of-use/en/general-terms"
                className="hover:text-foreground transition-colors"
              >
                Terms of use
              </a>
              <span>|</span>
              <a
                href="https://www.autodesk.com/company/legal-notices-trademarks"
                className="hover:text-foreground transition-colors"
              >
                Legal
              </a>
              <span>|</span>
              <span className="font-medium">
                © 2026 Autodesk Inc. All rights reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
