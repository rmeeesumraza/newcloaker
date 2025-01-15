import { useState } from "react";

export default function Switch({ isSwitchOn, onToggle }) {
  const handleSwitchChange = () => {
    onToggle(!isSwitchOn);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <label>
        <input
          type="checkbox"
          checked={isSwitchOn}
          onChange={handleSwitchChange}
        />
        Toggle Link
      </label>
    </div>
  );
}
