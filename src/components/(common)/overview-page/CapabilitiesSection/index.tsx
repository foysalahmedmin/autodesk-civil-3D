import { useState } from "react";

const CapabilitiesSection = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: "Streamline your design and documentation workflows",
      description:
        "Deliver design and construction documentation for road and highway, site design, rail, and bridge projects. Reduce overall design time with faster modeling for surfaces, corridors, terrain, and more.",
      video:
        "https://videos.autodesk.com/zencoder/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy24/overview/videos/streamline-design-documentation-video-1920x1080.mp4",
      videoPoster:
        "https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy24/overview/images/streamline-design-documentation-video-thumb-1172x660.jpg",
      videoCaption:
        "Improve design quality with Autodesk Construction Cloud (video: 1 min.)",
      primaryButton: {
        text: "See Civil 3D features",
        link: "/products/civil-3d/features",
      },
      secondaryButton: {
        text: "Try Civil 3D",
        link: "/products/civil-3d/trial-intake",
      },
      layout: "left",
    },
    {
      id: 2,
      title: "Gain efficiencies with seamless GIS Integration",
      description:
        "Streamline the process of incorporating geographical data into your designs, ensure accurate geolocation of assets, analyze for planning, and contextually visualize your designs.",
      video:
        "https://videos.autodesk.com/zencoder/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy24/overview/videos/streamline-design-documentation-video-1920x1080.mp4",
      videoPoster:
        "https://help.autodesk.com/videos/68360040-3550-11ef-9f27-65abdedda439/poster",
      videoCaption:
        "Understand existing conditions and directly integrate to your GIS. (video: 2:35 min.)",
      primaryButton: {
        text: "Learn about BIM and GIS",
        link: "/partners/aec-partners/esri",
      },
      secondaryButton: {
        text: "Try Civil 3D",
        link: "/products/civil-3d/trial-intake",
      },
      layout: "right",
    },
    {
      id: 3,
      title: "Improve project collaboration",
      description:
        "Enable designers to author, share, and update design projects in a central data environment. Make real-time updates at any phase of the project lifecycle to share with different teams.",
      video:
        "https://videos.autodesk.com/zencoder/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy24/overview/videos/streamline-design-documentation-video-1920x1080.mp4",
      videoPoster:
        "https://help.autodesk.com/videos/683def80-3550-11ef-9f27-65abdedda439/poster",
      videoCaption: "Collaborate in real time (video: 1:36 min.)",
      primaryButton: {
        text: "Learn about BIM Collaborate Pro",
        link: "/products/bim-collaborate/overview?term=1-YEAR&tab=subscription",
      },
      secondaryButton: {
        text: "Try Civil 3D",
        link: "/products/civil-3d/trial-intake",
      },
      layout: "left",
    },
  ];

  return (
    <div className="py-8 md:py-16">
      <div className="container">
        <div className="mb-12 md:w-9/12 lg:w-3/5">
          <h2 className="text-3xl font-bold">
            What you can do with Autodesk Civil 3D
          </h2>
        </div>

        {features.map((feature) => (
          <div
            key={feature.id}
            className={`mb-16 flex flex-col ${
              feature.layout === "right" ? "md:flex-row-reverse" : "md:flex-row"
            } justify-between gap-8`}
          >
            {/* Media Column */}
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg">
                <div className="relative">
                  {/* Video or Poster */}
                  <div className="bg-muted relative flex aspect-video items-center justify-center">
                    {playingVideo === feature.id ? (
                      <video
                        src={feature.video}
                        poster={feature.videoPoster}
                        controls
                        autoPlay
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <>
                        <img
                          src={feature.videoPoster}
                          alt={feature.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <button
                            onClick={() => setPlayingVideo(feature.id)}
                            className="border-background bg-foreground/50 text-background hover:bg-foreground hover:text-background cursor-pointer rounded-full border p-4"
                          >
                            <svg
                              className="text-primary-foreground size-12"
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
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="bg-muted p-3">
                  <p className="text-muted-foreground text-sm">
                    {feature.videoCaption}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="flex w-full flex-col justify-center md:w-1/2">
              <h3 className="mb-4 text-2xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">
                {feature.description}
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href={feature.primaryButton.link}
                  className="border-foreground text-foreground flex w-fit items-center gap-2 rounded border px-4 py-2"
                >
                  {feature.primaryButton.text}
                </a>

                <a
                  href={feature.secondaryButton.link}
                  className="text-primary inline-flex items-center font-medium hover:underline"
                >
                  {feature.secondaryButton.text}
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
  );
};

export default CapabilitiesSection;
