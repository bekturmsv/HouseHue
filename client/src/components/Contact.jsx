import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = ({ listing }) => {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const response = await fetch(`/api/user/${listing.userRef}`).then(
          (res) => res.json()
        );

        setLandlord(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-bold">{landlord.username} </span>
            for <span className="font-bold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            value={message}
            onChange={handleMessage}
            name="message"
            id="message"
            rows="2"
            placeholder="Enter your message here!"
            className="w-full border p-3 rounded-lg"
          ></textarea>
          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
};

export default Contact;
