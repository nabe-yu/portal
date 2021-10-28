import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    base: "./",
    build: {
        target: "esnext",
        lib: {
            fileName: "mod",
            formats: ["es"],
            entry: path.join(__dirname, "src/mod.ts"),
        },
    },
});