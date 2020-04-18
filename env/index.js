import base from "./base";
import production from "./production";
import development from "./development";

const envConfig = {
  production,
  development,
};

export default Object.assign(base, envConfig[process.env.NODE_ENV]);
