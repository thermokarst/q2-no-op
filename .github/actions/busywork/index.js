const core = require('@actions/core');
const exec = require('@actions/exec');
const conda = require('action-setup-conda')

try {
  let minicondaVersion: string = '';
  let condaVersion: string = '';
  let condaBuildVersion: string = '';
  let pythonVersion: string = '';
  let activateEnvironment: string = 'test';
  let environmentFile: string = '';

  // Conda configuration
  let autoActivateBase: string = 'true';
  let autoUpdateConda: string = 'false';
  let condaFile: string = '';
  let channels: string = '';
  let removeProfiles: string =  'true';

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