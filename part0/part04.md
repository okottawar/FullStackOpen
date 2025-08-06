```
sequenceDiagram
    participant User
    participant browser as Browser
    participant server as Web Server

    Note over User, server: Notes Application Loading Sequence
    
    User->>browser: Navigate to /notes page
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    Note right of server: Server processes request
    server-->>browser: 304 Not Modified - HTML document
    deactivate server
    
    Note left of browser: Browser parses HTML, discovers resources
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: 304 Not Modified - CSS file (text/css)
    deactivate server
    
    Note left of browser: Styles applied to page
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: 304 Not Modified - JavaScript file
    deactivate server
    
    Note left of browser: JavaScript begins execution
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: 200 OK - [{ "content": "This is a test", "date": "2025-08-06T12:09:18.112Z" }]
    deactivate server

    Note right of browser: Browser executes callback function
    Note right of browser: DOM manipulation renders notes list
    Note over User, browser: User sees fully loaded notes page
```
```

## part05_06.md

````markdown
```
sequenceDiagram
    participant User
    participant browser as Browser
    participant server as Web Server

    Note over User, server: Notes Application Loading Sequence
    
    User->>browser: Navigate to /spa page
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    Note right of server: Server processes request
    server-->>browser: 304 Not Modified - HTML document
    deactivate server
    
    Note left of browser: Browser parses HTML, discovers resources
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: 304 Not Modified - CSS file (text/css)
    deactivate server
    
    Note left of browser: Styles applied to page
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: 304 Not Modified - JavaScript file
    deactivate server
    
    Note left of browser: JavaScript begins execution
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: 200 OK - [{"content": "Testing the single page app", "date": "2025-08-06T12:34:23.905Z"}]
    deactivate server

    Note right of browser: Browser executes callback function
    Note right of browser: DOM manipulation renders notes list
    Note over User, browser: User sees fully loaded notes page
```
```

## Key Points for GitHub Rendering

- **Code block format**: Using triple backticks with `mermaid` identifier
- **Arrow syntax**: `>>` for solid arrows, `-->>` for dashed arrows
- **File extension**: Ensure files have `.md` extension
- **Viewing location**: View directly on GitHub.com, not GitHub Pages

If these still don't render, test the syntax first at [mermaid.live](https://
