import { useState } from "react";
import Alert from "./components/Btap3/Alert/Alert";

function App() {
  const [alertType, setAlertType] = useState<
    "success" | "warning" | "error" | null
  >(null);

  return (
    <div style={{ padding: "40px" }}>
      <div style={{ display: "flex", gap: "12px" }}>
        <button onClick={() => setAlertType("success")}>
          Success
        </button>
        <button onClick={() => setAlertType("warning")}>
          Warning
        </button>
        <button onClick={() => setAlertType("error")}>
          Error
        </button>
      </div>

      {alertType && (
        <Alert
          type={alertType}
          message={`This is a ${alertType} message`}
        />
      )}
    </div>
  );
}

export default App;
