"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UI_EXPORT_DEFAULTS = void 0;

var _path = require("path");

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const ROOT = (0, _path.dirname)(require.resolve('../../../../package.json'));
const UI_EXPORT_DEFAULTS = {
  webpackNoParseRules: [/node_modules[\/\\](angular|elasticsearch-browser)[\/\\]/, /node_modules[\/\\](mocha|moment)[\/\\]/],
  webpackAliases: {
    ui: (0, _path.resolve)(ROOT, 'src/legacy/ui/public'),
    __kibanaCore__$: (0, _path.resolve)(ROOT, 'src/core/public'),
    test_harness: (0, _path.resolve)(ROOT, 'src/test_harness/public'),
    querystring: 'querystring-browser',
    moment$: (0, _path.resolve)(ROOT, 'webpackShims/moment'),
    'moment-timezone$': (0, _path.resolve)(ROOT, 'webpackShims/moment-timezone')
  },
  styleSheetPaths: ['light', 'dark'].map(theme => ({
    theme,
    localPath: (0, _path.resolve)(ROOT, 'src/core/public/index.scss'),
    publicPath: `core.${theme}.css`,
    urlImports: {
      urlBase: 'built_assets/css/',
      publicDir: (0, _path.resolve)(ROOT, 'src/core/public')
    }
  })),
  appExtensions: {
    fieldFormatEditors: ['ui/field_editor/components/field_format_editor/register'],
    search: ['ui/courier/search_strategy/default_search_strategy']
  }
};
exports.UI_EXPORT_DEFAULTS = UI_EXPORT_DEFAULTS;