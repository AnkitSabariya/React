import React from "react";

export default function SamsungChat() {
  return (
    <div className="phone samsung">
      <div className="phone-frame">
        {/* Camera Cutout */}
        <div className="camera-cutout">
          <div className="camera-lens"></div>
        </div>

        {/* Status Bar */}
        <div className="status-bar">
          <div className="time" id="timer2">9:41</div>
          <div className="status-icons">
            <div className="signal-icon"></div>
            <div className="wifi-icon"></div>
            <div className="battery-icon"></div>
          </div>
        </div>

        {/* Chat App */}
        <div className="chat-app">
          {/* Header */}
          <div className="chat-header samsung-header">
            <div className="back-button">
              <div className="back-arrow"></div>
            </div>
            <div className="user-info">
              <div className="avatar">
                <img
                  src="https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg"
                  alt="User Avatar"
                />
                <div className="online-indicator"></div>
              </div>
              <div className="user-details">
                <div className="user-name">Alex Chen</div>
                <div className="user-status">
                  <div className="status-dot"></div>
                  <span>Last seen 5m ago</span>
                </div>
              </div>
            </div>
            <div className="header-actions">
              <div className="video-call-icon"></div>
              <div className="call-icon"></div>
            </div>
          </div>

          {/* Messages */}
          <div className="chat-messages" id="samsung-container">
            <div className="message-wallpaper samsung-wallpaper"></div>
            <div className="message-date">Today</div>
            <div className="message received">
              <div className="message-content">
                Hey, did you check out that new restaurant downtown? 🍽️
              </div>
              <div className="message-time">9:15 AM</div>
            </div>
            <div className="message sent">
              <div className="message-content">Not yet! Is it any good?</div>
              <div className="message-time">9:18 AM</div>
            </div>
          </div>

          {/* Input */}
          <div className="chat-input samsung-input">
            <div className="attachment-button">
              <div className="plus-icon"></div>
            </div>
            <div className="message-input">
              <input type="text" placeholder="Message" id="samsunginput" />
            </div>
            <div className="send-button">
              <div className="send-icon"></div>
            </div>
          </div>

          {/* Navigation */}
          <div className="navigation-bar">
            <div className="nav-button"></div>
            <div className="nav-button"></div>
            <div className="nav-button"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
