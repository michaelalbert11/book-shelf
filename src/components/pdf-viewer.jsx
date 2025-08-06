import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { toolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
export default function PdfViewer(props) {
  const { file } = props;

  const renderToolbar = (Toolbar) => (
    <Toolbar>
      {(slots) => {
        const {
          CurrentPageInput,
          CurrentScale,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          ZoomIn,
          ZoomOut,
        } = slots;
        return (
          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: "15px",
              overflow: "auto",
            }}
          >
            <div style={{ padding: "0px 2px" }}>
              <ZoomOut>
                {(props) => (
                  <button
                    style={{
                      backgroundColor: "#357edd",
                      border: "none",
                      borderRadius: "4px",
                      color: "#ffffff",
                      cursor: "pointer",
                      padding: "8px",
                      whiteSpace: "nowrap",
                    }}
                    onClick={props.onClick}
                  >
                    Zoom out
                  </button>
                )}
              </ZoomOut>
            </div>
            <div style={{ padding: "0px 2px" }}>
              <CurrentScale>
                {(props) => <span>{`${Math.round(props.scale * 100)}%`}</span>}
              </CurrentScale>
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ZoomIn>
                {(props) => (
                  <button
                    style={{
                      backgroundColor: "#357edd",
                      border: "none",
                      borderRadius: "4px",
                      color: "#ffffff",
                      cursor: "pointer",
                      padding: "8px",
                      whiteSpace: "nowrap",
                    }}
                    onClick={props.onClick}
                  >
                    Zoom in
                  </button>
                )}
              </ZoomIn>
            </div>
          </div>
        );
      }}
    </Toolbar>
  );
  const defaultLayoutPluginInstance = defaultLayoutPlugin({ renderToolbar });

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
      <div style={{ height: "100%,width:100%" }}>
        <Viewer fileUrl={file} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  );
}
