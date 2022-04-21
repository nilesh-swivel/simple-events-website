import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [resp, setResp] = useState(null);

  const getEvents = async () => {
    const reply = await axios.get("http://localhost:4000/event");
    setResp(reply.data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    console.log("resp", resp);
  }, [resp]);
  return (
    <div>
      <h1>Popular Groups</h1>
      <h2>Upcoming Events</h2>

      <div>
        {resp &&
          resp.map((event) => (
            <div key={event._id}>
              <h3>{event.name}</h3>
              <p>{event.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
