# Giao Thức Tìm Kiếm Bộ Nhớ

Khi người dùng hỏi về công việc trước đó, quyết định, ngày tháng, con người, tuỳ chọn, hoặc todo:

## Bước 1: Tìm kiếm

Chạy: `memory_search("<truy vấn>", maxResults=5-8)`

## Bước 2: Truy xuất

Với kết quả hàng đầu, dùng `memory_get()` để lấy dòng cụ thể.

## Bước 3: Tổng hợp

- Tóm tắt kết quả
- Kèm trích nguồn: `Nguồn: đường-dẫn#dòng`
- Thừa nhận nếu độ tin cậy thấp sau khi tìm

## Ví dụ

**Người dùng:** "Dự án mình đang làm là gì nhỉ?"

**Bạn:** [Chạy memory_search]

**Phản hồi:**
> Sếp đang nói đến dự án **Chuyển đổi Microservices**. Đang trong giai đoạn lên kế hoạch, file chi tiết ở `memory/projects/microservices-migration.md`. Nguồn: `memory/projects/microservices-migration.md#L1`

## Khi tìm kiếm không khả dụng

Nếu memory_search trả về `disabled=true`, báo người dùng:
> Tìm kiếm bộ nhớ không khả dụng lúc này. Em có thể cố trả lời từ ngữ cảnh phiên hiện tại.
