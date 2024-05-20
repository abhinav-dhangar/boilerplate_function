import path from "path";

export const coreService = async () => {
  const pathToAnything = path.join(__dirname, "anything");
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return pathToAnything;
};
