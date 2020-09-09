# ----------------------------------------------------------------------------
# Copyright (c) 2020, QIIME 2 development team.
#
# Distributed under the terms of the Modified BSD License.
#
# The full license is in the file LICENSE, distributed with this software.
# ----------------------------------------------------------------------------

from setuptools import setup, find_packages

setup(
    name="q2-no-op",
    version="0.0.2",
    packages=find_packages(),
    author="Matthew Ryan Dillon",
    author_email="matthewrdillon@gmail.com",
    url="https://qiime2.org",
    license="BSD-3-Clause",
    description="GitHub Action Workflow Testing",
    entry_points={
        "qiime2.plugins":
        ["q2-no-op=q2_no_op.plugin_setup:plugin"]
    },
    package_data={},
    zip_safe=False,
)
