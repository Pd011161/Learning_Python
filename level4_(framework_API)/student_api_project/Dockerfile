FROM python:3.10-slim AS builder

COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv

WORKDIR /app

# ใส่ไฟล์ pyproject.toml และ uv.lock ก่อน (cache layer)
COPY pyproject.toml uv.lock* ./

# ติดตั้ง dependencies + สร้าง .venv
RUN uv sync

# จากนั้น copy source code (จะเร็วขึ้นถ้า requirements ไม่เปลี่ยน)
COPY . .

FROM python:3.10-slim

WORKDIR /app

COPY --from=builder /app/.venv /app/.venv
COPY . .

ENV VIRTUAL_ENV=/app/.venv
ENV PATH="/app/.venv/bin:$PATH"

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
