Javascript Security -

1. Standard for contact details(security.txt).
2. Always "use strict" mode.
3. Input validation always.
4. Unsafe functions - eval & function constructor
5. Unsafe browser API - setTimeout & setInterval
6. Denial of Service
7. Sanitize data
8. Validate input data before passing to libraries
9. External packages need to be audited for use of unafe functions
10. Code injection wth math.js
11. Prototype pollution
12. Denial of Service attack
13. Session fixation attack
14. SAST(static), DAST(dynamic) & IAST(Interactive Application Security Testing)
15. ESLint - under rules set "no-eval":"error", "no-implied-eval":"error", "no-new-func":"error"
16. OWASP ZAP, npm audit, RetireJS, OWASP dependency track, Snyk
17. Prevents CSRF attack -
    - sameSite = strict
    - Always add content-type header
18. Append JS encoding
19. HTTPS provides Confidentiality, Integrity, Authenticity(DNX hacking, Phishing & DNS spoofing)
20. LetsEncrypt.org provide free certificates
21. SSLabs.com provides details on browser's security