const core = require('@actions/core');
const exec = require('@actions/exec');

try {
    await exec.exec('echo "hello world"');
} catch (error) {
  core.setFailed(error.message);
}