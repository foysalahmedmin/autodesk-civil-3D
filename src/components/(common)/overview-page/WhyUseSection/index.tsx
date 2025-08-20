const WhyUseSection = () => {
  const benefits = [
    {
      id: 1,
      title: "Improve design operations",
      description:
        "Improve productivity and quality with a dynamic 3D model–based design environment and design-driven documentation environment.",
      imageUrl:
        "https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy24/overview/images/design-more-efficiently-120x120.svg",
    },
    {
      id: 2,
      title: "Streamline collaboration",
      description:
        "Access real-time updates and share with other Autodesk software for design, analysis, and construction.",
      imageUrl:
        "https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy24/overview/images/leverage-ineroperability-tools-120x120.svg",
    },
    {
      id: 3,
      title: "Enhance data exchange",
      description:
        "Meet complex design challenges through interoperability with other software using the common IFC format(s).",
      imageUrl:
        "https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy24/overview/images/streamline-collaboration-120x120.svg",
    },
  ];

  return (
    <div className="bg-[#f9f9f9]">
      <div className="container">
        <div
          style={{
            backgroundImage:
              "url(https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy23/overview/images/civil-3d-benefits-background-1580x734.jpg)",
          }}
          className="bg-cover bg-center bg-no-repeat py-8 md:py-16"
        >
          <div className="mb-8 md:w-9/12 lg:w-3/5">
            <h2 className="text-3xl font-bold">Why use Civil 3D?</h2>
          </div>

          <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="h-full">
                <div className="bg-card border-border flex h-full flex-col rounded-lg border p-6 transition-shadow hover:shadow-md">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 h-16 w-16 flex-shrink-0">
                      <img
                        src={benefit.imageUrl}
                        alt={benefit.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  </div>
                  <div className="mt-2 flex-grow">
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUseSection;
