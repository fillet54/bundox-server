/*
 * Copyright 2015 phillip.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.fiftycuatro.bundox.server;
import java.text.MessageFormat;
import java.util.MissingResourceException;
import java.util.ResourceBundle;
import javax.enterprise.inject.Produces;
import javax.enterprise.inject.spi.InjectionPoint;
public class ConfigurationInjectionManager {
    static final String INVALID_KEY="Invalid key '{0}'";
    static final String MANDATORY_PARAM_MISSING = "No definition found for a mandatory configuration parameter : '{0}'";
    private final String BUNDLE_FILE_NAME = "configuration";
    private final ResourceBundle bundle = ResourceBundle.getBundle(BUNDLE_FILE_NAME);
    
    @Produces
    @InjectedConfiguration
    public String injectConfiguration(InjectionPoint ip) throws IllegalStateException {
        InjectedConfiguration param = ip.getAnnotated().getAnnotation(InjectedConfiguration.class);
        if (param.key() == null || param.key().length() == 0) {
            return param.defaultValue();
        }
        String value;
        try {
            value = bundle.getString(param.key());
            if (value == null || value.trim().length() == 0) {
                if (param.mandatory())
                    throw new IllegalStateException(MessageFormat.format(MANDATORY_PARAM_MISSING, new Object[]{param.key()}));
                else
                    return param.defaultValue();
            }
            return value;            
        } catch (MissingResourceException e) {
            if (param.mandatory()) throw new IllegalStateException(MessageFormat.format(MANDATORY_PARAM_MISSING, new Object[]{param.key()}));
            if (param.defaultValue().trim().length() == 0) return MessageFormat.format(INVALID_KEY, new Object[]{param.key()});
            return param.defaultValue();
        }
    }
}
