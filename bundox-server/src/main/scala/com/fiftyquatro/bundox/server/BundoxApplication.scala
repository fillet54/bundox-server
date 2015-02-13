/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fiftyquatro.bundox.server

import java.util.logging.Logger;
import javax.ws.rs.ApplicationPath
import org.glassfish.jersey.server.ResourceConfig
import org.glassfish.jersey.jackson.JacksonFeature

@ApplicationPath("webapi/")
class BundoxApplication extends ResourceConfig {
  def log = Logger.getLogger(this.getClass.getName)
  
  log.info("Starting up application")
  register(classOf[JacksonFeature])
  register(classOf[ObjectMapperProvider])

}