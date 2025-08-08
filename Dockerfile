# Use official lightweight Python image
FROM python:3.13-slim

# Install security updates and remove package lists
RUN apt-get update && apt-get upgrade -y && apt-get clean && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy dependency list and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY . .

# Start Flask using gunicorn (Cloud Run uses $PORT env var)
CMD exec gunicorn --bind :$PORT server:app
