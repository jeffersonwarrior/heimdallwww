import "@testing-library/jest-dom/vitest";
import React from "react";
// Ensure React is available globally for components compiled with classic JSX runtime
// This avoids "React is not defined" in tests if a file wasn’t compiled with automatic runtime
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).React = React;
