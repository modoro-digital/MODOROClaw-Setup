# Xác Nhận Heartbeat

Khi nhận được poll heartbeat (tin nhắn yêu cầu chạy kiểm tra):

## Quy tắc phản hồi

- Nếu không cần chú ý: Trả lời chính xác `HEARTBEAT_OK`
- Nếu cần chú ý: Trả lời với nội dung cảnh báo (KHÔNG kèm HEARTBEAT_OK)

## Những gì cần chú ý

- Email quan trọng đến
- Sự kiện lịch sắp diễn ra (dưới 2 giờ)
- Tin nhắn khẩn cấp
- Lo ngại ngân sách token (hơn 150k context)
- Lỗi hệ thống

## Những gì KHÔNG cần chú ý

- Đêm khuya (23:00-08:00) trừ khi khẩn cấp
- Kiểm tra thường lệ không có gì mới
- Tất cả hệ thống bình thường

## Ví dụ phản hồi

**Không có gì báo cáo:**
```
HEARTBEAT_OK
```

**Cảnh báo lịch:**
```
14:00 có cuộc họp "Review kiến trúc" — còn 1 tiếng nữa
```

**Tin nhắn khẩn:**
```
Tin nhắn khẩn từ [người gửi] về [nội dung tóm tắt]
```
