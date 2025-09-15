"use client";

import { useState, useEffect } from "react";
import { FaSignal } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { CiBatteryFull } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
export default function IPhoneChat() {
  const [currentTime, setCurrentTime] = useState("");
  const [input, setInput] = useState("");
  const [iphoneSent, setIphoneSent] = useState(
    JSON.parse(localStorage.getItem("iphone")) || []
  );
  const [recive, setRecive] = useState([]);
  useEffect(() => {
    let get = JSON.parse(localStorage.getItem("iphone")) || [];
    setRecive(get);
  }, []);
  const handlesend = () => {
    if (input.trim() == "") return;
    let updated = [...iphoneSent, input];
    setIphoneSent(updated);
    setInput("");
    localStorage.setItem("iphone", JSON.stringify(updated));
  };
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: false,
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="phone iphone">
      <div className="phone-frame">
        <div className="notch">
          <div className="notch-camera"></div>
          <div className="notch-speaker"></div>
        </div>

        <div className="status-bar">
          <div className="time" id="timer1">
            {currentTime || "9:43"}
          </div>
          <div className="status-icons">
            <div className="signal-icon">
              <FaSignal />
            </div>
            <div className="wifi-icon">
              <FaWifi />
            </div>
            <div className="battery-icon">
              <CiBatteryFull />
            </div>
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
                <img src="/professional-woman-avatar.png" alt="User Avatar" />
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
              <div className="video-call-icon"><IoVideocam color="white" /></div>
              <div className="call-icon"><IoIosCall  color="white"/>
</div>
            </div>
          </div>

          {/* Messages */}
          <div className="chat-messages" id="iphone-container">
            <div className="message-wallpaper"></div>
            <div className="message-date">Today</div>
            {recive.map((e,i) => {
              return (
                <div className="message received" key={i}>
                  <div className="message-content"> {e}</div>
                  <div className="message-time">10:23 AM</div>
                </div>
              );
            })}

            {iphoneSent.map((e,i) => {
              return (
                <div className="message sent" key={i}>
                  <div className="message-content">{e}</div>
                  <div className="message-time">{currentTime}</div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Input */}
          <div className="chat-input">
            <div className="attachment-button">
              <div className="plus-icon"><FaPlus /></div>
            </div>
            <div className="message-input">
              <input
                type="text"
                placeholder="Message"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                id="appleinput"
              />
            </div>
            <button className="send-button" onClick={handlesend}>
              <div className="send-icon">
                <IoMdSend />
              </div>
            </button>
          </div>

          <div className="home-indicator"></div>
        </div>
      </div>
    </div>
  );
}
