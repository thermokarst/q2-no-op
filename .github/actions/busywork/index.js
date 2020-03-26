const core = require('@actions/core');
const exec = require('@actions/exec');

try {
  exec.exec('echo "hello world"');
} catch (error) {
  core.setFailed(error.message);
}