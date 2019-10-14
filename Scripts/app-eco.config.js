// Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/


//note: HFS IT EDIT HERE
// *****************************
const primary = true;
const version = "1.4.0.0";
const name = 'CacheManagementAPI';
const scriptName = "index.js";
// const scriptPath = `C:\\WIP\\SideBySidePOC\\App\\dist`;
const scriptPath = `K:\\be41\\AppVersions\\${version}\\dist`
const primaryEnvOverride = {
  APP_PORT: 1234,
  APP_OTHER_ENVIRONMENT_VARIABLE: "override value primary (from ecosystem file)",
  // APP_ANOTHER_ENVIRONMENT_VARIABLE: "choose to override (from ecosystem file)"
};

const secondaryEnvOverride = {
  APP_PORT: 2345,
  APP_OTHER_ENVIRONMENT_VARIABLE: "override value secondary (from ecosystem file)",
  // APP_ANOTHER_ENVIRONMENT_VARIABLE: "choose to override (from ecosystem file)"
};
// *****************************
//note: HFS IT END EDIT HERE



module.exports = {
  apps: [
    {
      name: `${name}_${primary ? "PRIMARY" : "SECONDARY"}_${version}`,
      script: `${scriptPath}\\${scriptName}`,
      instances: 1,
      autorestart: true,
      watch: false,
      error_file: `${scriptPath}\\err.log`,
      out_file: `${scriptPath}\\out.log`,
      pid_file: `${scriptPath}\\pm_id.pid`,
      merge_logs: false,
      env: primary ? primaryEnvOverride : secondaryEnvOverride
    }
  ]
};