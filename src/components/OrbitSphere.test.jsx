import { render, screen, fireEvent } from "@testing-library/react";
import OrbitSphere, { projectPoint } from "./OrbitSphere";
import OutsideWork from "./OutsideWork";
import "@testing-library/jest-dom";
beforeEach(() => {
  window.matchMedia = () => ({
    matches: true,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  });
  global.ResizeObserver = class {
    observe() {}
    disconnect() {}
  };
  Object.defineProperty(HTMLElement.prototype, "clientWidth", {
    configurable: true,
    get: () => 400,
  });
  Object.defineProperty(HTMLElement.prototype, "clientHeight", {
    configurable: true,
    get: () => 400,
  });
  global.IntersectionObserver = class {
    observe() {}
    disconnect() {}
  };
});
test("sphere projection moves a front point behind the globe after a half turn", () => {
  expect(projectPoint({ lon: 0, lat: 0 }, { x: 0, y: 0 }).z).toBeCloseTo(1);
  expect(projectPoint({ lon: 0, lat: 0 }, { x: 0, y: Math.PI }).z).toBeCloseTo(
    -1,
  );
  expect(
    projectPoint({ lon: 0, lat: 0 }, { x: 0, y: Math.PI / 2 }).x,
  ).toBeCloseTo(1);
});
test("keyboard moves cards and reset restores their initial position", () => {
  render(<OrbitSphere />);
  const card = screen.getByRole("button", { name: /Product & engineering/ });
  const original = card.style.transform;
  fireEvent.keyDown(card, { key: "ArrowRight" });
  expect(card.style.transform).not.toBe(original);
  fireEvent.click(screen.getByRole("button", { name: "Reset sphere" }));
  expect(card.style.transform).toBe(original);
  expect(screen.getByRole("button", { name: "Play rotation" })).toBeDisabled();
});
test("photography supports manual navigation with reduced motion", () => {
  render(<OutsideWork />);
  const first = screen
    .getByAltText("Illustrated mountain landscape placeholder")
    .closest("figure");
  expect(first).toHaveAttribute("aria-hidden", "false");
  fireEvent.click(screen.getByRole("button", { name: "Next photograph" }));
  expect(first).toHaveAttribute("aria-hidden", "true");
  expect(
    screen
      .getByAltText("Illustrated architectural geometry placeholder")
      .closest("figure"),
  ).toHaveAttribute("aria-hidden", "false");
  fireEvent.click(screen.getByRole("button", { name: "Previous photograph" }));
  expect(first).toHaveAttribute("aria-hidden", "false");
});

test("pointer dragging changes a card position without moving its peers", () => {
  window.PointerEvent = MouseEvent;
  HTMLElement.prototype.setPointerCapture = jest.fn();
  HTMLElement.prototype.hasPointerCapture = jest.fn(() => false);
  render(<OrbitSphere />);
  const card = screen.getByRole("button", { name: /Product & engineering/ });
  const peer = screen.getByRole("button", { name: /Computer Science/ });
  const before = card.style.transform;
  const peerBefore = peer.style.transform;
  fireEvent.pointerDown(card, {
    button: 0,
    clientX: 100,
    clientY: 100,
    pointerId: 1,
  });
  fireEvent.pointerMove(card, { clientX: 160, clientY: 130, pointerId: 1 });
  fireEvent.pointerUp(card, { pointerId: 1 });
  expect(card.style.transform).not.toBe(before);
  expect(peer.style.transform).toBe(peerBefore);
});
