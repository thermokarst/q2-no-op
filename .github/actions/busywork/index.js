const core = require('@actions/core');
const exec = require('@actions/exec');


try {
  const opts = {cwd: '.github/actions/busywork'};
  exec.exec('./install_miniconda.sh', [], opts)
  // TODO: how to error if the exec above fails?
  exec.exec('conda info');
} catch (error) {
  core.setFailed(error.message);
}