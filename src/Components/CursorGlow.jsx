import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const dot = document.createElement("div");

    dot.className = "cursor-glow-dot";

    document.body.appendChild(dot);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let dotX = mouseX;
    let dotY = mouseY;

    let animationFrame;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      dotX += (mouseX - dotX) * 0.25;
      dotY += (mouseY - dotY) * 0.25;

      dot.style.transform = `
        translate3d(
          ${dotX - 7}px,
          ${dotY - 7}px,
          0
        )
      `;

      animationFrame =
        requestAnimationFrame(animate);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    animate();

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(animationFrame);

      dot.remove();

      document.body.classList.remove(
        "project-cursor-active"
      );
    };
  }, []);

  return null;
}