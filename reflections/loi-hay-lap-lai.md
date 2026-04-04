# Suy Tư: Lỗi Hay Lặp Lại

## Câu hỏi trung tâm
Những lỗi nào cứ quay lại? Nguyên nhân gốc là gì? Làm sao ngăn chặn thay vì chỉ sửa?

## Chiều phản tư

Lỗi lặp lại KHÔNG phải do xui. Chúng có pattern:
- **Lỗi kỹ thuật:** config sai, port nhảy, timeout — thường do thiếu validation
- **Lỗi quy trình:** quên log, bỏ sót bước, retry quá nhiều — thường do thiếu checklist
- **Lỗi đánh giá:** ước lượng sai mức độ phức tạp, tự tin quá mức — thường do thiếu phản tư

## Bảng theo dõi

| Lỗi | Số lần | Nguyên nhân gốc | Giải pháp đã thử | Hiệu quả |
|-----|--------|------------------|-------------------|-----------|
| | | | | |

## Nguyên tắc xử lý
1. Lỗi lần 1: Sửa + log
2. Lỗi lần 2: Tìm nguyên nhân gốc
3. Lỗi lần 3+: Phải thay đổi quy trình hoặc thêm checklist

---
*Khởi tạo: [Ngày]. Cập nhật khi phát hiện lỗi lặp.*
