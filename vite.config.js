import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // React Compiler: auto-memoizes components and hooks at build time,
    // so manual useMemo / useCallback / React.memo are no longer needed.
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
});
