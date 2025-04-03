import "./styles/App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Header />
      <NavBar />

      <main>
        <section id="about">
          <h2>About the Event</h2>
          <p>
            FutureTech Summit 2025 is the premier gathering for technology
            enthusiasts, industry leaders, and researchers. This event will
            showcase the latest advancements in AI, blockchain, cybersecurity,
            and more. Attendees will gain insights from world-class speakers,
            participate in hands-on workshops, and network with like-minded
            professionals.
          </p>
        </section>

        <section id="schedule">
          <h2>Event Schedule</h2>
          <table>
            <tr>
              <th>Time</th>
              <th>Session</th>
              <th>Speaker</th>
            </tr>
            <tr>
              <td>08:30 AM - 09:00 AM</td>
              <td>Registration & Welcome Coffee</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>09:00 AM - 10:00 AM</td>
              <td>Keynote Address: "The Future of AI"</td>
              <td>Alex Carter</td>
            </tr>
            <tr>
              <td>10:00 AM - 10:30 AM</td>
              <td>Networking Break</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>10:30 AM - 12:00 PM</td>
              <td>Panel Discussion: "Cybersecurity in the Digital Age"</td>
              <td>Sophia Green</td>
            </tr>
            <tr>
              <td>12:00 PM - 01:00 PM</td>
              <td>Lunch Break</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>01:00 PM - 02:30 PM</td>
              <td>Workshop: "Blockchain for Business"</td>
              <td>Mark Reynolds</td>
            </tr>
            <tr>
              <td>02:30 PM - 03:00 PM</td>
              <td>Coffee Break</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>03:00 PM - 04:30 PM</td>
              <td>Fireside Chat: "Ethics in AI Development"</td>
              <td>Daniel Cho</td>
            </tr>
            <tr>
              <td>04:30 PM - 05:00 PM</td>
              <td>Closing Remarks & Q&A</td>
              <td>N/A</td>
            </tr>
          </table>
        </section>

        <section id="speakers">
          <h2>Meet the Speakers</h2>
          <ul>
            <li>
              <span>Dr. Alex Carter</span> – AI Researcher & Futurist
            </li>
            <li>
              <span>Ms. Sophia Green</span> – CEO of CyberDefend Ltd.
            </li>
            <li>
              <span>Mr. Mark Reynolds</span> – Blockchain Strategist
            </li>
            <li>
              <span>Mr. Daniel Cho</span> – Founder of Ethical AI Initiative
            </li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <form action="#">
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
