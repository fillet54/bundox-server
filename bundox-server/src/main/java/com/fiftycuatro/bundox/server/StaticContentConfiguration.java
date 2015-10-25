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

import java.io.File;

import javax.inject.Inject;
import javax.servlet.ServletContext;

import org.ocpsoft.logging.Logger.Level;
import org.ocpsoft.rewrite.annotation.RewriteConfiguration;
import org.ocpsoft.rewrite.config.Configuration;
import org.ocpsoft.rewrite.config.ConfigurationBuilder;
import org.ocpsoft.rewrite.config.Direction;
import org.ocpsoft.rewrite.config.Filesystem;
import org.ocpsoft.rewrite.config.Log;
import org.ocpsoft.rewrite.servlet.config.HttpConfigurationProvider;
import org.ocpsoft.rewrite.servlet.config.Path;
import org.ocpsoft.rewrite.servlet.config.Response;
import org.ocpsoft.rewrite.servlet.config.Stream;

@RewriteConfiguration
public class StaticContentConfiguration extends HttpConfigurationProvider {

    @Inject
    @InjectedConfiguration(key="bundox.data.docsets",
                           defaultValue="/opt/bundox/docsets")
    private String docSetDataDirectory;

    @Override
    public Configuration getConfiguration(ServletContext context) {
        /*
         * You should select a path that exposes only the directory(s) from which content should be served, otherwise the
         * entire hard drive could be accessible.
         */
        String resourceStr = docSetDataDirectory + "/{name}/{version}/{name}.docset/Contents/Resources/Documents/{file}";

        return ConfigurationBuilder.begin()
                .addRule()
                .when(Path.matches("/static/documentation/{name}/{version}/{file}")
                        .and(Filesystem.fileExists(new File(resourceStr)))
                        .and(Direction.isInbound())
                )
                //
                .perform(Log.message(Level.INFO, "Client requested path: {name}/{version}/{file}")
                            .and(Stream.from(new File(resourceStr))
                            .and(Response.setStatus(200))
                            .and(Response.complete())
                ))
                .where("file").matches(".*"); // Capture the rest of the path
    }

    @Override
    public int priority() {
        return 0;
    }
}
