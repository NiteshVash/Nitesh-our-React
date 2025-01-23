import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setpassword] = useState("");

  //ref hook
  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]=+~`'_";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, charAllowed, PasswordGenerator]);

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "500px",
        width: "90%",
        padding: "1.5rem",
        backgroundColor: "#1a202c",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        color: "#ffffff",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h4
        style={{
          fontSize: "1.8rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
        }}
      >
        Password Generator
      </h4>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <input
          type="text"
          value={Password}
          placeholder="Password"
          ref={passwordRef}
          readOnly
          style={{
            flex: 1,
            padding: "0.75rem ",
            fontSize: "1rem",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#ffffff",
            color: "#333",
          }}
        />
        <button
          onClick={copyToClipboard}
          style={{
            padding: "0.75rem 1rem",
            fontSize: "1rem",
            backgroundColor: "#007bff",
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Copy
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.5rem 0",
          color: "#ff9f43",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            onChange={(e) => {
              setlength(parseInt(e.target.value, 10));
            }}
            style={{
              accentColor: "#ff9f43",
              cursor: "pointer",
            }}
          />
          <label
            style={{
              fontSize: "1rem",
              whiteSpace: "nowrap",
            }}
          >
            Length: {length}
          </label>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setnumberAllowed((prev) => !prev)}
            style={{
              cursor: "pointer",
            }}
          />
          <label
            htmlFor="numberInput"
            style={{
              fontSize: "1rem",
              color: "#ff9f43",
            }}
          >
            Numbers
          </label>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <input
            type="checkbox"
            checked={charAllowed}
            id="characterInput"
            onChange={() => setcharAllowed((prev) => !prev)}
            style={{
              cursor: "pointer",
            }}
          />
          <label
            htmlFor="characterInput"
            style={{
              fontSize: "1rem",
              color: "#ff9f43",
            }}
          >
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
