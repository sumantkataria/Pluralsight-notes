Security Headers -

Sub Resouce Integrity(SRI) -
1. Websites appended with Base 64encoded script.
2. Solution - append integrity with any script appended(like JQUERY, BOOTSTRAP etc)
3. The file which changes SRI can't be used.

HTTP Strict Transport Security(HSTS) -
1. When someone requests connect via HTTP & take insecure requests & converts to secure requests.
2. Can be a Man In The Middle Attack(MITM)
3. Can be a downgrade attack
4. Once browser loads the insecure page & returns STS header then sets the STS policy in cache & on same insecure page load(Non-Authoritative-Reason: HSTS) header does not allow to make requests to server & instead loads from cache.
    - Strict-Transport-Security: max-age=63072000(max age to expire); includeSubDomains( include sub domains); preload(preloaded in browsers list)
    - Upgrade-Insecure-Requests: 1

Content Security Policy(CSP) -
1. Way of whitelisting what is allowed to run on site or not.
2. Allows to whitelist the sources different content type to be loaded from.
3. Websites can't be updated with other websites photos.
4. Will block if any other tries to embed any script on the page.
5. Can be added to the service response headers.
6. Can be added via meta tag.
7. Can report if CSP is broke & drop response to team(csp-report)
8. Response headers -
    - content-security-policy: default-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; object-src none; media-src none; script-src 'self' 'unsafe-eval' 'unsafe-inline' 'nonce-random_string' *.ameriprise.com; frame-ancestors 'none'; report-uri https://demo.report-uri.com/abc //upgrade-insecure-requests
    - content-security-policy-report-only: default-src https:; report-uri https://demo.report-uri.com/abc
    - Prevents Clickjacking

X-XSS-Protection
1. Can be added in service response headers.
2. Can be used to send report to some endpoint.
3. But gets blocked by chrome if it's different from page domain.
4. If we try & append some script in the browser URL, XSS response header can protect & not allow that script to render.
    - X-XSS-protection:1; report=https://abc.com/


HTTP Public-Key-Pins -
1. Helpful in browser certificates
2. Returns public keys
3. Can be added in response headers.
4. Deprecated in Chrome.
5. Don't use it.
    - Public-Key-Pins: pin-sha256="****"; pin-sha256="****"; max-age=5184000; includeSubDomains; report-uri="https://abc.com/


Certificate Authority Authorization -
1. Can append certificates at DNS level which certifiate authorities issue certificate for our domain.
2. Can be used by domain name holders to mention certificate authorities.


Certificate Transparency -
1. If a bad guy gets certificate issued by any CAA, then he can use it. CT logs help from it.
2. Multiple online sites provides it.
3. Added to response headers
    - expect-ct:max-age=***, enforce, report-uri="https://abc.com"


X-Frame-Options- 
1. Not needed by modern browsers & replaced by CSP