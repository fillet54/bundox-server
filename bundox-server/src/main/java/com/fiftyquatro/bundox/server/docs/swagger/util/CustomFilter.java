package com.fiftyquatro.bundox.server.docs.swagger.util;

/**
 *  Copyright 2014 Reverb Technologies, Inc.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import com.wordnik.swagger.core.filter.SwaggerSpecFilter;
import com.wordnik.swagger.model.*;

public class CustomFilter implements SwaggerSpecFilter {
  @Override
  public boolean isOperationAllowed(
    Operation operation,
    ApiDescription api, 
    java.util.Map<String, java.util.List<String>> params, 
    java.util.Map<String, String> cookies, 
    java.util.Map<String, java.util.List<String>> headers) {
    return true;
  }

  @Override
  public boolean isParamAllowed(
    Parameter parameter, 
    Operation operation, 
    ApiDescription api,
    java.util.Map<String, java.util.List<String>> params, 
    java.util.Map<String, String> cookies,
    java.util.Map<String, java.util.List<String>>  headers) {
    return true;
  }
}
