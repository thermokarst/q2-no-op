# ----------------------------------------------------------------------------
# Copyright (c) 2020, QIIME 2 development team.
#
# Distributed under the terms of the Modified BSD License.
#
# The full license is in the file LICENSE, distributed with this software.
# ----------------------------------------------------------------------------

from unittest import TestCase

from q2_no_op.plugin_setup import plugin


class PluginTests(TestCase):
    def test_plugin(self):
        self.assertEqual(plugin.name, 'no-op')
