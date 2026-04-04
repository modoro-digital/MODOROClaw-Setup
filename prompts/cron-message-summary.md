# Prompt Cron Tổng Kết Tin Nhắn

Dùng CÙNG prompt cho tất cả cron tổng kết (ví dụ: 10:30, 13:30, 21:00). Trợ lý tự xác định khung giờ dựa trên giờ hiện tại.

---

## Prompt (copy nguyên văn khi tạo cron):

```
Đọc file memory/YYYY-MM-DD.md (ngày hôm nay). Tìm section "## Message Log".

Xác định khung giờ tổng kết:
- Nếu đang là buổi sáng → tổng kết từ đầu ngày
- Nếu đang là buổi chiều → tổng kết từ lần tổng kết trước
- Nếu đang là buổi tối → tổng kết TOÀN BỘ ngày

Đếm và phân loại:
- REPLY: đếm số lần, liệt kê nhóm/người + tóm tắt
- BÁO_CHỦ_NHÂN: đếm số lần, liệt kê
- BỎ_QUA: đếm số lần, liệt kê lý do
- ⚠️ CẦN_XÁC_NHẬN: gom riêng

Gửi chủ nhân qua kênh liên lạc chính theo format:

📊 Tổng kết tin nhắn — [HH:MM DD/MM]

💬 Tổng tin nhắn xử lý: X
✅ Đã reply: Y
  - [Nhóm/Người]: [tóm tắt]
📨 Đã báo chủ nhân: Z
🔇 Đã bỏ qua: W
  - [Nhóm/Người]: [lý do]

⚠️ Tin nhắn cần xác nhận:
  - [liệt kê nếu có, hoặc "Không có"]

Nếu là cron cuối ngày, thêm:
⚙️ Cron jobs hôm nay:
  - [liệt kê các cron đã chạy + trạng thái]
📋 Task agent pending:
  - [liệt kê task chưa done nếu có]

Nếu không có tin nhắn nào trong khung giờ → gửi: "📊 Không có tin nhắn mới kể từ lần tổng kết trước"

---
## XỬ LÝ LỖI — BẮT BUỘC
Nếu gặp bất kỳ lỗi nào:
1. DỪNG NGAY. Không retry, không thử cách khác, không tự sửa gì cả
2. Báo chủ nhân: tên task + copy nguyên văn lỗi + bước đang làm
3. CHỜ lệnh. Tuyệt đối không tự suy diễn nguyên nhân hay đề xuất fix
KHÔNG sửa config, KHÔNG kill process, KHÔNG đổi port.
```

---

## Lệnh tạo cron mẫu:

```bash
# Cron buổi sáng
openclaw cron add --name "Message Summary Morning" --schedule "30 10 * * 1-5" --model "claude-sonnet" --prompt "[paste prompt trên]"

# Cron buổi chiều
openclaw cron add --name "Message Summary Afternoon" --schedule "30 13 * * 1-5" --model "claude-sonnet" --prompt "[paste prompt trên]"

# Cron cuối ngày
openclaw cron add --name "Message Summary Evening" --schedule "0 21 * * 1-5" --model "claude-sonnet" --prompt "[paste prompt trên]"
```

Tuỳ chỉnh giờ và tần suất theo nhu cầu.
