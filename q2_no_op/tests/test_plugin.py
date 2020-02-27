from unittest import TestCase

from q2_no_op.plugin_setup import plugin


class PluginTests(TestCase):
    def test_plugin(self):
        self.assertEqual(plugin.name, 'no-op')