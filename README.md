# Google Form to JSON API with WIB Timezone Adjustment

This repository contains a Google Apps Script project that creates a REST API endpoint to serve Google Form responses stored in Google Sheets as JSON. The API automatically formats the timestamp fields to the Asia/Jakarta timezone (WIB), making it suitable for applications that require local Indonesian time.

## Features

- Converts Google Sheets data (from Google Form responses) into JSON format.
- Automatically adjusts timestamp fields to WIB timezone.
- Simple REST API with a single `action=getData` parameter.
- Easy to deploy and integrate with external systems.

## Usage

1. **Deploy the Script as Web App**

- Open the Google Apps Script editor linked to your Google Sheet.
- Replace the `SPREADSHEET_ID` with your Google Sheet ID.
- Save and deploy the script as a Web App:
  - Execute as: Me
  - Who has access: Anyone, even anonymous

2. **Access the API**

Make a GET request to:

