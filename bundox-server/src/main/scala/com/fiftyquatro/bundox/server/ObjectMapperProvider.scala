/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.fiftyquatro.bundox.server

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.scala.DefaultScalaModule
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType
import javax.ws.rs.ext.{ContextResolver, Provider}

@Provider
@Produces(Array(MediaType.APPLICATION_JSON))
class ObjectMapperProvider extends ContextResolver[ObjectMapper] {
  val defaultObjectMapper = {
    val jsonObjectMapper = new ObjectMapper()
    jsonObjectMapper.registerModule(DefaultScalaModule)
    jsonObjectMapper
  }

  override def getContext(typ: Class[_]): ObjectMapper = {
    println("Gettting THe COntext")
    defaultObjectMapper
  }
}