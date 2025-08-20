const ProjectTypesSection = () => {
  const projectTypes = [
    {
      id: 1,
      title: "Road and highway design",
      imageUrl:
        "https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy23/overview/images/road-and-highway-design-icon-128x128.png",
      link: "/products/civil-3d/road-design",
    },
    {
      id: 2,
      title: "Site design",
      imageUrl:
        "https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy23/overview/images/site-design-icon-128x128.png",
      link: "/products/civil-3d/site-design",
    },
    {
      id: 3,
      title: "Rail design",
      imageUrl:
        "https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy23/overview/images/rail-design-icon-128x128.png",
      link: "/products/civil-3d/rail-design",
    },
  ];

  return (
    <div className="bg-background px-4 py-16">
      <div className="container">
        <div className="mb-8 md:w-9/12 lg:w-3/5">
          <h2 className="text-3xl font-bold">
            Explore Civil 3D by project type
          </h2>
        </div>

        <div className="mb-8 md:w-9/12 lg:w-3/5">
          <p className="text-muted-foreground text-lg">
            Civil 3D includes purpose-built tools for critical civil engineering
            disciplines. See how Civil 3D can help you design and build better
            roads and highways, sites, and rail projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 md:gap-x-8 lg:grid-cols-3 lg:gap-y-4">
          {projectTypes.map((project) => (
            <div key={project.id} className="">
              <div className="flex flex-wrap items-center gap-4">
                <div className="h-16 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full object-contain"
                  />
                </div>
                <div>
                  <a
                    href={project.link}
                    className="text-primary mb-5 block text-xl font-semibold hover:underline"
                  >
                    {project.title}
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

export default ProjectTypesSection;
