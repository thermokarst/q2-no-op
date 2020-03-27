const core = require('@actions/core');
const exec = require('@actions/exec');
const conda = require('action-setup-conda')

try {
  exec.exec('echo "hello world"');
  exec.exec('conda info')

} catch (error) {
  core.setFailed(error.message);
}