"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderParamEditor = OrderParamEditor;

var _react = _interopRequireWildcard(require("react"));

var _eui = require("@elastic/eui");

var _i18n = require("@kbn/i18n");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
function OrderParamEditor(_ref) {
  var aggParam = _ref.aggParam,
      value = _ref.value,
      showValidation = _ref.showValidation,
      setValue = _ref.setValue,
      setValidity = _ref.setValidity,
      setTouched = _ref.setTouched;

  var label = _i18n.i18n.translate('common.ui.aggTypes.orderLabel', {
    defaultMessage: 'Order'
  });

  var isValid = !!value;
  (0, _react.useEffect)(function () {
    setValidity(isValid);
  }, [isValid]); // @ts-ignore

  return _react.default.createElement(_eui.EuiFormRow, {
    label: label,
    fullWidth: true,
    isInvalid: showValidation ? !isValid : false,
    compressed: true
  }, _react.default.createElement(_eui.EuiSelect, {
    options: aggParam.options,
    value: value && value.value,
    onChange: function onChange(ev) {
      return setValue(aggParam.options.find(function (opt) {
        return opt.value === ev.target.value;
      }));
    },
    fullWidth: true,
    compressed: true,
    isInvalid: showValidation ? !isValid : false,
    onBlur: setTouched
  }));
}