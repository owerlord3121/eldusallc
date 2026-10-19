import { ImageResponse } from "next/og"

export const alt = "NextLog FullService — 24/7 ELD monitoring and compliance support"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "72px",
        background: "#090909",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 30, fontWeight: 700 }}>
        <div style={{ width: 54, height: 54, borderRadius: 27, background: "#f59e0b", display: "flex", alignItems: "center", justifyContent: "center", color: "#090909", fontWeight: 900 }}>N</div>
        NextLog FullService
      </div>
      <div style={{ marginTop: 46, maxWidth: 950, fontSize: 64, lineHeight: 1.05, fontWeight: 800 }}>
        24/7 ELD Monitoring & Trucking Compliance Support
      </div>
      <div style={{ marginTop: 30, fontSize: 28, color: "#c4c4c4" }}>
        ELD support • Logbook assistance • DOT audit preparation • IFTA reporting
      </div>
      <div style={{ marginTop: 44, fontSize: 22, color: "#f59e0b" }}>eldusallc.com</div>
    </div>,
    size
  )
}
