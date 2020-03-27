const core = require('@actions/core');
const exec = require('@actions/exec');

try {
  exec.exec('echo "hello world"');
  exec.exec('wget',[
    '-o=foo',
    'https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh',
  ])
} catch (error) {
  core.setFailed(error.message);
}