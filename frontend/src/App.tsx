import { useEffect, useState } from "react";
import BACKEND_URL from "./utils/backend.url";

function App() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/test`);

      const data = await res.json();

      setMessage(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-400">
        This has tailwind added
      </h1>
      <h1 className="text-3xl font-bold underline">
        Data from backend: {message}
      </h1>
    </div>
  );
}

export default App;
