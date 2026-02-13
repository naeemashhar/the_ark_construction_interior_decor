"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isMobile, setIsMobile] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false); // For click states

    // Mouse position state
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring animation for the follower ring
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Check if device is mobile
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        if (!isMobile) {
            const moveCursor = (e: MouseEvent) => {
                cursorX.set(e.clientX);
                cursorY.set(e.clientY);
            };

            const handleMouseOver = (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                const isInteractive =
                    target.tagName === "A" ||
                    target.tagName === "BUTTON" ||
                    target.closest("a") ||
                    target.closest("button") ||
                    target.dataset.cursor === "hover" ||
                    window.getComputedStyle(target).cursor === "pointer";

                setIsHovered(!!isInteractive);
            };

            const handleMouseDown = () => setIsActive(true);
            const handleMouseUp = () => setIsActive(false);

            window.addEventListener("mousemove", moveCursor);
            window.addEventListener("mouseover", handleMouseOver);
            window.addEventListener("mousedown", handleMouseDown);
            window.addEventListener("mouseup", handleMouseUp);

            return () => {
                window.removeEventListener("resize", checkMobile);
                window.removeEventListener("mousemove", moveCursor);
                window.removeEventListener("mouseover", handleMouseOver);
                window.removeEventListener("mousedown", handleMouseDown);
                window.removeEventListener("mouseup", handleMouseUp);
            };
        }

        return () => window.removeEventListener("resize", checkMobile);
    }, [cursorX, cursorY, isMobile]);

    if (isMobile) return null;

    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none mix-blend-difference">
            {/* Center Dot - Immediate Follow */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full bg-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Outer Ring - Smooth Follow */}
            <motion.div
                className="fixed top-0 left-0 border border-white rounded-full"
                animate={{
                    width: isHovered ? 64 : isActive ? 24 : 32,
                    height: isHovered ? 64 : isActive ? 24 : 32,
                    opacity: isHovered ? 0.8 : isActive ? 1 : 0.5,
                    backgroundColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "transparent",
                    scale: isActive ? 0.9 : 1
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 28,
                    mass: 0.5
                }}
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </div>
    );
}
