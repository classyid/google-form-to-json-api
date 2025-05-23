// Ganti dengan ID Spreadsheet Google Form kamu
const SPREADSHEET_ID = '<ID-SPREADSHEET>';

function doGet(e) {
  const action = e.parameter.action; // Mendapatkan nilai parameter 'action' dari URL
  
  if (action === 'getData') {
    return getData(); // Panggil fungsi getData jika action-nya 'getData'
  }

  // Jika action tidak valid, kembalikan response error
  return ContentService.createTextOutput('Invalid action')
    .setMimeType(ContentService.MimeType.TEXT);
}

function getData() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName('Form Responses 1'); // Ganti dengan nama sheet yang sesuai
  const data = sheet.getDataRange().getValues();

  // Ambil header kolom
  const headers = data.shift();

  // Format data ke JSON array of object
  const jsonData = data.map(row => {
    let obj = {};
    headers.forEach((header, i) => {
      obj[header.toLowerCase().replace(/\s+/g, '_')] = row[i]; // Memformat header menjadi lowercase dan menggunakan underscore
    });

    // Jika ada timestamp, ubah sesuai dengan timezone Asia/Jakarta (WIB)
    if (obj.timestamp) {
      const date = new Date(obj.timestamp); // Mengambil objek Date dari timestamp
      const formattedDate = Utilities.formatDate(date, "Asia/Jakarta", "yyyy-MM-dd HH:mm:ss"); // Format sesuai WIB
      obj.timestamp = formattedDate; // Menyimpan timestamp yang sudah diformat
    }

    return obj;
  });

  // Kembalikan response dalam format JSON
  return ContentService.createTextOutput(JSON.stringify(jsonData))
    .setMimeType(ContentService.MimeType.JSON);
}
