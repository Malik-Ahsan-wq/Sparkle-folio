"use client";

import { X, ArrowUpRight, Sparkles, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Syne:wght@600;700&display=swap');

        .announcement-bar {
          font-family: 'DM Sans', sans-serif;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10000;
          background: #0a0a0f;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
        }

        .announcement-bar::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(99, 102, 241, 0.08) 30%,
            rgba(168, 85, 247, 0.08) 60%,
            transparent 100%
          );
          pointer-events: none;
        }

        /* Subtle animated shimmer line at bottom */
        .announcement-bar::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -100%;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(139, 92, 246, 0.6),
            rgba(99, 102, 241, 0.8),
            rgba(139, 92, 246, 0.6),
            transparent
          );
          animation: shimmer-line 4s linear infinite;
        }

        @keyframes shimmer-line {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .bar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 28px 20px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        /* Left badge */
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.25);
          border-radius: 20px;
          padding: 3px 10px 3px 8px;
          flex-shrink: 0;
        }

        .badge-dot {
          position: relative;
          width: 6px;
          height: 6px;
          flex-shrink: 0;
        }

        .badge-dot span {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #818cf8;
        }

        .badge-dot span:first-child {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
          background: rgba(129, 140, 248, 0.5);
        }

        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }

        .badge-text {
          font-family: 'Syne', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #a5b4fc;
        }

        /* Center message */
        .message-center {
          display: flex;
          align-items: center;
          gap: 10px;
          flex: 1;
          justify-content: center;
          min-width: 0;
        }

        .message-icon {
          color: #fbbf24;
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .message-text {
          font-size: 13.5px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          letter-spacing: -0.01em;
        }

        .message-text strong {
          color: #fff;
          font-weight: 600;
        }

        .tools-chips {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }

        .chip {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 4px;
          padding: 2px 7px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          font-family: 'Syne', sans-serif;
        }

        /* CTA link */
        .cta-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: #fff;
          font-size: 12.5px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 6px;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          letter-spacing: -0.01em;
          transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.4), 0 2px 8px rgba(99, 102, 241, 0.3);
        }

        .cta-link:hover {
          opacity: 0.92;
          transform: translateY(-1px);
          box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.5), 0 4px 16px rgba(99, 102, 241, 0.4);
        }

        .cta-link svg {
          transition: transform 0.2s;
        }

        .cta-link:hover svg {
          transform: translate(1px, -1px);
        }

        /* Close button */
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.35);
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          flex-shrink: 0;
          transition: color 0.2s, background 0.2s;
        }

        .close-btn:hover {
          color: rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.07);
        }

        /* Divider */
        .divider {
          width: 1px;
          height: 16px;
          background: rgba(255,255,255,0.1);
          flex-shrink: 0;
        }

        /* ── Responsive ── */

        /* Hide chips below 860px */
        @media (max-width: 860px) {
          .tools-chips { display: none; }
          .message-text { font-size: 13px; }
        }

        /* Compact on mobile */
        @media (max-width: 600px) {
          .bar-inner {
            height: 40px;
            padding: 20 12px;
            gap: 8px;
          }
          .badge { display: none; }
          .message-icon { display: none; }
          .message-text { font-size: 12.5px; }
          .cta-link {
            font-size: 12px;
            padding: 5px 10px;
            gap: 4px;
          }
        }

        /* Very small screens: shorten message */
        @media (max-width: 400px) {
          .full-message { display: none; }
          .short-message { display: inline !important; }
        }
        .short-message { display: none; }
      `}</style>

      <div className="announcement-bar" role="banner" aria-label="Site announcement">
        <div className="bar-inner">

          {/* Left: Live badge */}
          <div className="badge" aria-hidden="true">
            <div className="badge-dot">
              <span />
              <span />
            </div>
            <span className="badge-text">New</span>
          </div>

          {/* Center: Message + tool chips */}
          <div className="message-center">
            <span className="message-icon" aria-hidden="true">
              <Zap size={14} fill="currentColor" />
            </span>
            <span className="message-text">
              <span className="full-message">
                <strong>Professional Tools</strong> — QR Generator, SEO Analyzer & Bio Builder
              </span>
              <span className="short-message">
                <strong>Pro Tools</strong> — QR · SEO · Bio
              </span>
            </span>
            <div className="tools-chips" aria-hidden="true">
              <span className="chip">QR Gen</span>
              <span className="chip">SEO</span>
              <span className="chip">Bio</span>
            </div>
          </div>

          {/* Right: CTA + divider + close */}
          <Link
            href="https://tools.websolave.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-link"
            aria-label="Visit tools.websolave.com (opens in new tab)"
          >
            <span>Visit Now</span>
            <ArrowUpRight size={13} />
          </Link>

          <div className="divider" aria-hidden="true" />

          {/* <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss announcement"
            className="close-btn"
          >
            <X size={15} />
          </button> */}

        </div>
      </div>
    </>
  );
}