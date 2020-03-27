const core = require('@actions/core');
const exec = require('@actions/exec');


try {
  exec.exec('./doit.sh')
} catch (error) {
  core.setFailed(error.message);
}