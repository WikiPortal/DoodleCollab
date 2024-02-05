import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useReactMediaRecorder } from 'react-media-recorder';

const ScreenRecording = ({
  screen,
  audio,
  video,
  downloadRecordingPath,
  downloadRecordingType,
  emailToSupport
}) => {
  const [recordingNumber, setRecordingNumber] = useState(0);

  const RecordView = () => {
    const {
      status,
      startRecording: startRecord,
      stopRecording: stopRecord,
      mediaBlobUrl
    } = useReactMediaRecorder({ screen, audio, video });

    const startRecording = () => {
      return startRecord();
    };

    const stopRecording = () => {
      const currentTimeSatmp = new Date().getTime();
      setRecordingNumber(currentTimeSatmp);
      return stopRecord();
    };

    const viewRecording = () => {
      window.open(mediaBlobUrl, "_blank").focus();
    };

    const downloadRecording = () => {
      const pathName = `${downloadRecordingPath}_${recordingNumber}.${downloadRecordingType}`;
      try {
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(mediaBlobUrl, pathName);
        } else {
          const link = document.createElement("a");
          link.href = mediaBlobUrl;
          link.download = pathName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } catch (err) {
        console.error(err);
      }
    };

    const mailRecording = () => {
      try {
        const emailSubject = `Screen recording for Issue number ${recordingNumber}`;
        const emailBody = `Hello Team,%0D%0A%0D%0A${mediaBlobUrl}`;
        const mailtoLink = `mailto:${emailToSupport}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
        window.open(mailtoLink, "_blank");
      } catch (err) {
        console.error(err);
      }
    };
    
    return (
      <div>
        <div style={{ lineHeight: "24px" }}>
          {status && status !== "stopped" && (
            <Typography>
              Screen Recording Status: {status && status.toUpperCase()}
            </Typography>
          )}
          {status && status === "recording" && (
            <Badge
              className="screen-recording-badge"
              color="error"
              variant="dot"
              style={{
                marginLeft: "5px"
              }}
            />
          )}
        </div>
        <div style={{ textAlign: "right" }}>
          {status && status !== "recording" && (
            <Button
              size="small"
              onClick={startRecording}
              variant="contained"
              color="primary"
              style={{ marginLeft: "5px" }}
            >
              {mediaBlobUrl ? "Record again" : "Record your Problem"}
            </Button>
          )}
          {status && status === "recording" && (
            <Button
              size="small"
              onClick={stopRecording}
              variant="contained"
              color="secondary"
              style={{ marginLeft: "5px" }}
            >
              Stop Recording
            </Button>
          )}
          {mediaBlobUrl && status && status === "stopped" && (
            <Button
              size="small"
              onClick={viewRecording}
              variant="contained"
              color="primary"
              style={{ marginLeft: "5px" }}
            >
              View
            </Button>
          )}
          {downloadRecordingType &&
            mediaBlobUrl &&
            status &&
            status === "stopped" && (
              <Button
                size="small"
                onClick={downloadRecording}
                variant="contained"
                color="primary"
                style={{ marginLeft: "5px" }}
              >
                Download
              </Button>
            )}
          {emailToSupport && mediaBlobUrl && status && status === "stopped" && (
            <Button
              size="small"
              onClick={mailRecording}
              variant="contained"
              color="primary"
              style={{ marginLeft: "5px" }}
            >
              Email To Share
            </Button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="Screen-Record-Wrapper" style={{ padding: "5px 20px" }}>
      {RecordView()}
    </div>
  );
};

export default ScreenRecording;
