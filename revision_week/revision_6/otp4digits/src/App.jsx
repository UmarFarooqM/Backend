import React, { useState, useRef } from "react";

export default function App() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  function handleChange(e, i) {
    const val = e.target.value.replace(/\D/, ""); // numbers only
    const newOtp = [...otp];
    newOtp[i] = val.slice(0, 1); // only 1 digit
    setOtp(newOtp);

    if (val && i < 3) {
      inputRefs.current[i + 1].focus(); // move next
    }
  }

  function handleKeyDown(e, i) {
    if (e.key === "Backspace") {
      if (!otp[i] && i > 0) {
        inputRefs.current[i - 1].focus(); // move back if empty
      }
    }
  }

  function handlePaste(e) {
    const text = e.clipboardData.getData("text").replace(/\D/g, "");
    if (text.length === 4) {
      const arr = text.split("").slice(0, 4);
      setOtp(arr);
      arr.forEach((d, i) => (inputRefs.current[i].value = d));
      inputRefs.current[3].focus();
    }
  }

  return (
    <div>
      <h3>OTP</h3>
      {otp.map((num, i) => (
        <input
          key={i}
          ref={(el) => (inputRefs.current[i] = el)}
          value={num}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onPaste={handlePaste}
          maxLength={1}
          style={{ width: "30px", textAlign: "center", margin: "5px" }}
        />
      ))}
    </div>
  );
}
