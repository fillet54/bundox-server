package com.fiftycuatro.bundox.server.impl;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
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

    public List<Document> findDocumentsByNameAndVersion(String name, String version) {
        return backingRepo.findDocumentsByNameAndVersion(name, version);
    }
    
    public List<DocumentationItem> searchDocumentation(String searchTerm, List<Document> documents, int maxResults) {
        List<DocumentationItem> unsorted = backingRepo.searchDocumentation(searchTerm, documents, maxResults);
        return unsorted.stream()
               .sorted((e1, e2) -> compareMultiple(searchTerm, e1.getSubject(), e2.getSubject()))
               .collect(Collectors.toList());

    }

    private int compareMultiple(String search, String value1, String value2) {
        List<TriFunction<String,String,String,Integer>> measures = new ArrayList<>();
        measures.add((s,v1, v2) -> compareByStartLocation(s, v1, v2));
        measures.add((s,v1, v2) -> compareByNumOfSplits(s, v1, v2));
        measures.add((s,v1, v2) -> compareByLongestSegment(s, v1, v2));
        measures.add((s,v1, v2) -> compareByLength(s, v1, v2));

        int compare = 0;
        for (TriFunction<String,String,String,Integer> measure : measures) {
            compare = measure.apply(search, value1, value2);
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
            
    public void storeDocuments(List<Document> documents) {
        backingRepo.storeDocuments(documents);
    }

    public void storeDocumentationItems(List<DocumentationItem> documentationItems) {
        backingRepo.storeDocumentationItems(documentationItems);
    }
}
