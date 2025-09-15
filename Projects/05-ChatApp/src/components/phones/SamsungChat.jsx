"use client";

import { useState, useEffect } from "react";
import { FaSignal } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { CiBatteryFull } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
export default function SamsungChat() {
  const [currentTime, setCurrentTime] = useState("");
  const [recive, setRecive] = useState([]);
  const [input, setInput] = useState("");
  const [samsungSent, setSamsungSent] = useState(
    JSON.parse(localStorage.getItem("samsung")) || []
  );
  const handlesend = () => {
    if (input.trim() == "") return;
    let updated = [...samsungSent, input];
    setSamsungSent(updated);
    setInput("");
    localStorage.setItem("samsung", JSON.stringify(updated));
  };
  useEffect(() => {
    let get = JSON.parse(localStorage.getItem("iphone")) || [];
    setRecive(get);
  }, []);

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
    <div className="phone samsung">
      <div className="phone-frame">
        <div className="camera-cutout">
          <div className="camera-lens"></div>
        </div>

        <div className="status-bar">
          <div className="time" id="timer2">
            {currentTime || "9:41"}
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
          <div className="chat-header samsung-header">
            <div className="back-button">
              <div className="back-arrow"></div>
            </div>
            <div className="user-info">
              <div className="avatar">
                <img src="/professional-man-avatar.png" alt="User Avatar" />
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
              <div className="video-call-icon"><IoVideocam color="white" /></div>
              <div className="call-icon"><IoIosCall  color="white"/></div>
            </div>
          </div>

          {/* Messages */}
          <div className="chat-messages" id="samsung-container">
            <div className="message-wallpaper samsung-wallpaper"></div>
            <div className="message-date">Today</div>
            {recive.map((e,i) => {
              return (
                <div className="message received" key={i} >
                  <div className="message-content">{e}</div>
                  <div className="message-time">{currentTime}</div>
                </div>
              );
            })}
            {samsungSent.map((e,i) => {
              return (
                <div className="message sent" key={i}>
                  <div className="message-content">
                   {e}
                  </div>
                  <div className="message-time">9:18 AM</div>
                </div>
              );
            })}
          </div>

          {/* Input */}
          <div className="chat-input samsung-input">
            <div className="attachment-button">
              <div className="plus-icon"><FaPlus /></div>
            </div>
            <div className="message-input">
              <input
                type="text"
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message"
                id="samsunginput"
              />
            </div>
            <button onClick={handlesend} className="send-button">
              <div className="send-icon">
                <IoMdSend />
              </div>
            </button>
          </div>

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
