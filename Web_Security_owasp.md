OWASP Top 10 -

1. Injection(LDAP, SQL) - Untrusted user input interpreted by server & executed.
    - Whitelist trusted data/reject invalid input data.
    - Use latest frameworks.
    - Parametrise SQL statements
    - Fine tune DB permissions(segment accounts for admin/pvt/public)
2. Broken authentication & Session management(auth cookie theft, session ID theft, account management attacks)
    - Protect cookies(HttpOnly, Secure)
    - Decrease the window of risk(expire sessions quickly, re-challenge the user)
    - Harden the account management(encourage strong passwords, implement rate limits & lockouts)
3. Sensitive Data exposure(MITM)(Insufficient use of SSL, bad crypto) -
    - Minimise sensitive data collection
    - Apply https everywhere
    - Use strong encryption algorithm's
4. XML external entities(XXE) -
    - Validated user data
    - Whitelist server-side input validation
    - Use a safe API
    - Appended XXE in HTML & which pulled root certificate & patched in
5. Broken access control - restrictions on authentication users are not properly enforced.
    Insecure Direct Object references(change ID in URL) -
        - Implement access controls
        - Use indirect maps(don't expose internal keys externally)
        - Avoid predictable keys
    Missing Function level access control(server side authentication & authorization checks missing)
        - Define a clear authorization model
        - Check for forced browsing
        - Always test unpriviledged roles
6. Security misconfiguration(insecure resource)(software out of date, unnecessary features, error handling) - misconfiguration of system
    - Harden the install
    - Tune the app security config
    - Ensure packages are up to date(patching, updating & testing system)
    - Force change credentials
    - Least priviledge
    - Regularly audit system deployment
7. Cross site scripting(XSS)(URL with XSS payload)(DOM manipulation)(HTML injection) - untrusted user input is interpreted by browser & executed
    - Input validation
    - Whitelist untrusted data
    - Always encode output
    - Encode for context(HTML/CSS/JS)
    - Removed by using libraries such as React, Ruby on rails etc
        - Show a warning before redirecting user tountrusted domain
        - Whitelist domains
        - Sanitize before redirecting.
        - Avoid user supplied parameters in target URL
        - Filter input content(headers/payload)
        - Escape all HTML tags
        - Whitelist all special characters
8. Insecure Deserilization -
    - Integrity around serialize objects
9. Components with known vulnerabilities(disclosure of component version) -
    - Identify components & versions
    - Components should be monitored
    - Keep components updated
10. Insufficient Logging & Monitoring -
    - User inputs logged with proper data
    - Logs in a proper format

Excluded ones -
1. Unvalidated redirects & forwards -
    - URL whitelist
    - Use indirect references(DB mapping with an ID)
    - Check the referrer
1. Cross Site Request Forgery - an attack which forces victim to execute unwanted actions on a web application in which they are currently authenticated.
    - Re-authenticate for all critical actions
    - Include hidden token in request
    - Employ anti-forgery tokens
    - Validate the referrer, host
    - Native browser defences, fraud detection protection


Extra points -
- Difference between Cross-Site scripting(XSS) & SQL injection is that XSS is client-side vulnerability that targets other application users while SQL injection is a server-side vulnerability that targets application's database.
- XSS is cookie stealing whereas CSRF is executing service with cookies by sending forged link.