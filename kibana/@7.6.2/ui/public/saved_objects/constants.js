"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SAVE_DUPLICATE_REJECTED = exports.OVERWRITE_REJECTED = void 0;

var _i18n = require("@kbn/i18n");

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
 * An error message to be used when the user rejects a confirm overwrite.
 * @type {string}
 */
var OVERWRITE_REJECTED = _i18n.i18n.translate('common.ui.savedObjects.overwriteRejectedDescription', {
  defaultMessage: 'Overwrite confirmation was rejected'
});
/**
 * An error message to be used when the user rejects a confirm save with duplicate title.
 * @type {string}
 */


exports.OVERWRITE_REJECTED = OVERWRITE_REJECTED;

var SAVE_DUPLICATE_REJECTED = _i18n.i18n.translate('common.ui.savedObjects.saveDuplicateRejectedDescription', {
  defaultMessage: 'Save with duplicate title confirmation was rejected'
});

exports.SAVE_DUPLICATE_REJECTED = SAVE_DUPLICATE_REJECTED;