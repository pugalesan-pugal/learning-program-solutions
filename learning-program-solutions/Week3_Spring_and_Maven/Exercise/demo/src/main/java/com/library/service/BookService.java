package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private String libraryName;
    private int libraryId;
    private BookRepository bookRepository;

    // Constructor for injecting simple values
    public BookService(String libraryName, int libraryId) {
        this.libraryName = libraryName;
        this.libraryId = libraryId;
    }

    // Setter for injecting BookRepository
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayService() {
        System.out.println("Library Name: " + libraryName);
        System.out.println("Library ID: " + libraryId);
        bookRepository.displayRepository();
    }
}
