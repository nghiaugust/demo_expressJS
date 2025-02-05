1. npm init // khởi tạo dự án
2. npm i express --save //cài đặt framework express
3. npm i nodemon --save-dev // giúp tự động restart server khi có thay đổi
4. npm i morgan --save-dev // giúp theo dõi các phản hồi từ server
5. npm i dotenv // giúp triển khai biến môi trường
---làm việc với database mysql---
6. npm install sequelize mysql2 // sequelize giúp làm việc với database, mysql2 kết nối với MySQL
7. npm install sequelize-cli // Hỗ trợ migration và seeders 
8. npx sequelize-cli init // -> Tạo ra các thư mục config, migrations, models, seeders
9. npx sequelize-cli db:migrate // sau khi hoàn thành migration chạy lệnh để tạo bảng