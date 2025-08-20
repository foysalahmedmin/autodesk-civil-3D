const ExtensionsSection = () => {
  const extensions = [
    {
      id: 1,
      title: "Grading Optimization for Civil 3D",
      description:
        "Use Grading Optimization to automate time-consuming grading tasks, explore alternatives to find optimal solutions, and return to Civil 3D to complete the detailed design. (video: 1:59 min.)",
      imageUrl:
        "https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy23/overview/images/grading-optimization-for-civil-3d-video-thumb-788x444.jpg",
      link: "https://help.autodesk.com/view/CIV3D/2025/ENU/?guid=Grading_Optimization",
      linkText: "See features",
    },
    {
      id: 2,
      title: "Geotechnical Modeler",
      description:
        "Effectively visualize and analyze geotechnical data, then easily utilize that data directly in your Civil 3D design model.",
      imageUrl:
        "https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy23/overview/images/geotechnical-modeler-thumb-788x444.jpg",
      link: "https://help.autodesk.com/view/CIV3D/2025/ENU/?guid=Civil3D_GeoTech_What_Is_the_Geotechnical_Modeller_html",
      linkText: "See extension detail",
    },
    {
      id: 3,
      title: "PPK Survey for Civil 3D",
      description:
        "Import base and rover survey data and convert it to coordinate geometry points in a Civil 3D drawing.",
      imageUrl:
        "https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy23/overview/images/ppk-survey-for-civil-3d-thumb-788x444.jpg",
      link: "https://help.autodesk.com/view/CIV3D/2023/ENU/?guid=GUID-5C8FE260-BE2A-446E-8685-1E8FC6B6BC2D",
      linkText: "See extension detail",
    },
  ];

  return (
    <div className="bg-muted py-8 md:py-16">
      <div className="container">
        <div className="mb-12 flex flex-wrap justify-between">
          <div className="w-full md:w-9/12 lg:w-3/5">
            <h2 className="text-3xl font-bold">
              Do more with Civil 3D extensions
            </h2>
            <div className="mt-2">
              <p className="text-muted-foreground">
                A separate install or subscription to another Autodesk product
                may be required.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {extensions.map((extension) => (
            <div
              key={extension.id}
              className="bg-card border-border flex h-full flex-col overflow-hidden rounded-lg border"
            >
              <div className="group relative cursor-pointer">
                <img
                  src={extension.imageUrl}
                  alt={extension.title}
                  className="h-60 w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="bg-primary/90 rounded-full p-3">
                    <svg
                      className="text-primary-foreground h-8 w-8"
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
                  </div>
                </div>
              </div>

              <div className="flex-grow p-6">
                <h3 className="mb-3 text-xl font-semibold">
                  {extension.title}
                </h3>
                <p className="text-muted-foreground">{extension.description}</p>
              </div>

              <div className="border-border mt-auto border-t">
                <div className="p-4">
                  <a
                    href={extension.link}
                    className="text-primary inline-flex items-center font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {extension.linkText}
                    <svg
                      className="ml-2 h-4 w-4"
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

export default ExtensionsSection;
