const core = require('@actions/core');
const exec = require('@actions/exec');


try {
  const opts = {cwd: '.github/actions/busywork'};

  exec.exec('./install_miniconda.sh', [], opts)
  // TODO: how to error if the exec above fails?

  exec.exec('./build_package.sh', [], opts)
  // TODO: how to error if the exec above fails?

} catch (error) {
  core.setFailed(error.message);
}