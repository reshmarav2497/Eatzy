import React from "react";

const Contact = () => {
  return (
    <div style={{ padding: 16, maxWidth: 900, margin: "0 auto" }}>
      <div style={{ background: "#f4f1f1", padding: 20, borderRadius: 12 }}>
        <h1 className="rest-name">Contact Us</h1>
        <p className="cuisineType">
          We'd love to hear from you — whether it's feedback, a feature request,
          or a bug report.
        </p>
      </div>

      <div
        style={{ display: "flex", gap: 20, marginTop: 20, flexWrap: "wrap" }}
      >
        <div style={{ flex: 1, minWidth: 300 }}>
          <form className="restDeatils" onSubmit={(e) => e.preventDefault()}>
            <label className="cuisineType" style={{ marginBottom: 6 }}>
              Name
            </label>
            <input
              className="search-input"
              style={{ width: "100%" }}
              placeholder="Your name"
            />

            <label className="cuisineType" style={{ marginTop: 10 }}>
              Email
            </label>
            <input
              className="search-input"
              style={{ width: "100%" }}
              placeholder="you@example.com"
            />

            <label className="cuisineType" style={{ marginTop: 10 }}>
              Message
            </label>
            <textarea
              className="search-input"
              style={{ width: "100%", minHeight: 120, resize: "vertical" }}
              placeholder="How can we help?"
            />

            <div style={{ marginTop: 12 }}>
              <button className="filter-btn">Send message</button>
            </div>
          </form>
        </div>

        <div style={{ width: 320 }}>
          <div
            style={{
              background: "#fff",
              padding: 16,
              borderRadius: 10,
              border: "1px solid #eee",
            }}
          >
            <h3 className="rest-name">Get in touch</h3>
            <p className="cuisineType">Email: hello@eatzy.example</p>
            <p className="cuisineType">Phone: +91 XXXXX 00000</p>
            <p className="cuisineType">Address: Bengaluru, India</p>
            <div style={{ marginTop: 10 }}>
              <h4 className="rest-name">Support hours</h4>
              <p className="cuisineType">Mon - Sun: 08:00 - 22:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
