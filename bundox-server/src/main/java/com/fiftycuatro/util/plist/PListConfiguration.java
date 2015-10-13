package com.fiftycuatro.util.plist;

import java.io.File;
import java.io.IOException;
import java.io.StringReader;
import java.util.logging.Logger;

import org.apache.commons.configuration.Configuration;
import org.apache.commons.configuration.ConfigurationException;
import org.apache.commons.configuration.plist.XMLPropertyListConfiguration;
import org.apache.commons.io.FileUtils;

public class PListConfiguration {
   private static final Logger log = Logger.getLogger(PListConfiguration.class.getName());
   private static final Logger logST = Logger.getLogger(PListConfiguration.class.getName() + ".stacktrace");

   private static final String DOCTYPE_LINE = "<!DOCTYPE plist SYSTEM \"file://localhost/System/Library/DTDs/PropertyList.dtd\">";

   public static Configuration fromPath(String path) throws ConfigurationException {
      XMLPropertyListConfiguration config = new XMLPropertyListConfiguration();
      try {
         String pListText = FileUtils.readFileToString(new File(path));
         pListText = ensurePListFormat(pListText);
         config.load(new StringReader(pListText));
      } catch (IOException e) {
          log.warning("Could not read configuration: " + path); 
          throw new ConfigurationException("Error while reading configuration file.", e);
      }
      return config;
   }

   private static String ensurePListFormat(String pListText) throws ConfigurationException {
      int indexOfFirstAngle = pListText.indexOf("?>", 0);
      if (indexOfFirstAngle == -1) {
         throw new ConfigurationException("Missing XML declaration.");
      }

      if (pListText.contains("<!DOCTYPE")) {
         return pListText;
      }

      StringBuilder sb = new StringBuilder(pListText);
      sb.insert(indexOfFirstAngle+2, DOCTYPE_LINE);
      return sb.toString();
   }
}
