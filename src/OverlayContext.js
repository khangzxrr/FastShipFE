import { createContext, useContext, useState } from "react";

export const OverlayContext = createContext();

export function useOverlay() {
  return useContext(OverlayContext);
}

export const OverlayProvider = ({ children }) => {
  const [overlays, setOverlays] = useState([]);

  function CreateOverlay(text) {
    return setOverlays((o) => {
      return [...o, { text }];
    });
  }

  return (
    <OverlayContext.Provider value={{ CreateOverlay }}>
      {overlays.length > 0 &&
        overlays.map((o, index) => (
          <div className="overlay" key={index}>
            {o.text}
          </div>
        ))}
      {children}
    </OverlayContext.Provider>
  );
};
