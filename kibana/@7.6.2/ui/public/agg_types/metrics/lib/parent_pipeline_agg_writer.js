"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parentPipelineAggWriter = void 0;

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
var parentPipelineAggWriter = function parentPipelineAggWriter(agg, output, aggConfigs) {
  var customMetric = agg.getParam('customMetric');
  var metricAgg = agg.getParam('metricAgg');
  var selectedMetric = customMetric || aggConfigs && aggConfigs.getResponseAggById(metricAgg);

  if (customMetric && customMetric.type.name !== 'count') {
    output.parentAggs = (output.parentAggs || []).concat(selectedMetric);
  }

  output.params = {
    buckets_path: selectedMetric.type.name === 'count' ? '_count' : selectedMetric.id
  };
};

exports.parentPipelineAggWriter = parentPipelineAggWriter;