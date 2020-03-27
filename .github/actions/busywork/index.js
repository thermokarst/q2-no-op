const core = require('@actions/core');
const exec = require('@actions/exec');


async function main() {
  try {
    const opts = {cwd: '.github/actions/busywork'};

    await exec.exec('./install_miniconda.sh', [], opts)
    // TODO: how to error if the exec above fails?

    // CWD: source root
    await exec.exec('./build_package.sh', [])
    // TODO: how to error if the exec above fails?

  } catch (error) {
    core.setFailed(error.message);
  }
}

main();