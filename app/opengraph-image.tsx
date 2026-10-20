import { ImageResponse } from "next/og"

export const alt = "USA ELD — 24/7 ELD monitoring and compliance support"
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
        background: "#081A3A",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 34, fontWeight: 800 }}>
        <div style={{ width: 62, height: 62, borderRadius: 18, background: "#2F80FF", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900 }}>U</div>
        USA ELD
      </div>
      <div style={{ marginTop: 46, maxWidth: 950, fontSize: 64, lineHeight: 1.05, fontWeight: 800 }}>
        24/7 ELD Monitoring & Trucking Compliance Support
      </div>
      <div style={{ marginTop: 30, fontSize: 28, color: "#c4c4c4" }}>
        ELD support • Logbook assistance • DOT audit preparation • IFTA reporting
      </div>
      <div style={{ marginTop: 44, fontSize: 22, color: "#5EB3FF" }}>eldusallc.com</div>
    </div>,
    size
  )
}
