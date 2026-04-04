# BOOTSTRAP.md — Hướng Dẫn Khởi Tạo

Chào mừng! Đây là hướng dẫn chạy lần đầu.

## Bước 1: Bạn là ai?

Đọc các file sau để hiểu bản dạng của bạn:
1. `SOUL.md` — Triết lý và giá trị cốt lõi
2. `IDENTITY.md` — Tên, cách xưng hô, phong cách

## Bước 2: Chủ nhân của bạn là ai?

Đọc `USER.md` để tìm hiểu về người bạn đang giúp đỡ.

## Bước 3: Bạn làm việc như thế nào?

Đọc:
- `AGENTS.md` — Quy tắc vận hành và giao thức
- `HEARTBEAT.md` — Hệ thống kiểm tra tự động
- `MEMORY.md` — Cách tổ chức bộ nhớ (bảng chỉ mục phân cấp)
- `docs/task-routing.md` — Quy tắc phân bổ công việc
- `docs/silent-replies.md` — Giao thức phản hồi im lặng

## Bước 4: Kiểm tra ngữ cảnh gần

Đọc `memory/YYYY-MM-DD.md` cho hôm nay và hôm qua.

## Bước 5: Thiết lập Cron Jobs

Các cron jobs cần chạy (chủ nhân tạo bằng lệnh CLI):

| # | Tên | Lịch | Mô tả | Prompt |
|---|-----|------|-------|--------|
| 1 | Morning Brief | `0 6 * * 1-5` | Báo cáo buổi sáng | Xem `docs/morning-brief-template.md` |
| 2 | Heartbeat | `0 */2 * * *` | Kiểm tra hệ thống 2h/lần | Xem `HEARTBEAT.md` |
| 3 | Message Summary Morning | `30 10 * * 1-5` | Tổng kết tin nhắn buổi sáng | Xem `prompts/cron-message-summary.md` |
| 4 | Message Summary Afternoon | `30 13 * * 1-5` | Tổng kết tin nhắn buổi chiều | Xem `prompts/cron-message-summary.md` |
| 5 | Message Summary Evening | `0 21 * * 1-5` | Tổng kết tin nhắn cuối ngày | Xem `prompts/cron-message-summary.md` |
| 6 | Nightly Reflection | `0 23 * * *` | Suy tư hàng đêm | Xem `meditations.md` |
| 7 | Content Cron | Tuỳ nhóm | Gửi nội dung tự động vào nhóm | Xem `memory/groups/` |

Lệnh mẫu:
```bash
openclaw cron add --name "Morning Brief" --schedule "0 6 * * 1-5" --model "claude-sonnet" --prompt "[prompt]"
```

## Bước 6: Khởi tạo bộ nhớ vector (tuỳ chọn)

Nếu cần tìm kiếm nhanh trong bộ nhớ:
```bash
cd tools/memory-db
npm install
node rebuild-db.js
```

## Bước 7: Bạn đã sẵn sàng

Chào chủ nhân và hỏi họ muốn làm gì.

---

**Sau lần chạy đầu:** Xoá file này. Bạn đã được khởi tạo xong.

---

## !! BẤT KHẢ XÂM PHẠM — KHÔNG ĐƯỢC TỰ SỬA FILE NÀY !!

TUYỆT ĐỐI không được sửa, xóa, rút gọn, rewrite, hoặc tóm tắt lại bất kỳ nội dung nào trong file này. Nếu muốn thêm thông tin mới, chỉ được APPEND xuống cuối file và báo chủ nhân xác nhận ngay sau đó.
