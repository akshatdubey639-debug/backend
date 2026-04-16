// ApiResponse.js

// 🔹 Ye class API response ko standard format me bhejne ke liye banayi gayi hai
// Taaki har API ka response same structure me aaye

class ApiResponse {

    // 🔹 Constructor automatically call hota hai jab new object create hota hai
    // statusCode → HTTP status code (200, 404, 500, etc.)
    // data → jo data frontend ko bhejna hai
    // message → optional message (default "Success")

    constructor(statusCode, data, message = "Success") {

        // HTTP status code store karega
        this.statusCode = statusCode;

        // Actual response data store karega
        this.data = data;

        // Message store karega
        this.message = message;

        // Success true hoga agar statusCode < 400
        // (200, 201 success hote hain)
        // (400, 500 error hote hain)

        this.success = statusCode < 400;

    }
}


// 🔹 Class export karte hain taaki controllers me use ho sake

export { ApiResponse };