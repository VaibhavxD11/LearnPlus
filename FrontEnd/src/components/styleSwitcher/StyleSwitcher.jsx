import React from "react";

import "./styleSwitcher.css";

import { useGlobalContext } from "../../context/context";

const colors = [
  { id: 1, color: "red", type: "color-1" },
  { id: 2, color: "blue", type: "color-2" },
  { id: 3, color: "gold", type: "color-3" },
  { id: 4, color: "purple", type: "color-4" },
  { id: 5, color: "aqua", type: "color-5" },
];

const StyleSwitcher = () => {
  const {
    toggleStyleSwitcher,
    isStyleSwitcher,
    colorHandler,
    themeColor,
    darkModeHandler,
    glassModeHandler,
    darkMode,
    glassMode,
  } = useGlobalContext();
  return (
    <div className={`style-switcher py-3 ${isStyleSwitcher ? "open" : null}`}>
      <button
        type="button"
        onClick={toggleStyleSwitcher}
        className="style-switcher-toggler theme-bg fs-5"
      >
        {isStyleSwitcher ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-cog"></i>
        )}
      </button>
      <h4 className="py-2 ps-3">Style Switcher</h4>
      <p className="ps-3">Theme Colors</p>
      <div className="theme-colors ps-3 pb-1">
        {colors.map((item) => (
          <button
            key={item.id}
            onClick={colorHandler}
            className={`theme-color me-2 ${item.type} ${
              item.type === themeColor ? "active" : null
            }`}
            data-theme_color={item.type}
            type="button"
          ></button>
        ))}
      </div>
      <div className="style-switcher-item py-3 ps-3">
        <div className="form-check form-switch">
          <input
            type="checkbox"
            className="form-check-input"
            id="dark-mode"
            onChange={darkModeHandler}
            checked={darkMode}
          />
          <label className="form-check-label" htmlFor="dark-mode">
            Dark Mode
          </label>
        </div>
      </div>
      <div className="style-switcher-item py-3 ps-3">
        <div className="form-check form-switch">
          <input
            type="checkbox"
            className="form-check-input js-dark-mode"
            id="glass-effect"
            onChange={glassModeHandler}
            checked={glassMode}
          />
          <label className="form-check-label" htmlFor="glass-effect">
            Glass Effect
          </label>
        </div>
      </div>
    </div>
  );
};

export default StyleSwitcher;
