import React from "react";

export default function IPhoneChat() {
  return (
    <div className="phone iphone">
      <div className="phone-frame">
        {/* Notch */}
        <div className="notch">
          <div className="notch-camera"></div>
          <div className="notch-speaker"></div>
        </div>

        {/* Status Bar */}
        <div className="status-bar">
          <div className="time" id="timer1">9:43</div>
          <div className="status-icons">
            <div className="signal-icon"></div>
            <div className="wifi-icon"></div>
            <div className="battery-icon"></div>
          </div>
        </div>

        {/* Chat App */}
        <div className="chat-app">
          {/* Header */}
          <div className="chat-header">
            <div className="back-button">
              <div className="back-arrow"></div>
            </div>
            <div className="user-info">
              <div className="avatar">
                <img
                  src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740"
                  alt="User Avatar"
                />
                <div className="online-indicator"></div>
              </div>
              <div className="user-details">
                <div className="user-name">Sarah Johnson</div>
                <div className="user-status">
                  <div className="status-dot"></div>
                  <span>Online</span>
                </div>
              </div>
            </div>
            <div className="header-actions">
              <div className="video-call-icon"></div>
              <div className="call-icon"></div>
            </div>
          </div>

          {/* Messages */}
          <div className="chat-messages" id="iphone-container">
            <div className="message-wallpaper"></div>
            <div className="message-date">Today</div>
            <div className="message received">
              <div className="message-content">Hey! How's your day going? 😊</div>
              <div className="message-time">10:23 AM</div>
            </div>
            <div className="message sent">
              <p className="message-content">Not yet! Is it anygu good?</p>
              <span className="message-time">9:18 AM</span>
            </div>
          </div>

          {/* Input */}
          <div className="chat-input">
            <div className="attachment-button">
              <div className="plus-icon"></div>
            </div>
            <div className="message-input">
              <input type="text" placeholder="Message" id="appleinput" />
            </div>
            <div className="send-button">
              <div className="send-icon"></div>
            </div>
          </div>

          <div className="home-indicator"></div>
        </div>
      </div>
    </div>
  );
}
