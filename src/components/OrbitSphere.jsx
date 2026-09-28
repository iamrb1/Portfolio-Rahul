import { memo, useEffect, useRef, useState } from "react";
import {
  HiOutlinePause,
  HiOutlinePlay,
  HiOutlineRefresh,
} from "react-icons/hi";

import useAnimationActivity from "../hooks/useAnimationActivity";

const cards = [
  {
    title: "Product & engineering",
    sub: "Ford Motor Company",
  },
  {
    title: "Computer Science",
    sub: "Michigan State · 2025",
  },
  { title: "Embedded systems", sub: "Acsia Technologies" },
  {
    title: "Software engineering",
    sub: "Ford Motor Company",
  },
];
const initial = [
  { lon: -0.85, lat: -0.5 },
  { lon: 0.9, lat: -0.38 },
  { lon: -1.05, lat: 0.55 },
  { lon: 1.0, lat: 0.62 },
];
export function projectPoint(point, rotation) {
  const x = Math.sin(point.lon) * Math.cos(point.lat);
  const y = Math.sin(point.lat);
  const z = Math.cos(point.lon) * Math.cos(point.lat);
  const rx = x * Math.cos(rotation.y) + z * Math.sin(rotation.y);
  const rz = z * Math.cos(rotation.y) - x * Math.sin(rotation.y);
  const ry = y * Math.cos(rotation.x) - rz * Math.sin(rotation.x);
  const depth = y * Math.sin(rotation.x) + rz * Math.cos(rotation.x);
  return { x: rx, y: ry, z: depth, scale: 0.8 + (depth + 1) * 0.12 };
}
function OrbitSphere() {
  const scene = useRef(null);
  const drag = useRef(null);
  const rotation = useRef({ x: 0, y: 0 });
  const points = useRef(initial.map((p) => ({ ...p })));
  const cardRefs = useRef([]);
  const globe = useRef(null);
  const [paused, setPaused] = useState(false);
  const { running, reduced } = useAnimationActivity(scene);
  const size = useRef({ width: 0, height: 0 });
  const [active, setActive] = useState(false);

  const paint = () => {
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const point = projectPoint(points.current[i], rotation.current);
      const x = point.x * size.current.width * 0.35;
      const y = point.y * size.current.height * 0.35;
      el.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${point.scale})`;
      el.style.zIndex = point.z < 0 ? 1 : 5 + Math.round(point.z * 10);
      el.style.opacity = point.z < 0 ? 0.45 : 1;
    });
    if (globe.current)
      globe.current.style.transform = `rotateX(${rotation.current.x}rad) rotateY(${rotation.current.y}rad)`;
  };
  useEffect(() => {
    const resize = () => {
      size.current = {
        width: scene.current.clientWidth,
        height: scene.current.clientHeight,
      };
      paint();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(scene.current);
    resize();
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (paused || active || !running) return;
    let frame, last;
    const tick = (time) => {
      if (last && !document.hidden && !drag.current) {
        rotation.current.y += Math.min(time - last, 32) * 0.00009;
        paint();
      }
      last = time;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused, active, running]);
  const start = (e, index) => {
    if (e.button !== 0) return;
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { index, x: e.clientX, y: e.clientY };
    setActive(true);
  };
  const move = (e) => {
    if (!drag.current) return;
    const d = drag.current,
      dx = (e.clientX - d.x) * 0.007,
      dy = (e.clientY - d.y) * 0.007;
    if (d.index === -1) {
      rotation.current.y += dx;
      rotation.current.x = Math.max(
        -1.2,
        Math.min(1.2, rotation.current.x - dy),
      );
    } else {
      points.current[d.index].lon += dx;
      points.current[d.index].lat = Math.max(
        -1.2,
        Math.min(1.2, points.current[d.index].lat + dy),
      );
    }
    d.x = e.clientX;
    d.y = e.clientY;
    paint();
  };
  const finish = (e) => {
    drag.current = null;
    if (e.currentTarget.hasPointerCapture(e.pointerId))
      e.currentTarget.releasePointerCapture(e.pointerId);
    setActive(false);
  };
  const key = (e, index) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key))
      return;
    e.preventDefault();
    setPaused(true);
    const dx =
      e.key === "ArrowLeft" ? -0.12 : e.key === "ArrowRight" ? 0.12 : 0;
    const dy = e.key === "ArrowUp" ? -0.12 : e.key === "ArrowDown" ? 0.12 : 0;
    if (index === -1) {
      rotation.current.y += dx;
      rotation.current.x -= dy;
    } else {
      points.current[index].lon += dx;
      points.current[index].lat = Math.max(
        -1.2,
        Math.min(1.2, points.current[index].lat + dy),
      );
    }
    paint();
  };
  return (
    <div className="orbit-module">
      <div className="orbit-caption">Experience & education</div>
      <div
        className="orbit-scene"
        ref={scene}
        onPointerMove={move}
        onPointerUp={finish}
        onPointerCancel={finish}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => {
          if (!drag.current) setActive(false);
        }}
        onFocus={() => setActive(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setActive(false);
        }}
      >
        <button
          className="sphere-hit"
          aria-label="Rotate sphere. Use arrow keys or drag."
          onPointerDown={(e) => start(e, -1)}
          onKeyDown={(e) => key(e, -1)}
        >
          <span className="sphere-grid" ref={globe}>
            {[0, 30, 60, 90, 120, 150].map((angle) => (
              <span
                key={angle}
                className="meridian"
                style={{ transform: `rotateY(${angle}deg)` }}
              />
            ))}
            {[-55, -28, 0, 28, 55].map((angle) => (
              <span
                key={angle}
                className="latitude"
                style={{
                  transform: `translateY(${Math.sin((angle * Math.PI) / 180) * 128}px) rotateX(90deg) scale(${Math.cos((angle * Math.PI) / 180)})`,
                }}
              />
            ))}
          </span>
          <span className="sphere-core" aria-hidden="true">
            <span className="sphere-monogram">
              rb<span>.</span>
            </span>
          </span>
        </button>
        {cards.map((card, i) => (
          <button
            key={card.title}
            ref={(el) => (cardRefs.current[i] = el)}
            className="orbit-card"
            onPointerDown={(e) => start(e, i)}
            onKeyDown={(e) => key(e, i)}
            aria-label={`${card.title}, ${card.sub}. Drag or use arrow keys to reposition.`}
          >
            <span>
              <strong>{card.title}</strong>
              <small>{card.sub}</small>
            </span>
          </button>
        ))}
      </div>
      <div className="orbit-controls">
        <span>Drag the sphere or cards to rotate.</span>
        <button
          onClick={() => setPaused(!paused)}
          aria-label={paused ? "Play rotation" : "Pause rotation"}
          disabled={reduced}
        >
          {paused || reduced ? <HiOutlinePlay /> : <HiOutlinePause />}
        </button>
        <button
          aria-label="Reset sphere"
          onClick={() => {
            rotation.current = { x: 0, y: 0 };
            points.current = initial.map((p) => ({ ...p }));
            paint();
          }}
        >
          <HiOutlineRefresh />
        </button>
      </div>
    </div>
  );
}

export default memo(OrbitSphere);
