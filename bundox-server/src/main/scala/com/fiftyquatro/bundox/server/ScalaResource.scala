package com.fiftyquatro.bundox.server

import javax.ws.rs.{GET, Path, Produces}
import javax.ws.rs.core.MediaType

case class Greeting(name:String, msg:String)

@Path("scalaresource")
@Produces(Array(MediaType.APPLICATION_JSON))
class ScalaResource {
  
  @GET
  def getIt() = {
    Greeting("Phillip", "Hello there, from scala")
  }
}
