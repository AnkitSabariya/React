"use client";

import { useState} from "react";
import { FaSignal } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { CiBatteryFull } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import useTime from "../comon/Time"
export default function IPhoneChat() {
  const currentTime = useTime()
  const [input, setInput] = useState("");
  const [iphoneSent, setIphoneSent] = useState(
    JSON.parse(localStorage.getItem("chat")) || []
  );
 
  const handlesend = () => {
    if (input.trim() == "") return;
    let updated = [
      ...iphoneSent,
      { text: input, time: currentTime, sender: "iphone" },
    ];
    setIphoneSent(updated);
    setInput("");
    localStorage.setItem("chat", JSON.stringify(updated));
  };



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
                <img src="https://t4.ftcdn.net/jpg/12/49/12/63/360_F_1249126338_leS5yTD2NdGuTra86mGyq9heEAxLbX5O.jpg" alt="User Avatar" />
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
              <div className="video-call-icon">
                <IoVideocam color="white" />
              </div>
              <div className="call-icon">
                <IoIosCall color="white" />
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="chat-messages" id="iphone-container">
            <div className="message-wallpaper"></div>
            <div className="message-date">Today</div>
            {iphoneSent.map((e, i) => {
              return (
                <div
                  className={`message ${
                    e.sender === "iphone" ? "sent" : "received"
                  } `}
                  key={i}
                >
                  <div className="message-content"> {e.text}</div>
                  <div className="message-time">{e.time}</div>
                </div>
              );
            })}

           
          </div>

          {/* Enhanced Input */}
          <div className="chat-input">
            <div className="attachment-button">
              <div className="plus-icon">
                <FaPlus />
              </div>
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
