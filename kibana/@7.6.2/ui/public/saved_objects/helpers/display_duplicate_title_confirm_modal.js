"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayDuplicateTitleConfirmModal = displayDuplicateTitleConfirmModal;

var _i18n = require("@kbn/i18n");

var _constants = require("../constants");

var _confirm_modal_promise = require("./confirm_modal_promise");

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
function displayDuplicateTitleConfirmModal(savedObject, overlays) {
  var confirmMessage = _i18n.i18n.translate('common.ui.savedObjects.confirmModal.saveDuplicateConfirmationMessage', {
    defaultMessage: "A {name} with the title '{title}' already exists. Would you like to save anyway?",
    values: {
      title: savedObject.title,
      name: savedObject.getDisplayName()
    }
  });

  var confirmButtonText = _i18n.i18n.translate('common.ui.savedObjects.confirmModal.saveDuplicateButtonLabel', {
    defaultMessage: 'Save {name}',
    values: {
      name: savedObject.getDisplayName()
    }
  });

  try {
    return (0, _confirm_modal_promise.confirmModalPromise)(confirmMessage, '', confirmButtonText, overlays);
  } catch (_) {
    return Promise.reject(new Error(_constants.SAVE_DUPLICATE_REJECTED));
  }
}