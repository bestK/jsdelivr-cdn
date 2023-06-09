"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "InspectorSession", {
  enumerable: true,
  get: function get() {
    return _public.InspectorSession;
  }
});
exports.Inspector = void 0;

var _new_platform = require("../new_platform");

var _public = require("../../../../plugins/inspector/public");

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
 * @deprecated
 *
 * Do not use this, use New Platform `inspector` plugin instead.
 */
var Inspector = {
  /**
   * @deprecated
   *
   * Do not use this, use New Platform `inspector` plugin instead.
   */
  isAvailable: _new_platform.npStart.plugins.inspector.isAvailable,

  /**
   * @deprecated
   *
   * Do not use this, use New Platform `inspector` plugin instead.
   */
  open: _new_platform.npStart.plugins.inspector.open
};
exports.Inspector = Inspector;