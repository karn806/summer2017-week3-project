from python:2.7

RUN pip install flask
COPY . /app
WORKDIR /app
EXPOSE 5000

CMD python app.py
