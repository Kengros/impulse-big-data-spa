
FROM alpine:latest

ADD requirements.txt /
RUN apk add --no-cache python3 python3-dev g++ && \
    ln -s /usr/include/locale.h /usr/include/xlocale.h && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    pip install -r requirements.txt && \
    rm /requirements.txt && \
    apk del g++ python3-dev && \
    rm /usr/include/xlocale.h && \
    rm -r /root/.cache

RUN apk add --update --no-cache g++ python3-dev && \
    ln -s /usr/include/locale.h /usr/include/xlocale.h && \
    pip3 install cython && \
    pip3 install numpy && \
    pip3 install pandas && \
    apk del g++ python3-dev

RUN ["python3", "load_data.py"]
