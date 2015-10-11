package com.fiftycuatro.util.plist;

import org.apache.commons.configuration.ConfigurationException;

import com.fiftycuatro.bundox.server.impl.TestUtilities;

import spock.lang.*;

public class PListConfigurationTest extends Specification {

   def "when given a malformed configuration throw ConfigurationException"() {
      setup:
      def pListPath = malformedPListConfigurationFilePath();

      when:
      def config = PListConfiguration.fromPath(pListPath);

      then:
      thrown ConfigurationException;
   }

   def "when file not found throw  ConfigurationException"() {
      setup:
      def pListPath = "a/file/that/doesnt/exists.plist";

      when:
      def config = PListConfiguration.fromPath(pListPath);

      then:
      thrown ConfigurationException;
   }

   def "when given a plist with no xml delcaration throw ConfigurationException"() {
      setup:
      def pListPath = missingXmlDeclarationPListConfigurationFilePath();

      when:
      def config = PListConfiguration.fromPath(pListPath);

      then:
      thrown ConfigurationException;
   }

   def "can get fields in a well formed plist configuration file"() {
      setup:
      def pListPath = wellFormedPListConfigurationFilePath();

      when:
      def config = PListConfiguration.fromPath(pListPath);

      then:
      "value1" == config.getString("Key1");
   }
   
   def "can get fields in a plist configuration file that has missing DOCTYPE tag"() {
      setup:
      def pListPath = pListConfigurationWithMissingDOCTYPEFilePath();

      when:
      def config = PListConfiguration.fromPath(pListPath);

      then:
      "value1" == config.getString("Key1");
   }

   def malformedPListConfigurationFilePath() {
      def plistText = "${xmlDeclaration()}\n${pListDocType()}\n${pListDocType()}\n${pListBody()}";
      return writeToTempPathAndReturnPath(plistText);
   }

   def missingXmlDeclarationPListConfigurationFilePath() {
      def plistText = "${pListDocType()}\n${pListBody()}";
      return writeToTempPathAndReturnPath(plistText);
   }

   def wellFormedPListConfigurationFilePath() {
      def plistText = "${xmlDeclaration()}\n${pListDocType()}\n${pListBody()}";
      return writeToTempPathAndReturnPath(plistText);
   }
   
   def pListConfigurationWithMissingDOCTYPEFilePath() {
      def plistText = "${xmlDeclaration()}\n${pListBody()}";
      return writeToTempPathAndReturnPath(plistText);
   }

   def xmlDeclaration() {
      return '<?xml version="1.0" encoding="UTF-8"?>'
   }
   
   def pListDocType() {
      return '<!DOCTYPE plist SYSTEM "file://localhost/System/Library/DTDs/PropertyList.dtd">'
   }

   def pListBody() {
      return '''<plist version="1.0">
         <dict>
	    <key>Key1</key>
	    <string>value1</string>
	    <key>Key2</key>
	    <string>value2</string>
	 </dict>
      </plist>
      '''
   }

   def writeToTempPathAndReturnPath(String text) {
      String tempPath = TestUtilities.getTempDirWithDeleteOnExit() + "/Info.plist";
      new File(tempPath) << text;
      return tempPath;
   }
}
