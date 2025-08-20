const ResourcesSection = () => {
  const resources = [
    {
      id: 1,
      type: "WEBINAR",
      title: "See what's new in Civil 3D",
      description:
        "Gain valuable insights and techniques to reduce design time and minimize errors and rework.",
      imageUrl:
        "https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy24/overview/images/better-collaboration-civil-3d-webinar-thumb-788x444.jpg",
      link: "https://www.autodesk.com/webinars/aec/whats-new-revit-civil-infra-2025",
      linkText: "Watch on-demand",
      icon: "play",
    },
    {
      id: 2,
      type: "BLOG",
      title: "Civil 3D highlights and updates",
      description:
        "See the latest updates for efficiently designing and digitally modeling infrastructure projects.",
      imageUrl:
        "https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy24/overview/images/whats-new-civil-3d-thumb-788x444.jpg",
      link: "https://www.autodesk.com/blogs/aec/category/whats-new/?field=slug&terms=civil-3d&taxonomy=post_tag",
      linkText: "Read blog",
      icon: "arrow",
    },
    {
      id: 3,
      type: "ROADMAP",
      title: "What's next for Civil 3D",
      description:
        "Explore the product development pipeline for Civil 3D and provide your feedback.",
      imageUrl:
        "https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy24/overview/images/whats-next-civil-3d-webinar-thumb-788x444.jpg",
      link: "https://www.autodesk.com/blogs/aec/roadmap/civil-infrastructure-roadmap/",
      linkText: "Visit roadmap",
      icon: "arrow",
    },
  ];

  return (
    <div className="py-8 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-card border-border flex h-full flex-col overflow-hidden rounded-lg border"
            >
              <div className="group relative cursor-pointer">
                <img
                  src={resource.imageUrl}
                  alt={resource.title}
                  className="h-60 w-full object-cover"
                />
              </div>

              <div className="flex-grow p-6">
                <div className="text-muted-foreground mb-3 text-xs font-semibold uppercase">
                  {resource.type}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{resource.title}</h3>
                <p className="text-muted-foreground">{resource.description}</p>
              </div>

              <div className="border-border mt-auto border-t">
                <div className="p-4">
                  <a
                    href={resource.link}
                    className="text-primary inline-flex items-center font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resource.icon === "play" ? (
                      <svg
                        className="mr-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="mr-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    )}
                    {resource.linkText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
