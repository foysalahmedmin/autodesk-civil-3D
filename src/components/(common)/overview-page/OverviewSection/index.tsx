import { useState } from "react";

const OverviewSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    {
      id: 1,
      title: "Civil 3D overview (video: 2:41 min.)",
      thumbnail:
        "https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy25/overview/civil-3d-overview-video-thumb-540x362.jpg",
      video:
        "https://help.autodesk.com/videos/684d7fe0-3550-11ef-9f27-65abdedda439/video.mp4",
    },
    {
      id: 2,
      title:
        "Improve your design operations with end-to-end workflows (video: 1:40 min.)",
      thumbnail:
        "https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy25/overview/what-is-civil-3d-02-video-thumb-540x362.jpg",
      video:
        "https://help.autodesk.com/videos/68451b70-3550-11ef-9f27-65abdedda439/video.mp4",
    },
    {
      id: 3,
      title: "Securely store and share your project files (video: 59 sec.)",
      thumbnail:
        "https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-autocad-civil-3d/fy25/overview/what-is-civil-3d-03-video-thumb-540x362.jpg",
      video:
        "https://help.autodesk.com/videos/684d7fe0-3550-11ef-9f27-65abdedda439/video.mp4",
    },
  ];

  return (
    <div className="py-8 md:py-16">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content Section */}
          <div className="w-full space-y-6 p-8 lg:w-1/2">
            <h2 className="text-3xl font-bold">What is Autodesk Civil 3D?</h2>

            <p className="text-muted-foreground text-lg">
              Autodesk Civil 3D design software empowers civil engineers to meet
              complex infrastructure challenges in a 3D model-based environment.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary mt-1 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                <p className="text-base">Accelerate design and documentation</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary mt-1 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                <p className="text-base">Advance design automation</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary mt-1 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                <p className="text-base">
                  Improve collaboration and coordination
                </p>
              </div>
            </div>

            <div className="border-border border-t pt-6">
              <a
                href="https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/System-requirements-for-Autodesk-Civil-3D-2025.html"
                className="text-primary flex items-center text-base hover:underline"
              >
                See system requirements
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
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="pt-4">
              <a
                href="/products/civil-3d/trial-intake"
                className="text-primary inline-flex items-center font-medium hover:underline"
              >
                <svg
                  className="mr-2 h-5 w-5"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Try Civil 3D
              </a>
            </div>
          </div>

          {/* Right Media Gallery Section */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6 overflow-hidden">
              <div className="relative">
                {/* Active Video Player */}
                <div className="bg-muted relative flex aspect-video items-center justify-center">
                  <video
                    key={videos[activeVideo].id} // ensures re-render on video change
                    src={videos[activeVideo].video}
                    poster={videos[activeVideo].thumbnail}
                    controls
                    autoPlay
                    className="h-full w-full rounded object-cover"
                  />
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  {videos[activeVideo].title}
                </p>
              </div>

              {/* Thumbnails List */}
              <div className="bg-card">
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {videos.map((video, index) => (
                    <div
                      key={video.id}
                      className={`relative h-16 w-24 flex-shrink-0 cursor-pointer rounded border-2 transition-all ${
                        index === activeVideo
                          ? "border-primary opacity-100"
                          : "border-border opacity-70 hover:opacity-100"
                      }`}
                      onClick={() => setActiveVideo(index)}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="h-full w-full rounded object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
