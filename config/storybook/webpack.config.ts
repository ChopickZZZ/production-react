import { type BuildPaths } from "../build/types/config";
import { type RuleSetRule } from "webpack";
import type webpack from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import path from "path";

export default function ({ config }: { config: webpack.Configuration }) {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push("ts", "tsx");

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });
  config.module.rules.push(buildCssLoader(true));

  return config;
}
