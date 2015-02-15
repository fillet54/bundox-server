package com.fiftycuatro.bundox.server.docs.swagger;

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
    // do any additional initialization here, such as set your base path programmatically as such:
    // ConfigFactory.config().setBasePath("http://www.foo.com/");

    // add a custom filter
    FilterFactory.setFilter(new CustomFilter());

    ApiInfo info = new ApiInfo(
      "Bundox",                                                    /* title */
      "Bundox is an api for searching through code documentation", 
      "#",                                                         /* TOS URL */
      "fillet54@gmail.com",                                        /* Contact */
      "Apache 2.0",                                                /* license */
      "http://www.apache.org/licenses/LICENSE-2.0.html"            /* license URL */
    );

    List<AuthorizationScope> scopes = new ArrayList<AuthorizationScope>();

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
