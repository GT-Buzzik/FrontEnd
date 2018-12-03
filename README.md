# FrontEnd
The Front End for Buzzik

# Release Notes

* Visualizations such as bar, pie, and line charts are now present.
* Introduced new Night Mode
* Users can now download their raw data to see what's being tracked.
* Fixed crash when using the "Month" button with bar charts.
* Fixed issue with x-axis of graph occasionally being blank.
* Application now parses calendar file (.ICS).
* Application now properly responds if you resize the browser window.

# Known Bugs/Defects

* Frontend Application currently only presents the Student side of the project. The data is persisted in the backend and the APIs exist for it to be retrieved in a future project.
* Notifications and account settings aren't implemented.
* Does not currently interact with the GT CAS system.

# Installation Guide

1. Download this frontend repository and extract it somewhere.
2. Open up Google Chrome and navigate to the Extensions menu. (click the three dots in the top right, then click "More Tools", then click "Extensions")
3. Turn on Developer mode in the top right.
4. Click "Load Unpacked" in the top left, and when prompted, select the extracted Frontend folder (the folder containing this file.)
5. Hit Control/Command + T to open a new tab, and our homepage should appear (or a Georgia Tech login prompt).
6. To log in, hit the "ok" button on the alert and a Spotify login page will appear.
7. Enter your spotify credentials and hit enter.
8. Open a new tab (2 times) and everything should be properly populated.
9. To log out, click "logout" and delete your spotify cookies in the browser settings.
10. To remove the extension, go back into the extensions menu and click the remove button by the buzzik extension.