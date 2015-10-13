package com.fiftycuatro.bundox.server.impl;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.fiftycuatro.bundox.server.cdi.BackingStore;
import com.fiftycuatro.bundox.server.cdi.SortingStore;
import com.fiftycuatro.bundox.server.core.Document;
import com.fiftycuatro.bundox.server.core.DocumentRepository;
import com.fiftycuatro.bundox.server.core.DocumentationItem;
import com.fiftycuatro.util.function.TriFunction;

import java.util.stream.Collectors;

import javax.inject.Inject;
import javax.inject.Singleton;

@Singleton
@SortingStore
public class SortingDocumentRepository implements DocumentRepository {

    @Inject
    @BackingStore
    private DocumentRepository backingRepo;

    public SortingDocumentRepository() {
    }

    public SortingDocumentRepository(DocumentRepository backingRepo) {
        this.backingRepo = backingRepo;
    }

    public List<Document> getAllDocuments() {
        return backingRepo.getAllDocuments();
    }

    public void deleteDocument(Document document) {
        backingRepo.deleteDocument(document);
    }
    
    public void deleteDocumentation(Document document) {
        backingRepo.deleteDocumentation(document);
    }

    public List<Document> findDocumentsByName(String name){
        return backingRepo.findDocumentsByName(name);
    }

    public Optional<Document> findDocumentByNameAndVersion(String name, String version) {
        return backingRepo.findDocumentByNameAndVersion(name, version);
    }
    
    public List<DocumentationItem> searchDocumentation(String searchTerm, List<Document> documents, int maxResults) {
        List<DocumentationItem> unsorted = backingRepo.searchDocumentation(searchTerm, documents, maxResults);
        return unsorted.stream()
               .sorted((e1, e2) -> compareMultiple(searchTerm, e1, e2))
               .collect(Collectors.toList());

    }

    private int compareMultiple(String search, DocumentationItem docItem1, DocumentationItem docItem2) {
        List<TriFunction<String,DocumentationItem,DocumentationItem,Integer>> comparers = new ArrayList<>();
        comparers.add((s,d1,d2) -> compareByStartLocation(s, d1.getSubject(), d2.getSubject()));
        comparers.add((s,d1,d2) -> compareByNumOfSplits(s, d1.getSubject(), d2.getSubject()));
        comparers.add((s,d1,d2) -> compareByLongestSegment(s, d1.getSubject(), d2.getSubject()));
        comparers.add((s,d1,d2) -> compareByLength(s, d1.getSubject(), d2.getSubject()));
        comparers.add((s,d1,d2) -> compareByType(s, d1.getType(), d2.getType()));

        int compare = 0;
        for (TriFunction<String,DocumentationItem,DocumentationItem,Integer> comparer : comparers) {
            compare = comparer.apply(search, docItem1, docItem2);
            if (compare != 0) {
                return compare;
            }
        }
        return compare;
    }

    private int compareByLength(String search, String v1, String v2) {
        return v1.length() - v2.length();
    }

    private int compareByStartLocation(String search, String v1, String v2) {
        return startLocation(search, v1) - startLocation(search, v2);
    }

    private int startLocation(String search, String value) {
        int startPos = value.indexOf(search.toCharArray()[0]);
        if (startPos == -1) {
            startPos = value.length();
        }
        return startPos;
    }

    private int compareByNumOfSplits(String search, String v1, String v2) {
        return numOfSplits(search, v1) - numOfSplits(search, v2);
    }

    private int numOfSplits(String search, String value) {
        return findMatchingSegments(search, value).size();
    }

    private int compareByLongestSegment(String search, String v1, String v2) {
        return longestSegment(search, v2) - longestSegment(search, v1); 
    }
    private int longestSegment(String search, String value) {
        Optional<String> longest = findMatchingSegments(search, value).stream()
                  .max(Comparator.comparing(String::length));
        if (longest.isPresent()) {
            return longest.get().length();
        } else {
            return 0;
        }
    }

    private List<String> findMatchingSegments (String search, String value) {
        List<String> segments = new ArrayList<>(); 
        StringBuilder sb = new StringBuilder();
        int currentPos = 0;
        int lastMatch = -1;

        for (char c : search.toCharArray()) {
            int match = value.indexOf(c, currentPos);
            if (match == -1) {
                break;
            }
            else if (lastMatch + 1 == match) {
                sb.append(c);
                lastMatch++;
                currentPos++;
            } else {
                segments.add(sb.toString());
                sb = new StringBuilder();
                sb.append(c);
                lastMatch = match;
                currentPos = match + 1;
            }
        }
        if (sb.toString().length() > 0) {
            segments.add(sb.toString());
        }
        return segments;
    }

    public int compareByType(String search, String t1, String t2) {
       int maxCompare = 100;
       Map<String, Integer> typeToCompare = new HashMap<>();
       typeToCompare.put("Class", 0);
       typeToCompare.put("Method", 1);
       typeToCompare.put("Function", 1);
     
       int t1Compare = maxCompare;
       int t2Compare = maxCompare;
       if (typeToCompare.containsKey(t1)) {
           t1Compare = typeToCompare.get(t1);
       }
       if (typeToCompare.containsKey(t2)) {
           t2Compare = typeToCompare.get(t2);
       }
       return t1Compare - t2Compare;
    }

    public void storeDocuments(List<Document> documents) {
        backingRepo.storeDocuments(documents);
    }

    public void storeDocumentationItems(List<DocumentationItem> documentationItems) {
        backingRepo.storeDocumentationItems(documentationItems);
    }
}
