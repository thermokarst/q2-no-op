const core = require('@actions/core');
const exec = require('@actions/exec');


try {
  exec.exec('sh doit.sh')
} catch (error) {
  core.setFailed(error.message);
}