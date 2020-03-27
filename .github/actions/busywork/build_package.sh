#!/usr/bin/env bash

set -e +v


conda build \
  -c conda-forge \
  -c bioconda \
  -c qiime2 \
  -c defaults \
  --override-channels \
  --output-folder ../package \
  ci/recipe