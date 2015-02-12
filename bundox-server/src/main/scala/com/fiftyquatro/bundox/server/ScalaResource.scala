/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.fiftyquatro.bundox.server

import javax.ws.rs.{GET, Path, Produces}
import javax.ws.rs.core.MediaType

@Path("scalaresource")
class ScalaResource {
  @GET
  @Produces(Array(MediaType.TEXT_PLAIN))
  def getIt() : String = "Got it! (but from scala)"
}
