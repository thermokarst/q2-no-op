const core = require('@actions/core');
const exec = require('@actions/exec');


try {
  const opts = {cwd: '.github/actions/busywork'};
  exec.exec('./doit.sh', opts)
  // TODO: how to error if the exec above fails?
} catch (error) {
  core.setFailed(error.message);
}