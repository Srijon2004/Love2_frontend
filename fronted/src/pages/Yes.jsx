// import React, { useEffect } from "react";

// export default function Yes() {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://tenor.com/embed.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => document.body.removeChild(script);
//   }, []);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-100 to-green-300 p-4">
//       <div className="flex flex-col items-center text-center gap-6 w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg">

//         <div
//           className="tenor-gif-embed rounded-lg w-full max-w-[220px] h-auto"
//           data-postid="253027946666209433"
//           data-share-method="host"
//           data-aspect-ratio="1.37853"
//           data-width="100%"
//         >
//           <a href="https://tenor.com/view/mochi-cat-mochi-and-goma-goma-and-peach-mochi-mochi-peach-cat-gif-gif-253027946666209433">
//             Mochi Cat GIF
//           </a>{" "}
//           from <a href="https://tenor.com/search/mochi-gifs">Mochi GIFs</a>
//         </div>

//         <h1 className="text-3xl font-bold">Hehehehe, I knew it! Love you a lot 😘</h1>

//         <div className="fixed bottom-2 right-4 text-sm font-bold text-black/70">
//           Srijon 💖
//         </div>
//       </div>
//     </div>
//   );
// }

// +++++++++++++++++++++++++++++++++++++++++++++++
// import React, { useEffect, useState } from "react";
// import { sendGirlfriendResponse } from "../api/userApi";

// export default function Yes() {
//   const [message, setMessage] = useState("");
//   const [isSent, setIsSent] = useState(false);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://tenor.com/embed.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => document.body.removeChild(script);
//   }, []);

//   const handleSendResponse = async () => {
//     const username = localStorage.getItem("bf_username");
//     const gfId = localStorage.getItem("gf_id");

//     if (!username || !gfId) return;

//     try {
//       await sendGirlfriendResponse(username, gfId, message);
//       setIsSent(true);
//     } catch (err) {
//       console.error("Error sending response:", err);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-100 to-green-300 p-4">
//       <div className="flex flex-col items-center text-center gap-6 w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg">

//         <div className="tenor-gif-embed rounded-lg w-full max-w-[220px] h-auto" data-postid="253027946666209433" data-share-method="host" data-aspect-ratio="1.37853" data-width="100%">
//           <a href="https://tenor.com/view/mochi-cat-mochi-and-goma-goma-and-peach-mochi-mochi-peach-cat-gif-gif-253027946666209433">Mochi Cat GIF</a> from <a href="https://tenor.com/search/mochi-gifs">Mochi GIFs</a>
//         </div>

//         <h1 className="text-3xl font-bold">Hehehehe, I knew it! Love you a lot 😘</h1>

//         {!isSent ? (
//           <div className="w-full flex flex-col gap-3">
//             <textarea
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
//               placeholder="Want to send him a sweet note? (Optional)"
//               rows="3"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//             <button
//               onClick={handleSendResponse}
//               className="bg-green-500 text-white py-2 px-6 rounded-full font-bold hover:bg-green-600 transition-colors"
//             >
//               Send Message 💖
//             </button>
//           </div>
//         ) : (
//           <div className="text-green-600 font-bold animate-pulse">
//             Your message has been sent to him! 💌
//           </div>
//         )}

//         <div className="fixed bottom-2 right-4 text-sm font-bold text-black/70">
//           Srijon 💖
//         </div>
//       </div>
//     </div>
//   );
// }

// =================
// src/pages/Yes.jsx
import React, { useEffect, useState } from "react";
import { sendGirlfriendResponse } from "../api/userApi"; // Ensure this matches your API file

export default function Yes() {
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  // const handleSendResponse = async () => {
  //   // Retrieve the IDs stored by the Propose page
  //   const username = localStorage.getItem("bf_username");
  //   const gfId = localStorage.getItem("gf_id");

  //   if (!username || !gfId) return;

  //   try {
  //     // Send the response to the backend
  //     await sendGirlfriendResponse(username, gfId, message);
  //     setIsSent(true);
  //   } catch (err) {
  //     console.error("Error sending response:", err);
  //   }
  // };

  const handleSendResponse = async () => {
    const username = localStorage.getItem("bf_username");
    const gfId = localStorage.getItem("gf_id");

    if (!username || !gfId) return;

    try {
      setLoading(true);
      await sendGirlfriendResponse(username, gfId, message);
      setIsSent(true);
    } catch (err) {
      console.error("Error sending response:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-100 to-green-300 p-4">
      <div className="flex flex-col items-center text-center gap-6 w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg">
        <div
          className="tenor-gif-embed rounded-lg w-full max-w-[220px] h-auto"
          data-postid="253027946666209433"
          data-share-method="host"
          data-aspect-ratio="1.37853"
          data-width="100%"
        >
          <a href="https://tenor.com/view/mochi-cat-mochi-and-goma-goma-and-peach-mochi-mochi-peach-cat-gif-gif-253027946666209433">
            Mochi Cat GIF
          </a>{" "}
          from <a href="https://tenor.com/search/mochi-gifs">Mochi GIFs</a>
        </div>

        <h1 className="text-3xl font-bold">
          Hehehehe, I knew it! Love you a lot 😘
        </h1>

        {!isSent ? (
          <div className="w-full flex flex-col gap-3">
            <textarea
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none text-black"
              placeholder="Want to send him a sweet note? (Optional)"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {/* <button
              onClick={handleSendResponse}
              className="bg-green-500 text-white py-2 px-6 rounded-full font-bold hover:bg-green-600 transition-colors"
            >
              Send Message 💖
            </button> */}
            <button
              onClick={handleSendResponse}
              disabled={loading}
              className={`py-2 px-6 rounded-full font-bold transition-all
    ${
      loading
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-green-500 hover:bg-green-600 cursor-pointer active:scale-95"
    }
    text-white
  `}
            >
              {loading ? "Sending..." : "Send Message 💖"}
            </button>
          </div>
        ) : (
          <div className="text-green-600 font-bold animate-pulse">
            Your message has been sent to him! 💌
          </div>
        )}

        <div className="fixed bottom-2 right-4 text-sm font-bold text-black/70">
          Srijon 💖
        </div>
      </div>
    </div>
  );
}
