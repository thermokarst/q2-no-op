import * as core from "@actions/core";
import * as exec from "@actions/exec";
import * as conda from 'action-setup-conda';

try {
  let minicondaVersion = '';
  let condaVersion = '';
  let condaBuildVersion = '';
  let pythonVersion = '';
  let activateEnvironment = 'test';
  let environmentFile = '';

  // Conda configuration
  let autoActivateBase = 'true';
  let autoUpdateConda = 'false';
  let condaFile = '';
  let channels = '';
  let removeProfiles =  'true';

  const condaConfig = {
    auto_activate_base: autoActivateBase,
    auto_update_conda: autoUpdateConda,
    channels: channels
  };

  const result = conda.setupMiniconda(
    minicondaVersion,
    "x64",
    condaVersion,
    condaBuildVersion,
    pythonVersion,
    activateEnvironment,
    environmentFile,
    condaFile,
    condaConfig,
    removeProfiles
  );
  if (!result["ok"]) {
    throw result["error"];
  }
} catch (err) {
  core.setFailed(err.message);
}

try {
  exec.exec('echo "hello world"');
  exec.exec('conda info')
} catch (error) {
  core.setFailed(error.message);
}