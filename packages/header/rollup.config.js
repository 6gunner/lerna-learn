import typescript from "rollup-plugin-typescript2";

export default {
  input: ["src/index.tsx"],
  output: [
    {
      dir: "dist",
      entryFileName: "[name].js",
      format: "cjs",
      exports: "named", // ?
    },
  ],
  plugins: [typescript()],
  external: ["react"], // 作为外部依赖
};
