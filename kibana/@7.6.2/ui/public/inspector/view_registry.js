"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "InspectorViewDescription", {
  enumerable: true,
  get: function get() {
    return _types.InspectorViewDescription;
  }
});
exports.viewRegistry = void 0;

var _new_platform = require("ui/new_platform");

var _types = require("./types");

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

/**
 * Do not use this, instead use `inspector` plugin directly.
 *
 * ```ts
 * import { npSetup } from 'ui/new_platform';
 *
 * npSetup.plugins.inspector.registerView(view);
 * ```
 *
 * @deprecated
 */
var viewRegistry = _new_platform.npSetup.plugins.inspector.__LEGACY.views;
exports.viewRegistry = viewRegistry;