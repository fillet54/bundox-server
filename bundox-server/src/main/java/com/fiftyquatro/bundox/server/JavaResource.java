package com.fiftyquatro.bundox.server;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * Root resource (exposed at "javaresource" path)
 */
@Path("javaresource")
@Produces(MediaType.APPLICATION_JSON)
public class JavaResource {

    @GET
    public Object getIt() {
        return new Greeting("Phillip", "Java says hi");
    }
    
    public class Greeting {
        private String name;
        private String msg;

        public Greeting(String name, String msg) {
            this.name = name;
            this.msg = msg;
        }
        
        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getMsg() {
            return msg;
        }

        public void setMsg(String msg) {
            this.msg = msg;
        }
    }
}


