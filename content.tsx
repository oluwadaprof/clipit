import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useState } from "react"

import "~base.css"
import Footer from "~components/footer"

import Home from "~components/home/home"
import TopBar from "~components/topbar"
import { Card, CardContent, CardFooter } from "~components/ui/primitives/card"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Listen for messages from background script
    const messageListener = (message: any, sender: any, sendResponse: any) => {
      if (message.action === "toggle-overlay") {
        setIsVisible((prev) => !prev)
        sendResponse({ success: true })
      }
    }

    chrome.runtime.onMessage.addListener(messageListener)

    // Optional: Listen for keyboard shortcut
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === "E") {
        event.preventDefault()
        setIsVisible((prev) => !prev)
      }
    }

    document.addEventListener("keydown", handleKeydown)

    // Cleanup
    return () => {
      chrome.runtime.onMessage.removeListener(messageListener)
      document.removeEventListener("keydown", handleKeydown)
    }
  }, [])

  return (
    <Card
      className={`fixed right-2 top-2 z-[9999] box-border flex h-[625px] w-[420px] flex-col rounded-2xl bg-white text-base shadow-2xl transition-transform duration-300 ${
        !isVisible ? "translate-x-[520px]" : "translate-x-0"
      } overflow-hidden`}
      style={{ fontFamily: "system-ui, sans-serif" }}>
      <TopBar />
      <CardContent className="flex-1 overflow-auto">
        <Home />
      </CardContent>
      <CardFooter className="mt-auto">
        <Footer />
      </CardFooter>
    </Card>
  )
}

export default PlasmoOverlay

// export const getOverlayAnchor: PlasmoGetOverlayAnchor = () => {
//   const el = document.getElementById('plasmo-csui');
//   if (el) {
//     return el;
//   }
//   return document.body;
// }
