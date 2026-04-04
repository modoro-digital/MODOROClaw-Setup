# MODOROClaw Setup

Bộ template workspace hoàn chỉnh để vận hành trợ lý AI cá nhân với [OpenClaw](https://github.com/openclaw/openclaw). Repo này chứa các file mẫu, công cụ và hướng dẫn để bạn có thể tùy chỉnh cho trợ lý AI của riêng mình.

> **Dự án gốc:** Fork từ [OpenClaw-Setup](https://github.com/ucsandman/OpenClaw-Setup) của [Wes Sander](https://github.com/ucsandman) & [MoltFire](https://github.com/moltfire).
> Phiên bản Việt hoá và cải tiến bởi **MODORO Technology Corporation** — dựa trên kinh nghiệm thực chiến vận hành trợ lý AI "Tin" phục vụ CEO và đội ngũ doanh nghiệp.

## Giới thiệu

Đây là bản triển khai tham khảo cho một workspace trợ lý AI có cấu trúc. Bao gồm:

- **File nhận dạng** — định hình tính cách và triết lý vận hành cho trợ lý
- **Hệ thống bộ nhớ** — lưu trữ ngữ cảnh dài hạn, hồ sơ người dùng, dự án
- **Framework tự phản tư** — cơ chế để trợ lý tự cải thiện theo thời gian
- **Công cụ vận hành** — bảo mật, tìm kiếm bộ nhớ, kiểm tra tự động
- **Dữ liệu mẫu** — ví dụ cách tổ chức workspace (dùng nhân vật giả, không chứa thông tin cá nhân thật)

## Bắt đầu nhanh

1. **Clone hoặc tải** repo này về máy
2. **Sao chép** các file vào thư mục workspace của OpenClaw
3. **Tuỳ chỉnh** các file nhận dạng cho trợ lý của bạn
4. **Cập nhật** hồ sơ người dùng với thông tin của bạn
5. **Khởi chạy** OpenClaw trỏ đến workspace

## Cấu trúc thư mục

```
.
├── README.md                 # File này
├── BOOTSTRAP.md              # Hướng dẫn khởi tạo lần đầu
├── SOUL.md                   # Triết lý cốt lõi của trợ lý
├── IDENTITY.md               # Thông tin nhận dạng trợ lý
├── USER.md                   # Hồ sơ người dùng (chủ nhân)
├── AGENTS.md                 # Quy tắc vận hành và giao thức
├── HEARTBEAT.md              # Hệ thống kiểm tra tự động
├── MEMORY.md                 # Bảng chỉ mục bộ nhớ
├── meditations.md            # Chỉ mục framework tự phản tư
├── docs/                     # Tài liệu hướng dẫn
│   ├── agent-architecture.md # Kiến trúc đa agent
│   ├── decision-template.md  # Mẫu ghi nhận quyết định
│   ├── morning-brief-template.md  # Mẫu báo cáo buổi sáng
│   ├── silent-replies.md     # Quy tắc phản hồi im lặng
│   └── task-routing.md       # Quy tắc phân bổ công việc
├── memory/                   # Kho lưu trữ bộ nhớ
│   ├── people/               # Hồ sơ từng người
│   ├── projects/             # Theo dõi dự án
│   ├── decisions/            # Nhật ký quyết định
│   └── YYYY-MM-DD.md         # Nhật ký hàng ngày (mẫu)
├── reflections/              # File tự phản tư
├── prompts/                  # Prompt mẫu tái sử dụng
│   ├── heartbeat-prompt.md   # Prompt kiểm tra định kỳ
│   ├── meditation-prompt.md  # Prompt phản tư ban đêm
│   ├── memory-search.md      # Prompt tìm kiếm bộ nhớ
│   └── session-start.md      # Prompt khởi động phiên
└── tools/                    # Công cụ hỗ trợ
    ├── example-tool/         # Mẫu tạo công cụ mới
    ├── memory-db/            # SQLite + FTS5 tìm kiếm bộ nhớ
    └── security/             # Công cụ bảo mật
```

## Các khái niệm chính

### File nhận dạng

**SOUL.md** định nghĩa trợ lý là ai ở cấp độ sâu nhất — triết lý, giá trị, nguyên tắc hành vi. Đây là nơi bạn định hình tính cách, không chỉ năng lực.

**IDENTITY.md** chứa thông tin bề mặt: tên, cách xưng hô, phong cách, emoji đại diện.

**USER.md** là hồ sơ của bạn — để trợ lý biết mình đang phục vụ ai.

### Hệ thống bộ nhớ

- **MEMORY.md**: Bảng chỉ mục nhẹ (~1-2k tokens) được nạp mỗi phiên
- **memory/people/**: Hồ sơ chi tiết từng người bạn tương tác
- **memory/projects/**: Dự án đang hoạt động và tiến độ
- **memory/decisions/**: Quyết định quan trọng kèm lý do
- **Nhật ký hàng ngày**: Ghi chép liên tục những gì xảy ra mỗi ngày

### Framework tự phản tư

Cơ chế suy tư (meditation) cho phép trợ lý tự phản tư theo chiều dọc thời gian. Các chủ đề được xem xét lại nhiều lần cho đến khi kết tinh thành những hiểu biết bền vững, sau đó được thăng cấp vào file cốt lõi.

Xem `meditations.md` để biết chỉ mục và `reflections/` để xem ví dụ.

### Công cụ vận hành

- **memory-db/**: SQLite + FTS5 tìm kiếm bộ nhớ nhanh, không cần API
- **security/**: Bộ lọc nội dung gửi ra ngoài và ghi nhật ký kiểm tra
- **example-tool/**: Mẫu để tạo công cụ mới

## Hướng dẫn tuỳ chỉnh

1. **Bắt đầu với SOUL.md**: Định nghĩa triết lý cốt lõi cho trợ lý
2. **Điền USER.md**: Trợ lý biết càng nhiều về bạn, phục vụ càng tốt
3. **Thiết lập MEMORY.md**: Trỏ đến các file ngữ cảnh đang hoạt động
4. **Tạo dự án đầu tiên**: Thêm một dự án bạn đang làm
5. **Xoá BOOTSTRAP.md** sau lần chạy đầu tiên

## Tính năng nổi bật

1. **Quy trình xử lý lỗi bắt buộc** — DỪNG → MÔ TẢ → CHỜ. Không tự ý fix khi gặp lỗi
2. **Quy tắc bảo vệ config** — Tuyệt đối không tự sửa file cấu hình hệ thống
3. **Giới hạn thực thi** — Max 20 phút/task, max 20 vòng lặp. Quá giới hạn = dừng + báo cáo
4. **Quy tắc backup bắt buộc** — Backup trước khi sửa bất kỳ file cốt lõi nào
5. **Bảo mật đa kênh** — Chỉ nhận lệnh từ chủ nhân qua kênh xác thực, chống social engineering
6. **Template nội dung thực chiến** — Framework viết content cho mạng xã hội (Facebook, LinkedIn)
7. **Cron job có error handling** — Mỗi task tự động đều kèm quy trình xử lý lỗi chuẩn
8. **Chữ ký nhóm và allowlist** — Quản lý phản hồi theo từng nhóm chat, ký tên phù hợp ngữ cảnh
9. **Message Logging bắt buộc** — Log MỌI tin nhắn (reply, báo sếp, bỏ qua) + 3 cron tổng kết/ngày
10. **Bộ nhớ phân cấp** — MEMORY.md chỉ mục nhẹ + drill-down vào people/, groups/, projects/
11. **Hệ thống suy tư** — Phản tư hàng đêm, thăng cấp insight vào file cốt lõi
12. **BẤT KHẢ XÂM PHẠM** — Bảo vệ file cốt lõi khỏi bị AI tự ý sửa/xóa/tóm tắt

## Lưu ý an toàn

- Repo này dùng **dữ liệu mẫu giả** — không chứa API key, mật khẩu hay thông tin cá nhân thật
- Tất cả ví dụ là template — thay thế bằng nội dung của riêng bạn
- Đọc kỹ phần bảo mật trong `AGENTS.md` trước khi chạy

## Liên kết

- [OpenClaw](https://github.com/openclaw/openclaw) — Nền tảng agent AI mà workspace này được thiết kế cho
- [OpenClaw Docs](https://docs.openclaw.ai) — Tài liệu và hướng dẫn
- [MODORO](https://modoro.vn) — Công ty CP Công nghệ MODORO
- [YBAI Marketing](https://ybai.vn) — Giải pháp Digital Marketing tổng thể

## Đóng góp

Đây là template mở. Tuỳ chỉnh, cải tiến và biến nó thành của riêng bạn. Nếu tạo ra phần bổ sung hữu ích, hãy chia sẻ lại cho cộng đồng.

## Giấy phép

MIT — Sử dụng tuỳ ý. Hãy xây dựng thứ gì đó tuyệt vời.

---

**Tác giả bản gốc:** [Wes Sander](https://github.com/ucsandman) & [MoltFire](https://github.com/moltfire) — reference implementation cho cộng đồng OpenClaw.

**Việt hoá và cải tiến:** [MODORO Technology Corporation](https://modoro.vn) — CEO Quốc MODORO

**Liên hệ:**
- Website: [modoro.vn](https://modoro.vn) | [lebaoquoc.com](https://lebaoquoc.com)
- Email: quoclbit@gmail.com
- Telegram: [@quocmodoro](https://t.me/quocmodoro)
