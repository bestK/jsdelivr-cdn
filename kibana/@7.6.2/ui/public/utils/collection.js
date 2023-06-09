"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.move = move;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * move an obj either up or down in the collection by
 * injecting it either before/after the prev/next obj that
 * satisfied the qualifier
 *
 * or, just from one index to another...
 *
 * @param  {array} objs - the list to move the object within
 * @param  {number|any} obj - the object that should be moved, or the index that the object is currently at
 * @param  {number|boolean} below - the index to move the object to, or whether it should be moved up or down
 * @param  {function} qualifier - a lodash-y callback, object = _.where, string = _.pluck
 * @return {array} - the objs argument
 */
function move(objs, obj, below, qualifier) {
  var origI = _lodash.default.isNumber(obj) ? obj : objs.indexOf(obj);

  if (origI === -1) {
    return objs;
  }

  if (_lodash.default.isNumber(below)) {
    // move to a specific index
    objs.splice(below, 0, objs.splice(origI, 1)[0]);
    return objs;
  }

  below = !!below;
  qualifier = qualifier && _lodash.default.callback(qualifier);
  var above = !below;
  var finder = below ? _lodash.default.findIndex : _lodash.default.findLastIndex; // find the index of the next/previous obj that meets the qualifications

  var targetI = finder(objs, function (otherAgg, otherI) {
    if (below && otherI <= origI) {
      return;
    }

    if (above && otherI >= origI) {
      return;
    }

    return Boolean(_lodash.default.isFunction(qualifier) && qualifier(otherAgg, otherI));
  });

  if (targetI === -1) {
    return objs;
  } // place the obj at it's new index


  objs.splice(targetI, 0, objs.splice(origI, 1)[0]);
  return objs;
}