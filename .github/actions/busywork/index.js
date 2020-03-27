const core = require('@actions/core');
const exec = require('@actions/exec');


try {
  const opts = {cwd: '.github/actions/busywork'};

  core.startGroup('install miniconda')
  exec.exec('./install_miniconda.sh', [], opts)
  // TODO: how to error if the exec above fails?
  core.endGroup()

  core.startGroup('verify install')
  exec.exec('conda info');
  core.endGroup()

} catch (error) {
  core.setFailed(error.message);
}