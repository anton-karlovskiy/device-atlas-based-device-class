/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// TODO: replace this with the domain when deploying the app
const HOST_ADDR = 'http://localhost:5000/';

const DEVICE_API_URL = `${HOST_ADDR}api/device/`;

// TODO: device properties testing -> remove on release
// const DEVICE_PROPERTIES_API_URL = `${HOST_ADDR}api/device-properties/`;

const Multicore_Score_Threshold = 4000;

export {
  DEVICE_API_URL,
  // TODO: device properties testing -> remove on release
  // DEVICE_PROPERTIES_API_URL,
  Multicore_Score_Threshold
};
