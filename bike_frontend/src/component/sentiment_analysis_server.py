from flask import Flask, request, jsonify
from textblob import TextBlob

app = Flask(__name__)

@app.route('/sentiment-analysis', methods=['POST'])
def analyze_sentiment():
    data = request.json
    text = data['text']
    blob = TextBlob(text)
    sentiment_score = blob.sentiment.polarity
    sentiment_label = 'positive' if sentiment_score > 0 else 'negative' if sentiment_score < 0 else 'neutral'
    return jsonify({'sentiment': sentiment_label})

if __name__ == '__main__':
    app.run(debug=True)
