# ----------------------------------------------------------------------------
# Copyright (c) 2020, QIIME 2 development team.
#
# Distributed under the terms of the Modified BSD License.
#
# The full license is in the file LICENSE, distributed with this software.
# ----------------------------------------------------------------------------

import qiime2.plugin


plugin = qiime2.plugin.Plugin(
    name='no-op',
    version='0.0.1',
    website='https://github.com/thermokarst/q2-no-op',
    package='q2_no_op',
    user_support_text=None,
    citation_text=None,
    description='This QIIME 2 plugin does nothing.',
    short_description='Plugin for doing nothing',
)