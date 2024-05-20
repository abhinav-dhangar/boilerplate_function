import { coreService } from "./src/core";
import ora, { Ora } from "ora";
import chalk from "chalk";

const spinner: Ora = ora(chalk.bgWhite.magenta("loading")).start();
spinner.color = "red";
coreService()
  .then((res) => {
    spinner.succeed(
      chalk.bold.inverse.underline("Core service loaded successfully")
    );
  })
  .catch((err) => {
    spinner.fail("Core service failed to load");
    console.log(chalk.red(err));
  });
