interface Config {
  port: number,
  other: string,
  another: string,
  environment: string
}

const defaultConfig: Config = {
  port: 1234,
  other: "config's value (from default config)",
  another: "another config's value (from default config)",
  environment: null
};

const omdevConfig: Partial<Config> = {
  environment: "omdev (from omdev config)"
};

const envMap = {
  port: "APP_PORT",
  other: "APP_OTHER_ENVIRONMENT_VARIABLE",
  another: "APP_ANOTHER_ENVIRONMENT_VARIABLE"
};

let envConfig: Partial<Config> = {};

for (const configKey in envMap) {
  const envKey = envMap[configKey];

  console.log(envKey, process.env.hasOwnProperty(envKey), configKey);

  if (process.env.hasOwnProperty(envKey)) {
    //note: may have to do some type conversions here for expected usage later
    // else everything will come through as a string

    switch (envKey) {
      case "APP_PORT":
        envConfig[configKey] = parseInt(process.env[envKey]);
        break;
      default:
        envConfig[configKey] = process.env[envKey];
        break;
    }
  }
}

const config: Config = {
  ...defaultConfig,
  ...omdevConfig,
  ...envConfig
};

export default config;