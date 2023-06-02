
/**
 * Kibana entry file
 *
 * This is programmatically created and updated, do not modify
 *
 * context: {
  "appExtensions": {
    "devTools": [
      "absolute:src/legacy/core_plugins/console/public/legacy",
      "absolute:x-pack/legacy/plugins/searchprofiler/public/legacy",
      "plugins/grokdebugger/register"
    ],
    "embeddableActions": [
      "plugins/reporting/panel_actions/get_csv_panel_action"
    ],
    "embeddableFactories": [
      "plugins/lens/legacy",
      "plugins/maps/embeddable/map_embeddable_factory"
    ],
    "fieldFormatEditors": [
      "ui/field_editor/components/field_format_editor/register"
    ],
    "hacks": [
      "absolute:src/legacy/core_plugins/input_control_vis/public/legacy",
      "absolute:src/legacy/core_plugins/region_map/public/legacy",
      "absolute:src/legacy/core_plugins/tile_map/public/legacy",
      "absolute:src/legacy/core_plugins/timelion/public/legacy",
      "absolute:src/legacy/core_plugins/vis_type_markdown/public/legacy",
      "absolute:src/legacy/core_plugins/vis_type_metric/public/legacy",
      "absolute:src/legacy/core_plugins/vis_type_table/public/legacy",
      "absolute:src/legacy/core_plugins/vis_type_tagcloud/public/legacy",
      "absolute:src/legacy/core_plugins/vis_type_timeseries/public/legacy",
      "absolute:src/legacy/core_plugins/vis_type_vega/public/legacy",
      "absolute:x-pack/legacy/plugins/kuery_autocomplete/public/legacy",
      "plugins/canvas/lib/window_error_handler.js",
      "plugins/kibana/dev_tools",
      "plugins/kibana/discover",
      "plugins/kibana/visualize",
      "plugins/ml/application/hacks/toggle_app_link_in_nav",
      "plugins/monitoring/hacks/toggle_app_link_in_nav",
      "plugins/security/hacks/on_session_timeout",
      "plugins/security/hacks/on_unauthorized_response",
      "plugins/security/hacks/register_account_management_app",
      "plugins/spaces/legacy",
      "plugins/telemetry/hacks/telemetry_init",
      "plugins/telemetry/hacks/telemetry_opt_in",
      "plugins/xpack_main/hacks/check_xpack_info_change"
    ],
    "home": [
      "plugins/apm/legacy_register_feature",
      "plugins/canvas/register_feature",
      "plugins/grokdebugger/register_feature",
      "plugins/infra/register_feature",
      "plugins/logstash/lib/register_home_feature",
      "plugins/maps/register_feature",
      "plugins/ml/register_feature",
      "plugins/monitoring/register_feature",
      "plugins/reporting/register_feature",
      "plugins/searchprofiler/register_feature",
      "plugins/security/register_feature",
      "plugins/siem/register_feature",
      "plugins/uptime/register_feature",
      "plugins/watcher/register_feature"
    ],
    "indexManagement": [
      "plugins/rollup/extend_index_management",
      "plugins/rollup/index_pattern_creation",
      "plugins/rollup/index_pattern_list"
    ],
    "inspectorViews": [
      "plugins/maps/inspector/views/register_views"
    ],
    "interpreter": [
      "plugins/canvas/browser_functions",
      "plugins/canvas/interpreter_expression_types",
      "plugins/canvas/renderers",
      "plugins/data/search/expressions/boot",
      "plugins/kbn_vislib_vis_types/pie_fn",
      "plugins/kbn_vislib_vis_types/vislib_fn",
      "plugins/visualizations/expressions/boot"
    ],
    "managementSections": [
      "plugins/beats_management",
      "plugins/cross_cluster_replication",
      "plugins/index_lifecycle_management",
      "plugins/index_management",
      "plugins/license_management/legacy",
      "plugins/logstash/sections/pipeline_edit",
      "plugins/logstash/sections/pipeline_list",
      "plugins/ml/application/management",
      "plugins/remote_clusters",
      "plugins/reporting/views/management",
      "plugins/rollup/crud_app",
      "plugins/security/views/management",
      "plugins/snapshot_restore",
      "plugins/telemetry/views/management",
      "plugins/transform",
      "plugins/upgrade_assistant/legacy",
      "plugins/watcher/legacy"
    ],
    "savedObjectTypes": [
      "plugins/kibana/dashboard/saved_dashboard/saved_dashboard_register",
      "plugins/kibana/visualize/saved_visualizations/saved_visualization_register"
    ],
    "search": [
      "plugins/rollup/search",
      "ui/courier/search_strategy/default_search_strategy"
    ],
    "shareContextMenuExtensions": [
      "plugins/reporting/share_context_menu/register_csv_reporting",
      "plugins/reporting/share_context_menu/register_reporting"
    ],
    "visTypes": [
      "plugins/kbn_vislib_vis_types/kbn_vislib_vis_types",
      "plugins/lens/register_vis_type_alias",
      "plugins/maps/register_vis_type_alias",
      "plugins/tilemap/vis_type_enhancers/update_tilemap_settings"
    ],
    "visualize": [
      "plugins/lens/legacy",
      "plugins/rollup/visualize"
    ]
  },
  "buildNum": 29199,
  "env": "production",
  "kbnVersion": "7.6.2"
}
 */

import { i18n } from '@kbn/i18n';
import { CoreSystem } from '__kibanaCore__'

const injectedMetadata = JSON.parse(document.querySelector('kbn-injected-metadata').getAttribute('data'));

i18n.load(injectedMetadata.i18n.translationsUrl)
  .catch(e => e)
  .then((i18nError) => {
    const coreSystem = new CoreSystem({
      injectedMetadata,
      rootDomElement: document.body,
      browserSupportsCsp: !window.__kbnCspNotEnforced__,
      requireLegacyFiles: () => {
        require('plugins/maps/legacy');
      }
    });

    coreSystem
      .setup()
      .then((coreSetup) => {
        if (i18nError) {
          coreSetup.fatalErrors.add(i18nError);
        }

        return coreSystem.start();
      });
  });
