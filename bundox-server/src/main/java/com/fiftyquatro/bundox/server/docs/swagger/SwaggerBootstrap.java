/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fiftyquatro.bundox.server.docs.swagger;

/**
 *
 * @author phillip
 */

import com.fiftyquatro.bundox.server.docs.swagger.util.*;

import com.wordnik.swagger.model.*;
import com.wordnik.swagger.config.*;

import com.wordnik.swagger.config.FilterFactory;

import javax.servlet.http.HttpServlet;

import java.util.List;
import java.util.ArrayList;
import java.util.logging.Logger;

public class SwaggerBootstrap extends HttpServlet {
    private static Logger log = Logger.getLogger("com.fiftyquatro.bundox.server.docs.swagger.SwaggerBootstrap");
  static {
      
      log.info("Setting up shit");
    // do any additional initialization here, such as set your base path programmatically as such:
    // ConfigFactory.config().setBasePath("http://www.foo.com/");

    // add a custom filter
    FilterFactory.setFilter(new CustomFilter());

    ApiInfo info = new ApiInfo(
      "Bundox API",                             /* title */
      "This is a sample server Petstore server.  You can find out more about Swagger " + 
      "at <a href=\"http://swagger.io\">http://swagger.io</a> or on irc.freenode.net, #swagger.  For this sample, " + 
      "you can use the api key \"special-key\" to test the authorization filters", 
      "http://helloreverb.com/terms/",                  /* TOS URL */
      "apiteam@wordnik.com",                            /* Contact */
      "Apache 2.0",                                     /* license */
      "http://www.apache.org/licenses/LICENSE-2.0.html" /* license URL */
    );

    List<AuthorizationScope> scopes = new ArrayList<AuthorizationScope>();
    scopes.add(new AuthorizationScope("email", "Access to your email address"));
    scopes.add(new AuthorizationScope("pets", "Access to your pets"));

    List<GrantType> grantTypes = new ArrayList<GrantType>();

    ImplicitGrant implicitGrant = new ImplicitGrant(
      new LoginEndpoint("http://localhost:8080/oauth/dialog"), 
      "access_code");

    grantTypes.add(implicitGrant);

    AuthorizationType oauth = new OAuthBuilder().scopes(scopes).grantTypes(grantTypes).build();

    ConfigFactory.config().addAuthorization(oauth);
    ConfigFactory.config().setApiInfo(info);
  }
}
